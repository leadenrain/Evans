const animatedItems = document.querySelectorAll('.animatedItem');

function offset(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop}
}

function animation(animatedItem) {
    const animatedItemOffset = animatedItem.offsetTop;
    const animationStart = 4;

    let animatedItemPoint = window.innerHeight - animatedItem.offsetHeight / animationStart;

    if (animatedItem.offsetHeight > window.innerHeight) {
        animatedItemPoint = window.innerHeight - window.innerHeight / animationStart;
    }

    if ((window.scrollY > animatedItemOffset - animatedItemPoint) && (window.scrollY < animatedItemOffset + animatedItem.offsetHeight)) {
        animatedItem.classList.add('active');
    } else {
        animatedItem.classList.remove('active');
    }
}

animatedItems.forEach(animation);

window.addEventListener('scroll', () => {
    animatedItems.forEach(animation);
});







    
