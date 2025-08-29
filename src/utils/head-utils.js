/**
 * Inyecta un <link> (favicon, apple-touch-icon, etc.)
 */
export function injectLink({ rel, href, sizes, type }) {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (sizes) link.sizes = sizes;
    if (type) link.type = type;
    document.head.appendChild(link);
    return link;
}

/**
 * Inyecta un <meta>
 */
export function injectMeta({ name, property, content }) {
    const meta = document.createElement('meta');
    if (name) meta.setAttribute('name', name);
    if (property) meta.setAttribute('property', property);
    meta.content = content;
    document.head.appendChild(meta);
    return meta;
}

