function assignSlideEffects(effectsArray) {
    const appearElements = document.querySelectorAll('.sec_appear');
    appearElements.forEach((element, index) => {
        // 根据数组循环应用滑入效果
        const effect = effectsArray[index % effectsArray.length];
        if (effect === 'left') {
            element.classList.add('sec_appear-slide-left');
        } else if (effect === 'right') {
            element.classList.add('sec_appear-slide-right');
        } else if (effect === 'up') {
            element.classList.add('sec_appear-slide-up');
        } else {
            console.error('Invalid effect');
        }
    });

    // 滚动到元素时触发动画
    const appearElementsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // 只触发一次
            }
        });
    }, {
        threshold: 0 // 0-1, 0: 全部露出时触发, 1: 完全露出时触发
    });

    appearElements.forEach(element => {
        appearElementsObserver.observe(element);
    });
}

export {assignSlideEffects}