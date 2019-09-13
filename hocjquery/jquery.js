//document.getElementById('main').textContent ="Nội dung gì đó";
//$("#main").text("nội dung gì đó");dd
$(document).ready(function () {
    $(".products").each(function(){
        $(this).click(function(){
            //$('span',this).text('Fruit');
            var newRow ='<div class="productRow">';
            newRow +='<div class="ProductID">STT</div>';
            newRow +='<div class="productName">';
            newRow +=$('span',this).text();
            newRow +='</div><div class="productImages">';
            newRow +=$('span',this).text();
            newRow +=' </div></div>'
        $('.productslist').append(newRow);

        
        })
    })
});
