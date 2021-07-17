<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-avatar">
      <router-link to="/">
        <img
          :src="avatar"
        >
      </router-link>
    </div>

    <div class="sidebar-page-links">
      <router-link
        to="/about"
        class="sidebar-router-link"
      >
        About
      </router-link>

      <router-link
        to="/"
        class="sidebar-router-link"
      >
        My Skills
      </router-link>

      <router-link
        to="/"
        class="sidebar-router-link"
      >
        Work
      </router-link>

      <router-link
        to="/"
        class="sidebar-router-link"
      >
        Blog
      </router-link>

      <router-link
        to="/"
        class="sidebar-router-link"
      >
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

import avatar from '#assets/avatar.png'

export default defineComponent({
  name: 'Sidebar',

  setup () {
    return { avatar }
  },
})
</script>
