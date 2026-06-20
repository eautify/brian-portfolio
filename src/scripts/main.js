const $ = globalThis.jQuery;

if (typeof $ !== "function") {
  throw new Error("jQuery must be loaded before src/scripts/main.js");
}

// Animate sections as they enter the viewport.
const contentWayPoint = function () {
  let i = 0;

  $(".animate-box").waypoint(
    function (direction) {
      if (direction === "down" && !$(this.element).hasClass("animated")) {
        i++;
        $(this.element).addClass("item-animate");

        setTimeout(function () {
          $("body .animate-box.item-animate").each(function (k) {
            const el = $(this);

            setTimeout(function () {
              const effect = el.data("animate-effect");
              if (effect === "fadeIn") {
                el.addClass("fadeIn animated");
              } else {
                el.addClass("fadeInUp animated");
              }
              el.removeClass("item-animate");
            }, k * 200, "easeInOutExpo");
          });
        }, 100);
      }
    },
    { offset: "85%" }
  );
};

const smoothScroll = function () {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function (event) {
      if (
        location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        let target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            "easeInOutExpo"
          );
        }
      }
    });
};

const navActive = function (section) {
  const $el = $("#page-nav > ul");
  $el.find("li").removeClass("active");
  $el.find('a[href="#' + section + '"]').closest("li").addClass("active");
};

const navigationSection = function () {
  $("#page").waypoint(
    function (direction) {
      if (direction === "down") {
        navActive("page");
      }
    },
    { offset: "-20%" }
  );

  const $section = $(
    'div[id="about"], div[id="services"], div[id="work"], div[id="experience"], div[id="education"], footer[id="footer"]'
  );

  $section.waypoint(
    function (direction) {
      if (direction === "down") {
        navActive($(this.element).attr("id"));
      }
    },
    {
      offset: "50%",
    }
  );

  $section.waypoint(
    function (direction) {
      if (direction === "up") {
        navActive($(this.element).attr("id"));
      }
    },
    {
      offset: function () {
        return -$(this.element).height() + 155;
      },
    }
  );
};

$(function () {
  contentWayPoint();
  smoothScroll();
  navigationSection();
});
