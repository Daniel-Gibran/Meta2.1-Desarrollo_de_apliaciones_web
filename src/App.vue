<template>
  <v-app>
    <AppHeader />

    <v-main>
      <IndexPage />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  import AppFooter from '@/components/AppFooter.vue'
  import AppHeader from '@/components/AppHeader.vue'
  import IndexPage from '@/pages/index.vue'
</script>
