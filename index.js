let color=["#74b9ff","#55efc4","#81ecec","#a29bfe","#dfe6e9","#ffeaa7","#fab1a0"]
let i = 0;
document.querySelector('button').addEventListener("click",function(){
    i=i <color.length? ++i : 0;
    document.querySelector('body').style.background = color[i]
})