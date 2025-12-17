export interface CategoryItem {
    slug: string,
    title: string,
    icon: { 
        id: number,
        alt: string,
        name: string,
        focus:string,
        title:string,
        source: string,
        filename: string,
        copyright: string,
        fieldtype: string,
        meta_data: [Object],
        is_external_url: boolean 
    },
}