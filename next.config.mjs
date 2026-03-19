/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build as a static site so it can be deployed to GitHub Pages.
  output: 'export',
  // GitHub Pages project site path (repo name).
  basePath: '/Portfolio-Website',
  // Helps keep asset URLs aligned with basePath during static export.
  assetPrefix: '/Portfolio-Website',
  // Avoid 404s on static file URLs for GitHub Pages.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
