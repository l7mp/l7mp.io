var navHeight = $(".navbar").height() + 48;
$("body").css('padding-top', navHeight);
// $("section").css('margin-top', navHeight);
// $("#accordion").css('margin-top', navHeight);

var footerHeight = $("#footer.row").height() + 16;
$("#footer").css('margin-top', footerHeight);

$("table").each(function() {
    $(this).addClass("table table-striped");
});
