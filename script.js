$(document).ready(function() {
  var searchParam;
  var startDate;
  var endDate;
  var amount;
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20000101&end_date=20200101&q=election&api-key=3CgnAPUDAUiNT7t4Wi5Cw89GImLmBsTR";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for (var i = 1; i < 5; i++) {
      console.log(response.response.docs[i].web_url.main);
      console.log(response.response.docs[i].headline);
      console.log(response.response.docs[i].pub_date);
      console.log(response.response.docs[i].document_type);
    }
  });
});

//response.docs[i].web_url
//response.docs[i].headline
//response.docs[i].pub_date
//response.docs[i].document_type
