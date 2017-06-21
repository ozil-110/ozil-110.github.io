//搜索功能
function select(value) {
    if (value==""||value.length<2) {
        confirm("请输入关键字不少于两个");
    } else {
        var nodes = document.querySelectorAll("li a");
        var len = nodes.length;
        for (var i=0;i<len;i++) {
            var text = nodes[i].innerText;
            var cats = [];
            value.split("").forEach(function(cat) {
                if (text.indexOf(cat) > -1) {
                    cats.push(cat);
                }
            })
            if (cats.length < 2) {
                nodes[i].parentNode.style.display = "none";
            }

        }
    }
}
setTimeout(function() {
    document.getElementById("select").addEventListener("click",function() {
        var value = document.querySelector("input").value;
        select(value);
    },false)
},10)
