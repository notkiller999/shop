function mainSlider({
    container = '.main-slider',
    sliderInner = '.slider-inner',
    sliderItems = '.slider-item',
    sliderWrapper = '.slider-slides',
    indicators = '.slider-indicators > li',
    next,
    prev,
    dotActiveClass = 'active',
    addDots = false,
    indicate = false,
    btns = false,
    autoSlide = 0,
    stopAnimation = true
} = {}) {

    const sliderContainer = document.querySelector(container);

    if (sliderContainer) {

        // add indicators to the slider
        if (addDots) {
            const dotParent = document.createElement('ol');
            const length = sliderContainer.querySelectorAll(sliderItems).length;
            dotParent.classList.add('slider-indicators');
            for (let i = 0; i < length; i++) {
                const dot = document.createElement('li');
                dot.setAttribute('data-slide-to', i);
                dotParent.appendChild(dot);
            }
            sliderContainer.appendChild(dotParent);
        }

        // add buttons 
        if (btns) {
            const nextBtn = document.createElement('a'),
                nextImg = document.createElement('span'),
                prevBtn = document.createElement('a'),
                prevImg = document.createElement('span');

            nextBtn.classList.add('slider-next');
            nextBtn.setAttribute('href', '#');
            nextBtn.setAttribute('data-slide', 'next');
            nextImg.classList.add('slider-next-icon');
            nextImg.innerHTML = '&gt;';
            prevBtn.classList.add('slider-prev');
            prevBtn.setAttribute('href', '#');
            prevBtn.setAttribute('data-slide', 'prev');
            prevImg.classList.add('slider-prev-icon');
            prevImg.innerHTML = '&lt;';
            nextBtn.append(nextImg);
            prevBtn.append(prevImg);
            sliderContainer.appendChild(nextBtn);
            sliderContainer.appendChild(prevBtn)
            // this[i].appendChild(nextBtn);
            // this[i].appendChild(prevBtn);
        }

        // auto change slide
        if (autoSlide > 0) {
            const animation = () => {
                let timer = setInterval(nextSlide, autoSlide * 1000);
                if (stopAnimation) {
                    sliderContainer.addEventListener('mouseover', () => clearInterval(timer));
                }

            }
            animation();
            if (stopAnimation) {
                sliderContainer.addEventListener('mouseout', animation);
            }
        }

        let width;
        if (window.getComputedStyle(sliderContainer.querySelector(sliderInner)).width.indexOf('.') < 0) {
            width = +window.getComputedStyle(sliderContainer.querySelector(sliderInner)).width.replace(/\D/g, '');
        } else {
            width = +window.getComputedStyle(sliderContainer.querySelector(sliderInner)).width.split('.')[0];
        }

        const slides = sliderContainer.querySelectorAll(sliderItems);
        const slidesWrapper = sliderContainer.querySelector(sliderWrapper);


        let slideIndex = 0;

        slidesWrapper.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width + 'px';
        })

        slidesWrapper.style.transform = `translateX(${-width}px)`;
        slidesWrapper.prepend(slides[slides.length - 1]);

        if (next && prev) {
            sliderContainer.querySelector(next).addEventListener('click', (e) => {
                e.preventDefault();
                nextSlide()
            });

            sliderContainer.querySelector(prev).addEventListener('click', (e) => {
                e.preventDefault();
                prevSlide();
            });
        }


        function nextSlide() {
            slidesWrapper.style.transition = '0.4s';
            slidesWrapper.style.transform = `translateX(${-(width * 2)}px)`;
            if (slideIndex >= slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            setTimeout(() => {
                slidesWrapper.style.transition = '0s';
                slidesWrapper.append(slidesWrapper.firstElementChild);
                slidesWrapper.style.transform = `translateX(${-width}px)`;
            }, 400)
            if (indicate) {
                activeDot();
            }
        }

        function prevSlide() {
            slidesWrapper.style.transition = '0s';
            slidesWrapper.style.transform = `translateX(${-(width * 2)}px)`;
            slidesWrapper.prepend(slidesWrapper.lastElementChild);

            if (slideIndex === 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            setTimeout(() => {
                slidesWrapper.style.transition = '0.4s';
                slidesWrapper.style.transform = `translateX(${-width}px)`;
            }, 0);
            if (indicate) {
                activeDot();
            }
        }

        function activeDot() {
            const dots = sliderContainer.querySelectorAll(indicators);
            dots.forEach(dot => {
                dot.classList.remove(dotActiveClass);
            })
            dots[slideIndex].classList.add(dotActiveClass);
        }

        // show indicators
        if (indicate) {
            activeDot();

            sliderContainer.querySelector(indicators).parentNode.addEventListener('click', (e) => {
                e.preventDefault();
                const slideTo = e.target.getAttribute('data-slide-to');
                let i = slideIndex - slideTo;
                if (i > 0) {
                    slidesWrapper.style.transition = '';
                    if (i === 1) {
                        prevSlide();
                    } else {
                        slidesWrapper.style.transform = `translateX(-${(+width * i)}px)`;
                        for (let n = 1; n < i; n++) {
                            slidesWrapper.prepend(slidesWrapper.lastElementChild);
                        }
                        setTimeout(() => {
                            slidesWrapper.style.transition = '0.7s all';
                            slidesWrapper.style.transform = `translateX(-${width}px)`;
                            slidesWrapper.prepend(slidesWrapper.lastElementChild);

                        }, 0);
                    }
                }

                if (i < 0) {
                    slidesWrapper.style.transition = '';
                    i = i * (-1);
                    if (i === 1) {
                        nextSlide()
                    } else {
                        slidesWrapper.style.transition = '0.7s all';
                        slidesWrapper.style.transform = `translateX(-${(+width * i)}px)`;
                        slidesWrapper.append(slidesWrapper.firstElementChild);
                        setTimeout(() => {
                            for (let n = 1; n < i; n++) {
                                slidesWrapper.append(slidesWrapper.firstElementChild);
                                slidesWrapper.style.transition = ''
                            }
                            slidesWrapper.style.transform = `translateX(-${width}px)`;
                        }, 700);
                    }
                }
                slideIndex = slideTo;
                activeDot();
            })
        }
    }

}

export default mainSlider;

