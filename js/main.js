var Router=(()=>{var o={};return{addRoute:function(e,t){o[e]=t},navigate:function(e){o[e]?(console.log(o),o[e]()):(console.error("Route not found:",e),o[404]&&o[404]())}}})(),PageManager=(()=>{var o=document.getElementById("content");return{loadPage:function(e,t){o.innerHTML="<h2>"+e+"</h2><p>"+t+"</p>"}}})();window.onload=function(){Router.addRoute("home",function(){PageManager.loadPage("Home","Welcome to the homepage!")}),Router.addRoute("about",function(){PageManager.loadPage("About","This is an ES5-based website.")}),Router.addRoute("contact",function(){PageManager.loadPage("Contact","Contact us at: sobol4156@gmail.com")}),document.getElementById("menu").addEventListener("click",function(e){e.target&&"A"===e.target.nodeName&&(e.preventDefault(),e=e.target.getAttribute("href").substring(1),Router.navigate(e))}),Router.navigate("home")};