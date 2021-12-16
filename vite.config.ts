import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import reactJsx from 'vite-react-jsx'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: `${pathResolve('src')}/`,
      },
    ],
  },
  plugins: [
    reactRefresh(),
    reactJsx(),
    svgr(),
    mode === 'production' && visualizer({ open: true }),
  ],
}))
