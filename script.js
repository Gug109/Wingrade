let categoryButtons = document.querySelectorAll('.main-categories_category')
let providerButtons = document.querySelectorAll('.main-providers_provider')
let burgerBtn = document.querySelector(".main-header_opened-btn");
let burgerBlock = document.querySelector(".main-nav_burger-ul");
let closeBtn = document.querySelector(".main-nav_close-btn");
let fireImg = document.querySelector(".main-header_fire-img");
let dropdownBtn = document.querySelector(".main-header_dropdown-arrow-btn");
let languageBlock = document.querySelector(".main-header_language-block");

dropdownBtn.onclick = function() {
    dropdownBtn.classList.toggle("active");
    languageBlock.style.display = "block";
    dropdownBtn.style.transform = "rotate(180deg)";
    dropdownBtn.style.marginLeft = "6px";
}

closeBtn.addEventListener('click', () => {
    burgerBlock.style.display = "none";
    burgerBtn.style.display = "block";
    fireImg.style.display = "block";
})

burgerBtn.addEventListener('click', () => {
    burgerBlock.style.display = "block";
    burgerBtn.style.display = "none";
    burgerBlock.style.zIndex = "10003";
    fireImg.style.display = "none";

}) 


function clearCategoryButtonStyles() {
        categoryButtons.forEach(button => {
            button.style.border = 'none';
            button.style.outline = 'none';
            button.style.boxShadow = 'none';
        });
    }

categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            clearCategoryButtonStyles();
            button.style.border = '3px solid rgb(255, 107, 0)';
            button.style.outline = '1px solid rgb(255, 255, 255)';
            button.style.boxShadow = '0px 5px 40px 0px rgba(252, 248, 184, 0.42)';
        });
    });

////////////

function clearProviderButtonStyles() {
    providerButtons.forEach(button => {
        button.style.border = 'none';
        button.style.outline = 'none';
        button.style.boxShadow = 'none';
    });
}

providerButtons.forEach(button => {
    button.addEventListener('click', () => {
        clearProviderButtonStyles();
        button.style.border = '3px solid rgb(255, 107, 0)';
        button.style.outline = '1px solid rgb(255, 255, 255)';
        button.style.boxShadow = '0px 5px 40px 0px rgba(252, 248, 184, 0.42)';
    });
});




