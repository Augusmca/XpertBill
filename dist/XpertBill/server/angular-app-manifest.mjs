
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
    'index.csr.html': {size: 523, hash: '2f8cbeae78c4a41624d5bc262810f72f931e1372ea1d7ea5a65efba3d06bb670', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: 'dfc7d0a9e01a2059fec98cedb780d25f0563680be5c7549a4dda05c7364aca3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20868, hash: '5f56229a18f32228fc06085c9f7e4ac30e2d9b7429cd0714417bd0439ee52910', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
