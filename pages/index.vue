<template>
  <div class="flex flex-col items-center">
    <!-- nav bar -->
    <!-- intro text-->
    <div class="flex flex-col items-center mb-14">
      <div class="text-4xl mx-auto"><span class="flamed">Hello</span> my name is <span class="flamed">Hiren</span>.</div>
      <div>I am a web developer based in Amsterdam. I am also a techno music fan and DJ.</div>
    </div>
    <!-- featured projects-->
    <div>In the past I have worked for Boldking, SaySimple, Storyteq, and a few more places.</div>
    <FeaturedProjects />
    <!-- activities timeline -->
    <!-- featured music | now playing, playlists, what i am doing -->
  </div>
</template>
<style scoped>
.flamed {
  background-image: url(https://c.tenor.com/_apm8JAlNcQAAAAC/moving-formation.gif);
  -moz-background-clip: text;
  -webkit-background-clip: text;
  @apply text-transparent;
}
</style>