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
      el.setAttribute("href", "mailto:" + address);
      el.textContent = address;
      el.classList.remove("todo");
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
