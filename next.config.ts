/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.traction.one',
      },
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
      },
    ],
  },
  allowedDevOrigins: ["http://192.168.18.7:3000"], // opcional se acessando de outro device
};

export default nextConfig;
