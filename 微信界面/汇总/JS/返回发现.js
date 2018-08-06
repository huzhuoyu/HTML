
$(function(){

    // $("#title").load("../微信h.html")
    // $("#dynamic").load("../微信d.html")
    //切换
    $(".bottom").click(function() {
        $("#title").load($(this).data("title"))
        $("#dynamic").load($(this).data("dynamic"))
    })
})