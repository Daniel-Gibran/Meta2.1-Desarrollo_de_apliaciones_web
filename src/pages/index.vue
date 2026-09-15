<template>
	<v-container class="py-8">
		<h1 class="text-h3 mb-3">Mi portafolio fotográfico</h1>
		<p class="text-body-1 mb-6">Imágenes aleatorias obtenidas desde la API de Picsum.</p>

		<v-alert v-if="error" class="mb-6" type="error" variant="tonal">
			{{ error }}
		</v-alert>

		<v-row>
			<v-col v-for="(photo, index) in photos" :key="photo.imageUrl" cols="12" md="6">
				<TarjetaConImagen
					:author="photo.author"
					:description="index === 0 ? 'Primera fotografía seleccionada.' : 'Segunda fotografía seleccionada.'"
					:image-url="photo.imageUrl"
					:title="`Fotografía ${index + 1}`"
				/>
			</v-col>
		</v-row>

		<div class="text-center my-6">
			<v-btn color="primary" :disabled="loading" :loading="loading" @click="loadPhotos">
				Actualizar imágenes
			</v-btn>
		</div>

		<v-card>
			<v-card-title>Datos del estudiante</v-card-title>
			<TablaDatos />
		</v-card>
	</v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import TablaDatos from '@/components/TablaDatos.vue'
import TarjetaConImagen from '@/components/TarjetaConImagen.vue'
import { getTwoPhotos, type Photo } from '@/services/picsumApi'

const photos = ref<Photo[]>([
	{ author: 'Cargando...', imageUrl: 'https://picsum.photos/id/10/600/400' },
	{ author: 'Cargando...', imageUrl: 'https://picsum.photos/id/20/600/400' },
])
const loading = ref(false)
const error = ref('')

async function loadPhotos() {
	loading.value = true
	error.value = ''

	try {
		photos.value = await getTwoPhotos()
	} catch {
		error.value = 'No se pudieron cargar las imágenes. Intenta nuevamente.'
	} finally {
		loading.value = false
	}
}

onMounted(loadPhotos)
</script>
