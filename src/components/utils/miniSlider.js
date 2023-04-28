const miniSlider = ({
    sliderInner,
    sliderItems,
    sliderWrapper,
    next,
    prev,
    container,
    numberOfSlides = 3,
}) => {

    const parent = document.querySelector(container),
        slideInner = parent.querySelector(sliderInner),
        slides = parent.querySelectorAll(sliderItems),
        sliderWrapp = parent.querySelector(sliderWrapper),
        nextBtn = parent.querySelector(next),
        prevBtn = parent.querySelector(prev);
    
    let width;
    
    if (window.getComputedStyle(slideInner).width.indexOf('.') < 0) {
        width = +window.getComputedStyle(slideInner).width.replace(/\D/g, '') / numberOfSlides;
        
    } else {
        width = +window.getComputedStyle(slideInner).width.split('.')[0] / numberOfSlides;
    }

    

    let offset = 0;
    
    slides.forEach(slide => {
        slide.style.width = width + 'px';
        // slide.firstElementChild.style.cssText = `
        // width: 100%;
        // height: 100%;
        // `;
    })
    sliderWrapp.style.width = (100 * slides.length) / numberOfSlides + '%';
    
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation()
        if (offset < (slides.length - numberOfSlides) * width) {
            if (offset < (slides.length - (numberOfSlides + 1)) * width) {
                offset += width * 2;
            } else {
                offset += width;
            }
            sliderWrapp.style.transform = `translateX(-${offset}px)`;
        }
    })

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation()
        if (offset > 0) {
            if (offset >= width * 2) {
                offset -= width * 2;
            } else {
                offset -= width;
            }
            sliderWrapp.style.transform = `translateX(-${offset}px)`;
        }
    })
    
}

export default miniSlider;