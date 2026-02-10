import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    // IMPORTANT: Replace 'YOUR-REPO-NAME' with your actual GitHub repository name
    // Example: if your repo is 'my-portfolio', then base: '/my-portfolio/'
    base: '/YOUR-REPO-NAME/',

    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Ensure proper asset handling
        rollupOptions: {
            output: {
                manualChunks: undefined,
            }
        }
    }
})
