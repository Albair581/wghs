$(document).ready(function () {
    function loadPage(pageName, link) {
        const filePath = `pages/${pageName}.html`;

        $.get(filePath, function (data) {
            const $content = $(data);

            const pageTitle = $content.data("title");
            const pageSubtitle = $content.data("subtitle");

            if (pageTitle) $("#hero-title").text(pageTitle);
            if (pageSubtitle) $("#hero-subtitle").text(pageSubtitle);

            $("#main-content").html($content.html());

            $(".nav-link").removeClass("lks");
            $(this).addClass("lks");
        }).fail(function () {
            $("#main-content").html("<p>Error loading page content.</p>");
        });
    }

    $(".nav-link").on("click", function (e) {
        e.preventDefault();
        
        const page = $(this).data("page"); 
        if (page) {
            loadPage(page, this);
        }
    });

    loadPage("self-intro");
});