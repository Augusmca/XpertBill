
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://augusmca.github.io/XpertBill/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/XpertBill"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 549, hash: '88b9f1fbc25a35c4e7bbfabf43822c5cb096118c86ffe73b1ca324967cef5d80', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: '81a8e0e2385dd6994615b601c2aec4ed1be3c616bd4c3d407875b81f8a6af009', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20890, hash: '366da08a4d065158d8b786871da3e4a3304d10b5dca0d12bd4a2f221063897df', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
