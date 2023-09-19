

const bars = document.querySelectorAll('.progress__bar');

function runbars() {
    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    });
}

let barsSection = document.querySelector('.skills__wrapper');
let option = {
    rootMargin: '0px 0px -300px 0px'
}

const sectionObservers = new IntersectionObserver(function (entries) {

    if (entries[0].isIntersecting) {
        runbars();
    }

}, option)

sectionObservers.observe(barsSection);

// counter

const counter = document.querySelectorAll('.counter');
console.log(counter);

function runCounter() {
    counter.forEach(counter => {
        counter.innerText = 0;

        let target = +counter.dataset.count;
        let step = target / 100;

        let countIt = function () {
            let displayedCount = +counter.innerText;
            if (displayedCount < target) {
                counter.innerText = Math.ceil(displayedCount + step);
                setTimeout(countIt, 1);
            }
            else {
                counter.innerText = target;
            }
        }
        countIt();
    })


}



let counterSection = document.querySelector('.counter__section');
let options = {
    rootMargin: '0px 0px -600px 0px'
}

const sectionObserver = new IntersectionObserver(function (entries) {

    if (entries[0].isIntersecting) {
        runCounter();
    }

}, options)

sectionObserver.observe(counterSection);

