
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/XpertBill/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/XpertBill"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 523, hash: '63e8b13ca4d0177cad29c1c90546c8335a779812fc29fb3127e88a5753e30073', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: 'c3afef22d95df4c46eb5a10ae20206bc18da4f04f924414e146c12c0a6c6879f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20864, hash: '906429b1d91be64a11b772529ef9eaa48cd725a71b33218bb79496ae98dfb878', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
