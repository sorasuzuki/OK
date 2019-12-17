function hyoji(){
    var str="一文字ずつ表示します。";
var cnt=document.timer.moji.value.length;
if(cnt<11){
    document.timer.moji.value=str.substr(0,cnt+1);}
else{
    document.timer.moji.value="";}}
function startfnc(){
    setInterval("hyoji()",1000);}
function mes(){
    alert("3秒経ちました!");}
function mes(){var img="./image/josai2.png"}    
function setTimeout(){setTimeout('mes()',3000);}