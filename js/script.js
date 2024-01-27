var containers;
function initDrawers() {
    // Получаем контейнер с контентом
    containers = document.querySelectorAll(".faq__item");
    setHeights();
    wireUpTriggers();
    window.addEventListener("resize", setHeights);
}

window.addEventListener("load", initDrawers);

function setHeights() {
    containers.forEach(container => {
        // Получаем контент
        let content = container.querySelector(".faq__content");
        content.removeAttribute("aria-hidden");
        // Высота контента, который нужно скрыть/показать
        let heightOfContent = content.getBoundingClientRect().height ;
        // Задаем пользовательские свойства CSS с высотой контента
        container.style.setProperty("--containerHeight", `${heightOfContent}px`);
        // Когда высота считана и задана
        setTimeout(e => {
            container.classList.add("height-is-set");
            content.setAttribute("aria-hidden", "true");
        }, 0);
    });
}

function wireUpTriggers() {
    containers.forEach(container => {
        // Получаем все элементы-триггеры
        let btn = container.querySelector(".faq__trigger");
        // Получаем контент
        let content = container.querySelector(".faq__content");
        btn.addEventListener("click", () => {
            btn.setAttribute("aria-expanded", btn.getAttribute("aria-expanded") === "false" ? "true" : "false");
            container.setAttribute(
                "data-drawer-showing",
                container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
            );
            content.setAttribute(
                "aria-hidden",
                content.getAttribute("aria-hidden") === "true" ? "false" : "true"
            );
        });
    });
}



$(document).ready(function (){
    $('.about__slider').slick({
        slidesToShow: 2
    });
        $('.reviews__list').slick({
            slidesToShow: 2
        });
});