<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
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
      <!-- <img src="../assets/logo.png" width="54" height="54" class="fill-current h-8 w-8 mr-2"/> -->
      <span class="font-semibold text-xl tracking-tight">Tailwind</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="block sm:hidden w-full flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          {{$t("menu.home")}}
        </router-link>
        <router-link
          to="/aboutus"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          {{ $t('menu.about') }}
        </router-link>

        <router-link
          to="/service"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
           {{ $t('menu.service') }}
        </router-link>

        <router-link
          to="/news"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
           {{ $t('menu.news') }}
        </router-link>
        <router-link
          to="/contact"
          class="block ml-2 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          {{ $t('menu.contact') }}
        </router-link>
      </div>
      <div>
        <!-- <a
          @click="changeLang()" 
          class="inline-block text-sm px-4 py-2 cursor-pointer leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Хэл солих</a
        > -->
        <select  @change="changeLang($event)" v-model="lang">
                    <option value="mn" selected>Монгол</option>
                    <option value="en">English</option>
    
        </select>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
 data(){
    return {
      lang: "",
      $i18n: {
        locale: "mn",
      },
    }
  },
  methods: {
    changeLang()
    {
      if (this.lang == "mn")
      {
        this.$i18n.locale = "mn";
      }
      if (this.lang == "en")
      {
        this.$i18n.locale = "en";
      }
     
    },
  }
};
</script>
