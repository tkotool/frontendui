<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p class="text-gray-600">
          Fill out the form and our team will get back to you within 2 working days.
        </p>
      </div>

      <!-- Main Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">

        <!-- FORM (Mobile first) -->
        <div class="order-1 lg:order-2 bg-white p-8 rounded-2xl shadow-sm">
          <form @submit.prevent="handleSubmit" class="space-y-6">

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input v-model="form.firstName" type="text"
                  class="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
              </div>

              <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input v-model="form.lastName" type="text"
                  class="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input v-model="form.email" type="email"
                  class="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
              </div>

              <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input v-model="form.phone" type="tel"
                  class="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
              </div>
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700">
                Company
              </label>
              <input v-model="form.company" type="text"
                class="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700">
                Subject
              </label>
              <input v-model="form.subject" type="text"
                class="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea v-model="form.message" rows="5"
                class="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
              </textarea>
            </div>

            <div>
              <button type="submit"
                class="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
                Send Message
              </button>
            </div>

          </form>
        </div>

        <!-- CONTACT INFO -->
        <div class="order-2 lg:order-1 space-y-6">

          <div class="bg-white p-6 rounded-2xl shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Our Office
            </h3>
            <p class="text-gray-600">
              501 Powell Ave<br>
              Clarks Summit, PA 18411<br>
              United States
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Email & Phone
            </h3>
            <p class="text-gray-600">
              contact@yourcompany.com<br>
              +1 (000) 000-0000
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Business Hours
            </h3>
            <p class="text-gray-600">
              Monday – Friday<br>
              9:00 AM – 6:00 PM
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>