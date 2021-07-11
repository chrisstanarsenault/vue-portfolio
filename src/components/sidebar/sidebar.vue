<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-avatar">
      I will be an Avatar
    </div>

    <div class="sidebar-page-links">
      <router-link to="/">
        About
      </router-link>

      <router-link to="/">
        My Skills
      </router-link>

      <router-link to="/">
        Work
      </router-link>

      <router-link to="/">
        Blog
      </router-link>

      <router-link to="/">
        Contact
      </router-link>
    </div>
    <div class="sidebar-social-icons">
      <p>soc1</p>
      <p>soc2</p>
      <p>soc3</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import '#styles/sidebar.css'

export default defineComponent({
  name: 'Sidebar',

})
</script>
