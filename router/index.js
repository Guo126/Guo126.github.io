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
        if (index !=-1) {
           
            var iframe = document.createElement('iframe');
            //var name = guo.routes[index].title;
            
            iframe.setAttribute('src',guo.routes[index].component);
            iframe.setAttribute('width','100%');
            iframe.setAttribute('height','100%');
            iframe.setAttribute('frameborder','0');
            iframe.setAttribute('scrolling','no');
            
            iframe.innerText = '您的浏览器版本过低，请升级';
            var view = document.querySelector("#router-view");
            
            var oldView = view.children[0];
            if( view.children[0] !=undefined || view.children[0]!=null){              
                view.removeChild(oldView);
                view.appendChild(iframe);            
            }else{
                view.appendChild(iframe);
            }
        } else {
            let defaultIndex = guo.routes.findIndex((item, index) => {
                return item.path == '/';
            });
            if (defaultIndex !=-1) {
                window.location.hash = guo.routes[defaultIndex].redirect;
            }
        }
    };

    guo.init();
}

function push(url) {
    
    window.location.hash = url;
}


window.Guo = Guo;


