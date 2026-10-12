import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Todas as fotografias são locais (public/imagens) para garantir
    // disponibilidade, desempenho e ausência de dependência externa.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
