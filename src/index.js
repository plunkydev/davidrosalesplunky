import './style.css'

// Importes “fantasma” para que Webpack EMITA los 3 assets críticos
// (el HTML los referencia con nombre fijo; aquí solo forzamos su inclusión en el build)
import './assets/icons/favicon.ico'
import './assets/apple-touch-icon.jpg'
import './assets/preview-1200x630.png'

// Si quieres seguir usando tus helpers para otras metas no críticas, puedes importarlos aquí:
// import { injectLink, injectMeta } from './utils/head-utils'
