import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.traction.one", "pokeapi.co", "raw.githubusercontent.com"],
  },
};

export default nextConfig;