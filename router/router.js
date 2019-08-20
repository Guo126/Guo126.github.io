new Guo({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: '../components/home/home.html',
            //title: '一鲸落 万物生'
        }, {
            path: '/demo',
            component: '../components/demoPanel/index.html'

        }, {
            path: '/work',
            component: '../components/workPanel/index.html'

        }, {
            path: '/talk',
            component: '../components/talkPanel/index.html'

        },
        {
            path: '/book',
            component: '../components/bookPanel/index.html'

        },]
});
