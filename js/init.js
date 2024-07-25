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
    return fns;
}

// Function to add tasks to the microtask queue and wait for all to complete
function addMicrotask(fns) {
    return Promise.all(fns.map(fn => fn()));
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
