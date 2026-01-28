import type { App } from 'vue'
import './assets/index.css'
import * as components from './components'

export * from './components';

export default {
    install(app: App) {
        for (const [name, component] of Object.entries(components)) {
            app.component(name, component);
        }
    }
};