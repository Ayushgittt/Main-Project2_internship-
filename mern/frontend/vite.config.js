import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,               // Allow external access (0.0.0.0)
    port: 5173,               // Optional: matches your Docker EXPOSE
    allowedHosts: 'all',      // 🔥 Allow all host headers (bypass Vite check)
    hmr: {
      clientPort: 80       // Use 443 if using HTTPS ALB, 80 for HTTP
    }
  }
})
