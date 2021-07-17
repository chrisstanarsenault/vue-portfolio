<template>
  <div class="app-wrapper">
    <sidebar />
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from '#components/sidebar/sidebar.vue'

import '#styles/normalize.css'
import '#styles/app.css'

export default defineComponent({
  name: 'Home',

  components: {
    Sidebar,
  },
})
</script>
