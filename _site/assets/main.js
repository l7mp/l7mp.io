var navHeight = $(".navbar").height() + 48;
$("body").css('padding-top', navHeight);
// $("section").css('margin-top', navHeight);
// $("#accordion").css('margin-top', navHeight);

var footerHeight = $("#footer.row").height() + 16;
$("#footer").css('margin-top', footerHeight);

$("table").each(function() {
    $(this).addClass("table table-striped");
    let table = $(this).html()
    console.log(table);
    $(this).replaceWith('<div class="table-responsive"><table class="table table-striped">' + table + "</table></div>");
    // $(this).appendTo('<div class="table-responsive></div>');
    // var tableDiv = document.createElement("div");
    // $(tableDiv).addClass("table-responsive");
    // document.body.appendChild(tableDiv);
    // tableDiv.append(JSON.stringify($(this)));
    // tableDiv.appendChild($(this));
});

$(document).ready(function() {
    var url = "https://api.github.com/repos/l7mp/l7mp";
    fetch(url).then(function(e) {
      return e.json()
    }).then(function(r) {
       stars = r.stargazers_count
       forks = r.forks_count
       $('#git_details').text(stars + " stars " + forks + " forks")
    });
  });


$("#search-box-head").reset()