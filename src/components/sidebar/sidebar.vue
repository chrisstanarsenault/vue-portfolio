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
        to="/my-skills"
        class="sidebar-router-link"
      >
        My Skills
      </router-link>

      <router-link
        to="/work"
        class="sidebar-router-link"
      >
        Work
      </router-link>

      <router-link
        to="/blog"
        class="sidebar-router-link"
      >
        Blog
      </router-link>

      <router-link
        to="/contact"
        class="sidebar-router-link"
      >
        Contact
      </router-link>
    </div>

    <div class="sidebar-social-icons-wrapper">
      <a
        href="https://www.twitter.com/mynameischrisa"
        target="_blank"
        rel="noopener noreferrer"
        class="sidebar-social-icons-link"
      >
        <i class="devicon-twitter-original" />
      </a>
      <a
        href="https://www.linkedin.com/in/chrisstanarsenault"
        target="_blank"
        rel="noopener noreferrer"
        class="sidebar-social-icons-link"
      >
        <i class="devicon-linkedin-plain" />
      </a>
      <a
        href="https://www.github.com/chrisstanarsenault"
        target="_blank"
        rel="noopener noreferrer"
        class="sidebar-social-icons-link"
      >
        <i class="devicon-github-original" />
      </a>
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
