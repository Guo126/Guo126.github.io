function Guo(parameters) {
    let guo = {};
    guo.routes = parameters.routes || [];
    guo.init = function() {
        document.querySelectorAll(".router").forEach((item, index) => {
            item.addEventListener("click", function(e) {
                let event = e || window.event;
                event.preventDefault();
                window.location.hash = this.getAttribute("href");
            }, false);
        });

        window.addEventListener("hashchange", () => {
            guo.routerChange();
        });

        guo.routerChange();
    };
    guo.routerChange = () => {
        let nowHash = window.location.hash;
        let index = guo.routes.findIndex((item, index) => {
            return nowHash == ('#' + item.path);
        });
        if (index >= 0) {
            document.querySelector("#router-view").innerHTML = guo.routes[index].component;
            // document.querySelector("#router-view").innerHTML = ' <object type="text/html" data="'
            // + guo.routes[index].component
            // +  'width="100%" height="100%"></object>' ;
        } else {
            let defaultIndex = guo.routes.findIndex((item, index) => {
                return item.path == '*';
            });
            if (defaultIndex >= 0) {
                window.location.hash = guo.routes[defaultIndex].redirect;
            }
        }
    };

    guo.init();
}

window.Guo = Guo;

// new guo({
//     routes: [{
//         path: '/home',
//         component: "<h1>主页</h1><a href='https://github.com/biaochenxuying'>https://github.com/biaochenxuying</a>"
//     }, {
//         path: '/news',
//         component: "<h1>新闻</h1><a href='http://biaochenxuying.cn/main.html'>http://biaochenxuying.cn/main.html</a>"
//     }, {
//         path: '/team',
//         component: '<h1>团队</h1><h4>全栈修炼</h4>'
//     }, {
//         path: '/about',
//         component: '<h1>关于</h1><h4>关注公众号：BiaoChenXuYing</h4><p>分享 WEB 全栈开发等相关的技术文章，热点资源，全栈程序员的成长之路。</p>'
//     }, {
//         path: '*',
//         redirect: '/home'
//     }]
// });

