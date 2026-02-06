<template>
  <section id="about" class="relative lg:py-24 md:py-12 py-14">
    <div class="container">
      <div class="text-center lg:w-3xl mx-auto mb-10">
        <h1 class="mb-4 leading-relaxed text-3xl lg:text-4xl font-semibold text-default-800">Préparez votre TCF Canada — simple, rapide, efficace</h1>
        <p class="text-lg text-default-500">Simulations, exercices et conseils clairs pour réussir votre test oral et écrit. Suivez un parcours structuré, pratique et ciblé.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div class="bg-white/50 p-4 sm:p-6 rounded-xl shadow-sm text-center flex flex-col">
          <img :src="img1" alt="Étudiants qui étudient" loading="lazy" decoding="async" class="w-full h-36 sm:h-44 md:h-48 lg:h-44 object-cover rounded-md mb-4" />
          <h3 class="text-lg sm:text-xl font-semibold text-default-800 mb-2">Cours guidés</h3>
          <p class="text-sm sm:text-base text-default-500 flex-1">Leçons courtes et structurées pour progresser pas à pas.</p>
        </div>

        <div class="bg-white/50 p-4 sm:p-6 rounded-xl shadow-sm text-center flex flex-col">
          <img :src="img2" alt="Supports et exercices" loading="lazy" decoding="async" class="w-full h-36 sm:h-44 md:h-48 lg:h-44 object-cover rounded-md mb-4" />
          <h3 class="text-lg sm:text-xl font-semibold text-default-800 mb-2">Exercices ciblés</h3>
          <p class="text-sm sm:text-base text-default-500 flex-1">Pratique orale et écrite avec corrigés et astuces utiles.</p>
        </div>

        <div class="bg-white/50 p-4 sm:p-6 rounded-xl shadow-sm text-center flex flex-col">
          <img :src="img3" alt="Symbole Canada" loading="lazy" decoding="async" class="w-full h-36 sm:h-44 md:h-48 lg:h-44 object-cover rounded-md mb-4" />
          <h3 class="text-lg sm:text-xl font-semibold text-default-800 mb-2">Préparation TCF Canada</h3>
          <p class="text-sm sm:text-base text-default-500 flex-1">Conseils spécifiques au test canadien et simulations d'examen.</p>
        </div>
      </div>

      <div class="text-center mt-6">
        <button type="button" class="btn border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">En savoir plus</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import img1 from '~/assets/images/slide/slide4.jpg'
import img2 from '~/assets/images/slide/slide5.jpg'
import img3 from '~/assets/images/slide/slide6.jpg'
</script>
          
