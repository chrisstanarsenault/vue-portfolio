<template>
  <sidebar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from '#components/sidebar/sidebar.vue'

import '#styles/normalize.css'

export default defineComponent({
  name: 'Home',

  components: {
    Sidebar,
  },
})
</script>
