import * as tool from './functionTools.js';
import * as appear from './appearingTools.js';

const fn0 = () =>tool.initializeLoader(20, 30, 20, 30);
const fn1 = () =>tool.createDropdown_section5();
const fn2 = () =>tool.sliderHorizon_section8();
const fn3 = () =>tool.profileCard_section9();
const fn4 = () =>tool.questionAsking_section11();
const fn5 = () =>tool.productCard_section12();
const fn6 = () =>tool.locationCard_section15();
const fn7 = () =>tool.blogHeader_section17();
const fn8 = () =>tool.imageHorizontalSlider_section19();
const fn9 = () =>tool.newsCard_section26();
const fn10 = () =>tool.profileCard_section31();
const fn11 = () =>tool.clockHistory_section32(10);
const fn12 = () =>tool.productCard_section33();



function wrappedFunctions(...fns) {
    fns = fns.map(fn => {
        return async () => {
            await fn();
        }
    });
    return fns;
}

// Function to add tasks to the microtask queue and wait for all to complete
function addMicrotask(fns) {
    return new Promise((resolve) => {
        fns.forEach(fn => {
            queueMicrotask(fn);
        });
        queueMicrotask(resolve);
    }); //如果你需要函数几乎同时开始并快速连续执行，且不需要处理函数返回的异步结果，使用 queueMicrotask。

    // return Promise.all(fns.map(fn => fn())); //如果你需要并行执行多个异步函数，并处理它们的完成或失败状态，使用 Promise.all。
    // return fns.reduce((promise, fn) => promise.then(() => fn()), Promise.resolve());//如果函数执行有严格的顺序要求，需要前一个完成后才能开始下一个，使用 Promise 链方法。
}


document.addEventListener('DOMContentLoaded', async function () {

    const tasks = wrappedFunctions(fn0, fn1, fn2, fn3, fn4, fn5, fn6, fn7, fn8, fn9, fn10, fn11, fn12);
    await addMicrotask(tasks);



    const minLoadTime = tool.minLoadTime(1); // 5 seconds minimum load time
    const resourcesLoaded = tool.checkResourcesLoaded();
    await Promise.all([minLoadTime, resourcesLoaded]);
    tool.showContent('.loader',1);


    const scrollButton = document.querySelector('.section10_scroll-to-top');
    if (scrollButton) {
        scrollButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior of anchor tag
            tool.smoothScrollToTop_section10(800); // Adjust duration as needed
        });
    }

    const bodyElement = document.querySelector('body');
    if (bodyElement.id === 'page1') {
        appear.assignSlideEffects(['left', 'right', 'left', 'right', 'up']);
    } else if (bodyElement.id === 'page2') {
        //undefined
    } else if (bodyElement.id === 'page3') {
        appear.assignSlideEffects(['right','left', 'right', 'left', 'right', 'left', 'left', 'right']);
    } else if (bodyElement.id === 'page4') {
        appear.assignSlideEffects(['left', 'right', 'up', 'left', 'right']);
    } else if (bodyElement.id === 'page5') {
        appear.assignSlideEffects(['left', 'left', 'up', 'right', 'right', 'left', 'up', 'right', 'left']);
    } else {
        //undefined
    }


});
