<template>
  <v-card height="100%">
    <v-img :alt="title" cover height="220" :src="imageUrl">
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="primary" indeterminate />
        </div>
      </template>
    </v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>Autor: {{ author }}</v-card-subtitle>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  defineProps<{
    imageUrl: string
    title: string
    description: string
    author: string
  }>()
</script>
