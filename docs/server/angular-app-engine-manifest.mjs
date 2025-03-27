
export default {
  basePath: 'https://augusmca.github.io/XpertBill',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
