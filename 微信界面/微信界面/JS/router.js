
$(function(){

    $("#title").load("../../微信h.html")
    $("#dynamic").load("index.html")



    //切换
    $(".").click(function() {
        $("#dynamic").load($(this).data("123"))
        $("#dynamic").load($(this).data("page"))

    })


})