$(".navigation-list").clone().appendTo(".mobile-menu-body");

$(".hamburger").on("click", function () {
  if (!$(".mobile-menu").hasClass("mobile-view")) {
    $(".mobile-menu").addClass("mobile-view");
  } else {
    $(".mobile-menu").removeClass("mobile-view");
  }
});

AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});
$("#menu-close").on("click", function () {
  $(".mobile-menu").removeClass("mobile-view");
  $(".dropdown-li").removeClass("open");
  $(".dropdown-li").find(">.dropdown-list").hide(200);
});

$(".mobile-menu .dropdown-li>a").append('<i class="fa fa-angle-right"></i>');

$(".mobile-menu .dropdown-li>a").click(function () {
  const parent = $(this).parent(".dropdown-li");
  if (!parent.hasClass("open")) {
    const ulParent = parent.parent();
    ulParent.find(".dropdown-li.open").find(">.dropdown-list").hide(200);
    ulParent.find(".dropdown-li.open").removeClass("open");
    parent.addClass("open");
    parent.find(">.dropdown-list").show(200);
  } else {
    parent.removeClass("open");
    parent.find(">.dropdown-list").hide(200);
  }
});

$(".animated-progress span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    4000
  );
  $(this).text($(this).attr("data-progress") + "%");
});
