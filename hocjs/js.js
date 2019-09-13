var _paragraph = document.getElementById('paragraph');
var _btnchanger = document.getElementById('btnchanger');
_btnchanger.addEventListener('click',function()
{
    _paragraph.style.color ="red";
    _paragraph.style.fontFamily = "arial";
    _paragraph.style.fontSize = "10px";  //xử lý sự kiện click chuột vào btnchanger
})