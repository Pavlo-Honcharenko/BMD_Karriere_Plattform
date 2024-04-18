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
        if (event.target.classList.contains("title-text")) {
            const parentFilterTitle = event.target.closest(".filter__title");
            if (parentFilterTitle) parentFilterTitle.classList.toggle("_show");
        }
    }));
    window["FLS"] = false;
})();