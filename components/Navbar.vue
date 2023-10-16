
import { NuxtLink } from '#build/components';
<template>
    <!-- logo link to home-->
    <header>
        <nav class="py-8 flex flex-row max-w-3xl justify-between">
            <NuxtLink to="/">
                <img src="/hirshi2.svg" width="20"/>
            </NuxtLink>
            <NuxtLink to="/about">
                About
            </NuxtLink>
            <NuxtLink to="/projects">
                Projects
            </NuxtLink>
            <NuxtLink to="/contact">
                Contact
            </NuxtLink>
        </nav>
    </header>
</template>