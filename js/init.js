import * as tool from './functionTools.js';
import * as appear from './appearingTools.js';

document.addEventListener('DOMContentLoaded', async function () {
    tool.initializeLoader(20, 30,20, 30);
    tool.createDropdown_section5(),
    tool.sliderHorizon_section8(),
    tool.profileCard_section9(),
    tool.questionAsking_section11(),
    tool.productCard_section12(),
    tool.locationCard_section15(),
    tool.blogHeader_section17(),
    tool.imageHorizontalSlider_section19(),
    tool.newsCard_section26(),
    tool.profileCard_section31(),
    tool.clockHistory_section32(10),
    tool.productCard_section33()
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
