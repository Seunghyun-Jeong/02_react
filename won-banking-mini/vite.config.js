import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',              // 터미널에는 브라우저가 없으니 가짜 브라우저를 쓴다
    globals: true,                     // describe · it · expect 를 import 없이 사용
    setupFiles: ['./src/setupTests.js'], // 테스트 시작 전 매번 실행할 파일
  },
})
