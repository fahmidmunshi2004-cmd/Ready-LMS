
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    function animateBars() {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if(rect.top < windowHeight && !bar.classList.contains('animated')){
                bar.classList.add('animated');

                const target = bar.dataset.percent;
                const percentText = bar.closest('.col-md-4').querySelector('.skill-percent');
                bar.style.width = target + '%';
                let count = 0;
                const interval = setInterval(() => {
                    if(count < target){
                        count++;
                        percentText.textContent = count + '%';
                    } else {
                        clearInterval(interval);
                    }
                }, 20);
            }
        });
    }
    animateBars();
    window.addEventListener('scroll', animateBars);
});