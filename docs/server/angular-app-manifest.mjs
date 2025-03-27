
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
    'index.csr.html': {size: 523, hash: 'cf0cb8882211305ff1c9e4e49a6d0f433222a42c9c0030afa35fb1b556601a34', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '83b23d265ecbfebb69171f434d4475a9cdf4ce65197df86dfcc9fd6f3d37d69d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20864, hash: '2b84a142e4fd8c572cc7031142b65db44b5a65d465875be525892bfd279bb489', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
