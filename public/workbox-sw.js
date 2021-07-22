importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');

if (workbox) {
  console.log('workbox加载成功');
} else {
  console.log('workbox加载失败');
}
//设置缓存cachestorage的名称
workbox.core.setCacheNameDetails({
    prefix:'workbox',
    suffix:'v2',
    precache: 'precache-test',// 不设置的话默认值为 'precache'
    runtime: 'runtime-test' // 不设置的话默认值为 'runtime'
});
// 预缓存静态文件
workbox.precaching.precacheAndRoute([
 '/workbox',
  {
    url: './styles/workbox.css',
    revision: '0'
  },
]);

// self.addEventListener('install', ()=>{
//   console.log('onInstall called');
//   self.skipWaiting();
// });

// 通过回调函数来匹配请求路由将会让策略更加灵活
const matchFunction = ({url, event}) => {
  // 如果请求路由匹配了就返回 true，也可以返回一个参数对象以供 handler 接收处理
  return /\/imgs\/logo.jpeg/.test(url);
};

// 路由请求缓存
// 路由匹配规则
// workbox.routing.registerRoute(
  // 匹配url
  // '/imgs/logo.jpeg', // 1、相对路径字符串
  // 'http://localhost:3000/imgs/logo.jpeg', // 绝对路径字符串
  // new RegExp('.*\.logo.jpeg'), // 、2正则匹配
  // matchFunction, // 3、回调函数
  // 缓存策略即'缓存策略函数'
  // handler
  // workbox.strategies.staleWhileRevalidate()
  // workbox.strategies.cacheFirst()
// );

//路由缓存策略
// workbox.routing.registerRoute(
//   // '/imgs/logo.jpeg',
//   matchFunction,
//   // 缓存策略即'缓存策略函数'
//   // workbox.strategies.staleWhileRevalidate()
//   // workbox.strategies.networkFirst()
//   // workbox.strategies.cacheFirst()
//   // workbox.strategies.networkOnly()
//   workbox.strategies.cacheOnly()
// );
workbox.routing.registerRoute(
  matchFunction,
  ({url, event, params}) => {
      return new Response(
          `/imgs/logo1.jpeg`
      );
  }
);