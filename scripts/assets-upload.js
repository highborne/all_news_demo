import fs from 'fs'
import path from 'path'
import axios from 'axios'
import FormData from 'form-data'
import dotenv from 'dotenv'
import readline from 'readline'

dotenv.config()

const {
  STORYBLOK_MANAGEMENT_TOKEN,
  STORYBLOK_SPACE_ID
} = process.env

if (!STORYBLOK_MANAGEMENT_TOKEN || !STORYBLOK_SPACE_ID) {
  throw new Error('No necessary environment variables found.')
}

const readLineConst = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function uploadImage(filePath) {
    const fileName = path.basename(filePath)

    console.log(`Uploading: ${fileName}...`)

    try {
         const { data } = await axios.post(`https://mapi.storyblok.com/v1/spaces/${STORYBLOK_SPACE_ID}/assets`, 
            {"filename": fileName},
            {
                headers: {  Authorization: STORYBLOK_MANAGEMENT_TOKEN }
            }
        ) 

        const form = new FormData()

        Object.entries(data.fields).forEach(([key, value]) => {
            form.append(key, value)
        })
        form.append('file', fs.createReadStream(filePath), fileName)

        await axios.post(data.post_url, form, {
            headers: {
                ...form.getHeaders()
            }
        })

        await axios.get(`https://mapi.storyblok.com/v1/spaces/${STORYBLOK_SPACE_ID}/assets/${data.id}/finish_upload`,
            {
                headers: {  Authorization: STORYBLOK_MANAGEMENT_TOKEN }
            }
        )

        return  {
            fileName,
            assetId: data.id
        }
    } catch (error) {
       throw new Error(console.log(`Failed to upload ${fileName}: ${error.message}`))
    }
}

readLineConst.question(
    'Enter a list of image address in an array object (["img1", "img2", ...]) ', 
    async (answer) => {
        let imageList 

        try {
            imageList = JSON.parse(answer) 
        } catch (error) {
            console.error('Invalid JSON array')
            readLineConst.close()
            return
        }
        
        const filePathList = imageList.map(imgAddress => path.resolve(`assets/images/${imgAddress}`)).filter(filePath => fs.existsSync(filePath))

        if(!filePathList.length) {
            console.error('No valid images found to upload.')                            
            readLineConst.close()
            return
        }

        const uploadPromises = filePathList.map(filePath => uploadImage(filePath))

        const results = await Promise.allSettled(uploadPromises)

        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log(`Uploaded: ${result.value.fileName} with Asset ID: ${result.value.assetId}`)
            } 
        })

        readLineConst.close()
    }
)



