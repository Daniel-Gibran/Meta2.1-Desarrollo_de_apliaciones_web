const PICSUM_URL = 'https://picsum.photos/v2/list?page=1&limit=50'

export async function fetchRandomPhotos() {
	const response = await fetch(PICSUM_URL)

	if (!response.ok) {
		throw new Error(`Picsum respondió con el estado ${response.status}`)
	}

	const photos = await response.json()

	if (!Array.isArray(photos) || photos.length < 2) {
		throw new Error('La API no devolvió suficientes fotografías')
	}

	const firstIndex = Math.floor(Math.random() * photos.length)
	let secondIndex = Math.floor(Math.random() * photos.length)

	while (secondIndex === firstIndex) {
		secondIndex = Math.floor(Math.random() * photos.length)
	}

	return [photos[firstIndex], photos[secondIndex]].map((photo) => ({
		author: photo.author,
		imageUrl: `https://picsum.photos/id/${photo.id}/900/600`,
	}))
}
