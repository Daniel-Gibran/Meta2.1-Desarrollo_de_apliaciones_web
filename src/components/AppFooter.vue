<template>
	<v-footer color="primary" class="mt-8">
		<v-container>
			<v-row>
				<v-col cols="12" md="3">Nombre: Estudiante Vue</v-col>
				<v-col cols="12" md="3">Matrícula: 2026001</v-col>
				<v-col cols="12" md="3">Fecha: {{ date }}</v-col>
				<v-col cols="12" md="3">Contacto: estudiante@ejemplo.com</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script setup lang="ts">
const date = new Date().toLocaleDateString('es-MX')
</script>
