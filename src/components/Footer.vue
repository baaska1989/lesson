<template>
  <footer class="bg-teal-500 shadow bg-teal-500">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
            />
          </svg>
          <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-white-500 sm:mb-0"
        >
          <li>
            <router-link to="/" class="mr-4 hover:underline md:mr-6">Нүүр хуудас</router-link>
          </li>
          <li>
            <router-link to="/aboutus" class="mr-4 hover:underline md:mr-6">Бидний тухай</router-link>
          </li>
           <li>
            <router-link to="/service" class="mr-4 hover:underline md:mr-6">Үйлчилгээ</router-link>
          </li>
          <li>
            <router-link to="/news" class="mr-4 hover:underline md:mr-6">Мэдээ мэдээлэл</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:underline">Холбоо барих</router-link>
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm sm:text-center"
        >© 2023
        <a href="https://exe.edu.mn" class="hover:underline">Olonlog EXE</a>.
        All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
