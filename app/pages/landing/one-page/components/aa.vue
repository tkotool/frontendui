<template>

<section class="relative lg:pt-44 lg:pb-36 md:pt-34 md:pb-20 pt-30 pb-16 overflow-hidden">



  <div class="container">
    <div class="grid lg:grid-cols-2 gap-10 items-center">

        <!-- SLIDE (1er sur mobile) -->
      <div class="order-1 lg:order-2 relative w-full flex justify-center lg:justify-end">
        <div class="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
          <div class="flex w-[300%]" style="animation: slideHero 15s ease-in-out infinite;">

            <div class="relative w-full h-64 md:h-72 lg:h-80 flex-shrink-0">
                 <div class="absolute inset-0 flex items-center justify-center">
                                            <a href="#" class="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                                                <svg class="h-5 w-5" style="fill: #fff;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                                                </svg>
                                            </a>
                                        </div>
                
              <img :src="slide1"  class=" h-full object-cover rounded-lg" />
            
            </div>

            <div class="relative w-full h-64 md:h-72 lg:h-80 flex-shrink-0">
             
                          <div class="absolute inset-0 flex items-center justify-center">
                                            <a href="#" class="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                                                <svg class="h-5 w-5" style="fill: #fff;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                                                </svg>
                                            </a>
                                        </div>                       
              <img :src="slide2" class=" h-full object-cover rounded-lg" />
              
            </div>

            <div class="relative w-full h-64 md:h-72 lg:h-80 flex-shrink-0">
             
                          <div class="absolute inset-0 flex items-center justify-center">
                                            <a href="#" class="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                                                <svg class="h-5 w-5" style="fill: #fff;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                                                </svg>
                                            </a>
                                        </div>                       
              <img :src="slide3"  class=" h-full object-cover rounded-lg" />
              
            </div>

          </div>
        </div>
      </div>

      <!-- TEXTE (2e sur mobile) -->
      <div class="order-2 lg:order-1">
        <h1 class="mb-8 leading-relaxed md:text-5xl text-4xl font-semibold text-default-800">
          Plateforme dédiée à la préparation spécifique du
          <span class="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-primary/10 before:rounded-md before:backdrop-blur-xl">
            <span class="relative text-primary">TCF CANADA</span>
          </span>
        </h1>

        <p class="mb-6 text-lg text-default-500">
          Simulations réelles et captivantes, inspirées de sujets d’actualité.
          En quête de succès ? Accédez aux meilleures ressources pour décrocher votre TCF !
        </p>

        <div class="flex flex-wrap items-center gap-2.5">
          <button class="btn bg-primary text-white">
              <Icon icon="lucide:rocket" class="size-4"></Icon>
              Commencer gratuitement
            </button>
              <button class="btn hover:bg-danger border border-dashed border-danger hover:text-white bg-transparent text-danger">
              <Icon icon="lucide:shopping-cart" class="size-4"></Icon>
              Souscrire maintenant
            </button>

        </div>
      </div>

    </div>
  </div>
</section>
</template>


<script setup lang="ts">
import { Icon } from '@iconify/vue'
import slide1 from '~/assets/images/slide/slide1.jpg'
import slide2 from '~/assets/images/slide/slide2.jpg'
import slide3 from '~/assets/images/slide/slide3.jpg'
</script>

<style scoped>
   @keyframes slideHero {
      0%   { transform: translateX(0%); }
      25%  { transform: translateX(0%); }
      33.33%  { transform: translateX(-100%); }
      58.33%  { transform: translateX(-100%); }
      66.66%  { transform: translateX(-200%); }
      91.66% { transform: translateX(-200%); }
      100% { transform: translateX(0%); }
    }

</style>