var _paragraph = document.getElementById('paragraph');
var _btnchanger = document.getElementById('btnchanger');
_btnchanger.addEventListener('click',function()
{
    var _newNode = document.createElement('img');
    _newNode.src = "images/logo.png";
    _paragraph.appendChild(_newNode);
})