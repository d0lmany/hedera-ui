# Hedera UI

**Hedera UI** - A library of components for Vue 3 with an elegant ivy design
- Written and maintained with TypeScript & Composition API
- This is a monorepository: it contains a general idea and documentation (`vite dev`), as well as the library itself (`vite`).
- The full list of components is given in `vite dev`
- The full list of changes is given in [this file](./CHANGELOG.md)

## Installation
1. Download the repository `git clone https://github.com/d0lmany/hedera-ui`
2. In `hedera-ui` folder, enter `npm link`
3. In your project folder, enter

```bash
npm link hedera-ui
npm install link:hedera-ui
```

4. Import the module at your entry point

```ts
import { createApp } from 'vue'
import App from './App.vue'
import HederaUI from 'hedera-ui' // The library
import 'hedera-ui/index.css' // CSS classes

createApp(App)
  .use(HederaUI)
  .mount('#app')
```

5. Copy the fonts from `node_modules/hedera-ui/dist/fonts` to `public/fonts`
6. Use in your project!

## License
This project is licensed under the MIT License v3.0 - see the [LICENSE](./LICENSE) file for more information.