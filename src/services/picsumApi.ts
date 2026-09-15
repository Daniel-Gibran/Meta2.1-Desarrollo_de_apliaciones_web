export interface Photo {
  author: string
  imageUrl: string
}

interface PicsumPhoto {
  id: string
  author: string
}

export async function getTwoPhotos (): Promise<Photo[]> {
  const response = await fetch('https://picsum.photos/v2/list?page=1&limit=50')

  if (!response.ok) {
    throw new Error('No se pudo consultar Picsum')
  }

  const photos = (await response.json()) as PicsumPhoto[]
  const first = Math.floor(Math.random() * photos.length)
  let second = Math.floor(Math.random() * photos.length)

  while (second === first) {
    second = Math.floor(Math.random() * photos.length)
  }

  return [photos[first], photos[second]].map(photo => ({
    author: photo.author,
    imageUrl: `https://picsum.photos/id/${photo.id}/600/400`,
  }))
}
