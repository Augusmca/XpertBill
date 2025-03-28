
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
    'index.csr.html': {size: 523, hash: 'bfd13834d8ffd42de6463a7fcf8172b494e023eebfc06be394b0a82fb302710a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '189e3b6e87feda3facfa673798a3f5c4f3532ccbd629e47bb8925eed95484c28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20867, hash: '11a8c5cb2cf9259d78aaa7aff53af9039065a62601448f1bd2f8a42e26e10f35', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
