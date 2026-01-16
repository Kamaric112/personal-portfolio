import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    // Enable minification optimizations
    minify: "esbuild",
    cssMinify: "lightningcss",
    // Target modern browsers for smaller bundle
    target: "es2022",
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Core React vendor chunk - changes rarely
          if (id.includes("node_modules/react-dom")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/react/")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/react-router")) {
            return "vendor-react";
          }
          // UI library chunk - Radix primitives
          if (id.includes("@radix-ui")) {
            return "vendor-ui";
          }
          // Drag and drop - lazy loaded
          if (id.includes("@dnd-kit")) {
            return "vendor-dnd";
          }
          // Split react-icons by icon set for better tree-shaking
          if (id.includes("react-icons/fa")) {
            return "icons-fa";
          }
          if (id.includes("react-icons/si")) {
            return "icons-si";
          }
          if (id.includes("react-icons/vsc")) {
            return "icons-vsc";
          }
          // Lucide icons separate
          if (id.includes("lucide-react")) {
            return "icons-lucide";
          }
          // Email JS
          if (id.includes("@emailjs")) {
            return "vendor-emailjs";
          }
          // Embla carousel
          if (id.includes("embla-carousel")) {
            return "vendor-carousel";
          }
          // Sonner toasts
          if (id.includes("sonner")) {
            return "vendor-sonner";
          }
        },
      },
    },
  },
}));
