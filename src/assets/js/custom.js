$(document).ready(function () {
  // HEADER & FOOTER
  /* $("#header_id").load("./header.html");
    $("#footer_id").load("./footer.html"); */

  // Header DROPDOWN
  $(".dropdown_menu_item").click(function (e) {
    $(this)
      .parent(".dropdown_menu")
      .find(".dropdown_content")
      .toggleClass("show");
    e.stopPropagation();
  });
  $(".dropdown_content").click(function (e) {
    e.stopPropagation();
  });
  $(document).click(function () {
    $(".dropdown_content").removeClass("show");
  });

  // Search DROPDOWN
  $(".search_form").click(function (eSearch) {
    $(this).find(".search_dropdown").toggleClass("show");
    eSearch.stopPropagation();
  });
  $(".search_dropdown").click(function (eSearch) {
    eSearch.stopPropagation();
  });
  $(document).click(function () {
    $(".search_dropdown").removeClass("show");
  });
});
