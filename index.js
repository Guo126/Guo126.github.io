(function () {
    const todo = {
        create: function(){
            //this.method().show();
        },
        data : {
            currentTheme: 0,
            contents:[
                {theme:'工作笔记',src:'url(./imgs/pizza.jpg)'},
                {theme:'备忘录',src:'url(./imgs/sea.jpg)'},
                {theme:'生活日记',src:'url(./imgs/fruit.jpg)'}
            ],
        },
        method : function () {
            return {
                //上一个
                pre: ()=> {
                    var index = this.data.currentTheme;
                    var maxIndex = this.data.contents.length -1;
                    if(index == 0){
                        this.data.currentTheme = maxIndex;
                    
                    }else {
                        this.data.currentTheme  = index - 1;
                    }
                    this.method().show();
                },
                //下一个
                next: ()=> {
                    var index = this.data.currentTheme;
                    var maxIndex = this.data.contents.length -1;
                     if(index == maxIndex){
                        this.data.currentTheme = 0;
                    }else {
                        this.data.currentTheme  = index + 1;
                    }
                    this.method().show();
                    
                },
                //显示主块
                show: ()=>{
                    var main = document.getElementById("most");
                    main.innerText = this.data.contents[this.data.currentTheme].theme;
                    main.style.backgroundImage =  this.data.contents[this.data.currentTheme].src;
                },

               
            }
        }
    }
    window.todo = todo;
    window.todo.create();
})();