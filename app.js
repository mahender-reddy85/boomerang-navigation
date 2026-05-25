document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-target]");
    const sections = document.querySelectorAll(".section");
    const transitionWrap = document.querySelector(".transition-wrap");
    const boomerang = document.querySelector(".boomerang");
    const navbar = document.querySelector(".navbar");

    let current = "home";
    let isTransitioning = false;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.target;

            if (target === current || isTransitioning) return;

            isTransitioning = true;

            transitionWrap.classList.add("active");
            boomerang.classList.add("animate");

            setTimeout(() => {
                document.body.className = "theme-" + target;

                sections.forEach(section => {
                    section.classList.remove("active");
                    section.classList.remove("ui-react");
                });

                const targetSection = document.getElementById(target);
                if (targetSection) {
                    targetSection.classList.add("active");
                    targetSection.classList.add("ui-react");
                }

                if (navbar) {
                    navbar.classList.add("navbar-react");
                }

                buttons.forEach(btn => {
                    if (btn.dataset.target === target) {
                        btn.classList.add("active");
                    } else {
                        btn.classList.remove("active");
                    }
                });

                current = target;
            }, 1200);

            setTimeout(() => {
                const targetSection = document.getElementById(target);
                if (targetSection) {
                    targetSection.classList.remove("ui-react");
                }
                if (navbar) {
                    navbar.classList.remove("navbar-react");
                }
            }, 1800);

            setTimeout(() => {
                boomerang.classList.remove("animate");
                transitionWrap.classList.remove("active");
                isTransitioning = false;
            }, 2400);
        });
    });
});
