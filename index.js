window.onload = function () {

    var pageManager = (function () {
        var contentElement = document.getElementById('content');

        function loadHome() {
            contentElement.innerHTML = '<h2>Home</h2><p>Welcome to the homepage!</p>';
        }

        function loadAbout() {
            contentElement.innerHTML = '<h2>About</h2><p>This is an ES5-based website.</p>';
        }

        function loadContact() {
            contentElement.innerHTML = '<h2>Contact</h2><p>Contact us at: email@example.com</p>';
        }

        return {
            loadPage: function (page) {
                if (page === 'home') {
                    loadHome()
                } else if (page === 'about') {
                    loadAbout()
                } else if (page === 'contact') {
                    loadContact()
                }
            }
        }
    })();

    var menu = document.getElementById('menu');

    menu.addEventListener('click', function(e){
        if(e.target && e.target.nodeName === 'A'){
            e.preventDefault();
            var page = e.target.getAttribute('href').substring(1);
            pageManager.loadPage(page)
        }
    })
    pageManager.loadPage('home')
}