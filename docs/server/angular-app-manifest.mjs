
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/xpertbill/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/xpertbill"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 523, hash: '5161cf8146d9bef54afbd49ef13c8edc52693a657e8b10b5d9785db908b17331', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '2fcd806ba1b813270063d947ba5f99bfa12595dd256af2ce3dc976ab31162208', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20887, hash: 'bc3159dbcdd74b50066926c6e27d0744be2366f80334af8cb23169eab930e680', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
