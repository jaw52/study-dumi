import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'study-dumi',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: process.env.NODE_ENV === 'production' ? '/study-dumi/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/study-dumi/' : '/',
  // more config: https://d.umijs.org/config
});
