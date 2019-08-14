$(document).ready(function () {
    const stars = 800;
    // eslint-disable-next-line no-undef
    const $stars = $(".stars");
    const r = 800;
    for (let i = 0; i < stars; i++) {

        const $star = $("<div/>").addClass("star");
        $stars.appen
        ($star);
    }
    $(".star").each(function () {

        const cur = $(this);
        const s = 0.2 + (Math.random() * 1);
        const curR = r + (Math.random() * 300);
        cur.css({
            transformOrigin: "0 0 " + curR + "px",
            transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"

        })
    })
})