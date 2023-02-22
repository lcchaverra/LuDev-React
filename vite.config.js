import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite';
// import path from 'path';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, 'index.html')
//       },
//       output: {
//         dir: path.resolve(__dirname, 'dist'),
//         assetFileNames: 'assets/img/[name].[ext]'
//       }
//     }
//   },
//   assetsDir: '/src/img/'
// });
