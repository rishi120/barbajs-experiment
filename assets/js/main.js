function pagetransition() {
    var tl = gsap.timeline();
    tl.to('.overlay', { duration: .5, scaleY: 1, transformOrigin: "bottom left" });
    tl.to('.overlay', { duration: .5, scaleY: 0, transformOrigin: "bottom left", delay: .1 });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from('.left', { duration: 1.5, translateY: 50, opacity: 0 });
    tl.to('img', { clipPath: "polygon(0 0, 100% 0, 100% 100%,  0 100%)" });
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}
$(document).ready(function() {
    barba.init({
        sync: true,
        transitions: [{
            async leave(data) {
                const done = this.async();
                pagetransition();
                await delay(1500);
                done();
            },
            async enter(data) {
                contentAnimation();

            },
            async once(data) {
                contentAnimation();

            }

        }]

    });

});