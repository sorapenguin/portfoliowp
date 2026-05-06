import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages プロジェクトサイト (username.github.io/リポジトリ名) の場合は
// base を '/リポジトリ名/' に変更する。ユーザーサイト (username.github.io) は '/' のまま。
export default defineConfig({
  plugins: [react()],
  base: '/portfoliowp/',
})
