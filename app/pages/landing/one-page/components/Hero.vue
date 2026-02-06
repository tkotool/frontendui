<template>
  <section class="relative lg:pt-44 lg:pb-36 md:pt-34 md:pb-20 pt-30 pb-16">
    <!-- <div class="absolute rotate-45 size-125 border border-dashed border-t-default-300 border-l-default-300 border-r-default-300/40 border-b-default-700 rounded-full end-40 -bottom-62.5 z-20 lg:block hidden"></div> -->
    <!-- <div class="absolute rotate-45 size-175 border border-dashed border-t-default-300 border-l-default-300 border-r-default-300/40 border-b-default-700 rounded-full end-16 -bottom-87.5 z-20 lg:block hidden"></div> -->
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Left Column: Content -->
        <div class="order-2 lg:order-1">
          <h1 class="mb-8 leading-relaxed md:text-5xl text-4xl font-semibold text-default-800">
            Plateforme dédiée à la préparation spécifique du
            <span class="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-primary/10 before:rounded-md before:backdrop-blur-xl"> <span class="relative text-primary">TCF CANADA</span></span>
          </h1>
          <p class="mb-6 text-lg text-default-500">Simulations réelles et captivantes, inspirées de sujets d’actualité.
          En quête de succès ? Accédez aux meilleures ressources pour décrocher votre TCF !</p>
          <div class="flex items-center gap-2.5">
            <a href="#">
              <button type="button" class="btn bg-primary text-white">
                <Icon icon="lucide:rocket" class="size-4"></Icon>
                Commencer gratuitement
              </button>
            </a>
            <a href="#">
              <button type="button" class="btn hover:bg-danger border border-dashed border-danger hover:text-white bg-transparent text-danger">
                <Icon icon="lucide:shopping-cart" class="size-4"></Icon>
                 Souscrire maintenant
              </button>
            </a>
          </div>
        </div>

        <!-- Right Column: Slider -->
        <div class="order-1 lg:order-2 flex items-center justify-center">
          <div class="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <!-- Slider Container -->
            <div class="relative w-full h-full">
              <!-- Slide 1 -->
              <div :class="['absolute w-full h-full transition-opacity duration-700 ease-in-out', currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0']">
                <img :src="slides[0]" alt="Slide 1" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-center justify-center">
                  <div class="emoji-container" @click="handleEmojiClick">
                    <span class="emoji-text">▶️</span>
                  </div>
                </div>
              </div>

              <!-- Slide 2 -->
              <div :class="['absolute w-full h-full transition-opacity duration-700 ease-in-out', currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0']">
                <img :src="slides[1]" alt="Slide 2" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-center justify-center">
                  <div class="emoji-container" @click="handleEmojiClick">
                    <span class="emoji-text">▶️</span>
                  </div>
                </div>
              </div>

              <!-- Slide 3 -->
              <div :class="['absolute w-full h-full transition-opacity duration-700 ease-in-out', currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0']">
                <img :src="slides[2]" alt="Slide 3" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-center justify-center">
                  <div class="emoji-container" @click="handleEmojiClick">
                    <span class="emoji-text">▶️</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide Indicators -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              <button
                v-for="(_, index) in slides"
                :key="index"
                @click="goToSlide(index)"
                :class="['w-2.5 h-2.5 rounded-full transition-all duration-300', currentSlide === index ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/75']"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import slide1 from '~/assets/images/slide/slide1.jpg'
import slide2 from '~/assets/images/slide/slide2.jpg'
import slide3 from '~/assets/images/slide/slide3.jpg'

const currentSlide = ref(0)
const slides = [slide1, slide2, slide3]
let autoplayInterval: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  resetAutoplay()
}

const goToSlide = (index: number) => {
  currentSlide.value = index
  resetAutoplay()
}

const handleEmojiClick = () => {
  nextSlide()
}

const resetAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
  startAutoplay()
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 4000)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>

<style scoped>
.emoji-container {
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse-scale 2s infinite;
}

.emoji-container:hover {
  animation: none;
  transform: scale(1.2);
}

.emoji-text {
  font-size: 2rem;
  display: inline-block;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

@keyframes pulse-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
