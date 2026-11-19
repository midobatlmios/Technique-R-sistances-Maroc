/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Images are resized and converted (AVIF/WebP) per device. Stock photos come from Unsplash
    // until the client's own workshop photos replace them.
    formats: ['image/avif', 'image/webp'],
    qualities: [75],
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' }],
  },
}

export default nextConfig
