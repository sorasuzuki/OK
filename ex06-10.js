function hyoji(){
    var str="一文字ずつ表示します。";
    var cnt=document.timer.moji.value.length;
if(cnt<11){document.timer.moji.value=str.substr(0,cnt+1);}
else{document.timer.moji.value="";}}
function startfnc(){setInterval("hyoji()",1000);}

function mes1(){alert("3秒経ちました!");}

function mes2(){document.getElementById('logo2').src='./image/josai2.png';}