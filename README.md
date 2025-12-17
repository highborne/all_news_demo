# 📰 Storyblok News Demo — Nuxt

## Storyblok Quick Starter Project

Welcome to this **News Demo project built with Nuxt and Storyblok**.  
This application demonstrates how to build a modern, scalable, and CMS-driven news platform using **Storyblok as a headless CMS** and **Nuxt** as the frontend framework.

The goal of this project is to showcase **best practices for CMS integration**, dynamic routing, component-based content modeling, and API consumption.

---

## 📁 Project Entry Point

To get started, access the **`all_news_demo`** folder.

Inside the project, you’ll find important files such as:

- `nuxt.config.ts` — Nuxt configuration with Storyblok setup
- `pages/` — File-based routing (Home, Category, Dynamic pages)
- `storyblok/` — Vue components mapped to Storyblok blocks
- `server/api/` — Server routes for external News API integration

---

## 🎯 Project Overview

> A modern and responsive **News application** powered by **Storyblok (Headless CMS)** and **Nuxt**.  
> Content is fully managed through Storyblok, while the frontend dynamically renders pages, categories, and news cards.

---

## 🚀 Tech Stack

- **Nuxt 3**
- **TypeScript**
- **Storyblok (Headless CMS)**
- **Tailwind CSS**
- **Yarn**
- **News API**: [GNews](https://docs.gnews.io/)

---

## 🧭 How to Run the Project

```bash
# Clone the repository
git clone https://github.com/your-username/all_news_demo.git

# Enter the project directory
cd all_news_demo

# Install dependencies
yarn install

# Run the development server
yarn dev
# 📰 Storyblok News Demo — Nuxt
```

App runs at **http://localhost:3000**

---

## ✨ Features

- CMS-driven pages via Storyblok
- Dynamic category routes
- News listing by category
- External News API integration
- Fully responsive layout

---

## 🗂 Basic Structure

```txt
pages/
├── index.vue
├── category/[...slug].vue

storyblok/
├── Page.vue
├── CategoryPage.vue
├── NewsList.vue
├── NewsCard.vue
```

---

## 📜 License

MIT License

---

Made by **[Everton Oliveira](https://www.linkedin.com/in/evertonco/)**
