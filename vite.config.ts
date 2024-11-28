/*
 * @Author: DESKTOP-U5R035U\lihouqiu 945298090@qq.com
 * @Date: 2024-06-18 10:54:20
 * @LastEditors: DESKTOP-U5R035U\lihouqiu 945298090@qq.com
 * @LastEditTime: 2024-06-18 16:04:18
 * @FilePath: \monitorAdmin\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { join } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

function resolve(dir: string) {
  // @ts-ignore
  return join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("./src"),
      components: resolve("./src/components"),
      helper: resolve("./src/helper"),
      config: resolve("./src/helper/config"),
    },
  },
  plugins: [
    vue(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8087',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
});
