// Launch Pad Unlimited — shared script.
// Two jobs only: assemble the contact address at runtime so it is not
// sitting in the HTML for scrapers, and keep the footer year current.

(function () {
  // Leave `user` empty and the pages keep their visible TODO placeholder.
  var user = "info";
  var domain = "launchpadunlimited.org";

  if (user) {
    var address = user + "@" + domain;
    document.querySelectorAll("[data-email]").forEach(function (el) {
      var link = document.createElement("a");
      link.setAttribute("href", "mailto:" + address);
      link.textContent = address;
      el.replaceWith(link);
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
