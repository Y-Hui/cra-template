import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import reactJsx from 'vite-react-jsx'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: `${pathResolve('src')}/`,
      },
    ],
  },
  plugins: [reactRefresh(), reactJsx(), svgr()],
})
