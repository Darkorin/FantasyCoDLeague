$(document).ready(() => {
  const getUserId = () => {
    let url = window.location.href;
    url = url.split('/');
    return url[url.length - 1];
  }

  const userId = getUserId();

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $(".draftBtn").click(function () {
    let playerName = $(this).attr("id");
    let currentTurn = $("#currentTurn").text();
    $.post("/api/draft", { userId: userId, playerName: playerName, currentTurn: currentTurn }).then(() => {
      location.reload();
    }).catch(err => {
      console.log(err);
    });
  });
  setTimeout(function() {
    if ($("#currentTurn").text() != "1 (YOU)") {
      // Click a random draft button
      const btnList = $(".draftBtn");
      const randNum = Math.floor(Math.random() * btnList.length);
      btnList[randNum].click();
    }
  }, 3000);
});
