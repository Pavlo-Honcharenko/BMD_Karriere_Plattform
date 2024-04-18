(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("click", (function(event) {
        const parentFilterTitle = event.target.closest(".filter__title");
        if (parentFilterTitle && parentFilterTitle.classList.contains("_show")) {
            const filterTitles = document.querySelectorAll(".filter__title");
            filterTitles.forEach((title => {
                title.classList.remove("_show");
            }));
        } else if (parentFilterTitle) {
            const filterTitles = document.querySelectorAll(".filter__title");
            filterTitles.forEach((title => {
                title.classList.remove("_show");
            }));
            parentFilterTitle.classList.toggle("_show");
        }
    }));
    window["FLS"] = false;
})();