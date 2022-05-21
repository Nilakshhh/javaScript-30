const Panel = document.querySelectorAll(".panel");

function toggleOpen(){
    console.log("hello");
    this.classList.toggle('open');
}
function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

Panel.forEach(Panel => Panel.addEventListener('click', toggleOpen));
Panel.forEach(Panel => Panel.addEventListener('transitionend', toggleActive));