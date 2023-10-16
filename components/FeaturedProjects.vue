<template>
    <h2>Featured Projects</h2>
    <div v-for="project in projects.data">
        <div class="border-2 border-solid border-violet-500 border-spacing-2">
            {{ project.attributes.Name }}
            <div v-html="parseDescription(project.attributes.Description)" />
            {{ project.attributes.Cover.data.attributes.url }}
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const { data: projects } = await useFetch('https://hiren-devs-strapi-j5h2f.ondigitalocean.app/api/hirens-projects?populate=*')

const parseDescription = (description) => {
    const regex = /\[(.*?)\]\((.*?)\)/g
    const parsedDescription = description.replace(regex, (match, text, url) => {
        return `<a href="${url}" class="underline text-blue-600 cursor-pointer" target="_blank">${text}</a>`
    })

    return parsedDescription
}
</script>