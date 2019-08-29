export default {
    isSideOverflowing: element => {
        return element.offsetWidth < element.scrollWidth;
    },
    isVerticalOverflowing: element => {
        return element.offsetHeight < element.scrollHeight;
    }
};
