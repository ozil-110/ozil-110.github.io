//回到顶部
var scrollEle = document.body,
    rate = 0.8,
    time = 20;
setTimeout(function() {
        var backImg = document.querySelector('.back');  
        backImg.onclick = function() {
            var moveInterval = setInterval(moveScroll,time);
            function moveScroll() {
                var scrollTop = scrollEle.scrollTop;
                if (scrollTop === 0) {
                    clearInterval(moveInterval);
                    return ;
                }
                scrollEle.scrollTop = scrollTop * rate;
            }
        };
      
       
        var scrollFunction = function(e) {
            e = e || window.evevt;
            var display = backImg.style.display;
            if (scrollEle.scrollTop>20) {
                if (display !== "block") {
                    backImg.style.display = "block";
                }
            } else {
                if (display !== "none") {
                    backImg.style.display = "none";
                }
            }
        }
        window.onscroll=document.onscroll = scrollFunction;  
},1000)    
     
