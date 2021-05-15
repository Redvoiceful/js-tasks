const rightarrow = document.querySelector('#right');
const leftarrow = document.querySelector('#left');
const blocks = document.querySelector('#items');
const compst = getComputedStyle(items)

rightarrow.addEventListener("click", (elem) => {
    elem.preventDefault();
    let actualRight = parseInt(compst.right)
    if (actualRight < 600){
        blocks.style.right = `${actualRight + 100}px`;
    }

});

leftarrow.addEventListener("click", (elem) => {
    elem.preventDefault();
    let actualRight = parseInt(compst.right)
    if (actualRight > 0){
        blocks.style.right = `${actualRight - 100}px`;
    }
});
