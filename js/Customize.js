// Aside 
let Toggler =document.querySelector(".toggle");
let aside =document.querySelector(".aside nav");
let close =document.querySelector(".close");
// Add Class Open 
Toggler.onclick = function () {
    aside.classList.add("open");
};
// Remove Class Open 
close.onclick = function () {
    this.parentElement.classList.remove("open");
};
document.onkeyup = function (k) {
    if(k.key === "Escape") {
        aside.classList.remove("open");
    }
};
// End Aside 
let switcherlist = document.querySelectorAll(".switcher li");
switcherlist.forEach((li) => {
    li.addEventListener("click", removeActive);
});
function removeActive() {
    switcherlist.forEach((li) => {
        li.classList.remove("active");
        this.classList.add ("active");
});
}
// manage imges
(function (){
    let buttons = document.querySelectorAll('.btn')
    let storeImages = document.querySelectorAll('.card')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            let product = e.target.dataset.product
            storeImages.forEach((item) => {
                if (product === 'All'){
                    item.style.display ='block';
                } else{
                if (item.classList.contains(product)) {
                    item.style.display ='block';
                } else {
                    item.style .display ='none';
                }
                }
        })
    })
})
})();