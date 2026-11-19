import Image from 'next/image'
import { photo } from '@/lib/catalogue'

// Decorative stock photo that fills its (positioned) parent. Served through next/image,
// so each device downloads a resized WebP/AVIF instead of the full-size original.
export function Photo({ id, sizes, preload = false }: { id: string; sizes: string; preload?: boolean }) {
  return <Image className="photo-fill" src={photo(id, 2400)} alt="" fill sizes={sizes} preload={preload} />
}
