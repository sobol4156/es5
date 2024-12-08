var Router = (function () {
  var routes = {};

  return {
    addRoute: function (path, handler) {
      routes[path] = handler;
    },
    navigate: function (path) {
      if (routes[path]) {
        console.log(routes)
        routes[path]();
      } else {
        console.error("Route not found:", path);
        if (routes["404"]) routes["404"]();
      }
    },
  };
})();

var PageManager = (function () {
  var contentElement = document.getElementById("content");

  return {
    loadPage: function (title, content) {
      contentElement.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
    },
  };
})();

window.onload = function () {
  Router.addRoute("home", function () {
    PageManager.loadPage("Home", "Welcome to the homepage!");
  });

  Router.addRoute("about", function () {
    PageManager.loadPage("About", "This is an ES5-based website.");
  });

  Router.addRoute("contact", function () {
    PageManager.loadPage("Contact", "Contact us at: sobol4156@gmail.com");
  });

  var menu = document.getElementById("menu");

  menu.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName === "A") {
      e.preventDefault();
      var page = e.target.getAttribute("href").substring(1);
      Router.navigate(page);
    }
  });
  Router.navigate("home");
};
