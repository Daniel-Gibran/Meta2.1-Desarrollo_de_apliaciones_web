<template>
	<v-card height="100%">
		<v-img :src="imageUrl" :alt="title" height="220" cover />
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
