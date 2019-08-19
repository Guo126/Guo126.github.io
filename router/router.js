new Guo({
    routes: [{
        path: '/home',
        component: '../components/index.html'
    }, {
        path: '/news',
        component: "<h1>新闻</h1><a href='http://biaochenxuying.cn/main.html'>http://biaochenxuying.cn/main.html</a>"
    }, {
        path: '/team',
        component: '<h1>团队</h1><h4>全栈修炼</h4>'
    }, {
        path: '/about',
        component: '<h1>关于</h1><h4>关注公众号：BiaoChenXuYing</h4><p>分享 WEB 全栈开发等相关的技术文章，热点资源，全栈程序员的成长之路。</p>'
    }, {
        path: '*',
        redirect: '/home'
    }]
});
