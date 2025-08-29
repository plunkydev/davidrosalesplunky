import './style.css'
import favicon from './assets/icons/favicon.ico';
import appleIcon from './assets/apple-touch-icon.jpg';
import preview from './assets/preview-1200x630.png';
import { injectLink, injectMeta } from './utils/head-utils';

// Favicons
injectLink({ rel: 'icon', href: favicon, type: 'image/x-icon' });
injectLink({ rel: 'apple-touch-icon', href: appleIcon, sizes: '180x180' });

// SEO básico
injectMeta({ name: 'description', content: 'Sitio oficial de David Rosales. Programador autodidacta y diseñador web especializado en SEO y desarrollo moderno.' });
injectMeta({ name: 'author', content: 'David Rosales' });

// Open Graph
injectMeta({ property: 'og:title', content: 'David Rosales - Página Web' });
injectMeta({ property: 'og:description', content: 'Programador autodidacta y diseñador web. Desarrollo moderno, SEO y optimización responsiva.' });
injectMeta({ property: 'og:type', content: 'website' });
injectMeta({ property: 'og:url', content: 'https://tusitio.com/' });
injectMeta({ property: 'og:image', content: preview });

// Twitter Cards
injectMeta({ name: 'twitter:card', content: 'summary_large_image' });
injectMeta({ name: 'twitter:description', content: 'Programador autodidacta y diseñador web, especializado en SEO y desarrollo moderno.' });
injectMeta({ name: 'twitter:image', content: preview });
