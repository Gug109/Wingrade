const categoryButtons = document.querySelectorAll('.main-categories_category')
const providerButtons = document.querySelectorAll('.main-providers_provider')
const burgerBtn = document.querySelector(".main-header_opened-btn");
const burgerBlock = document.querySelector(".main-nav_burger-ul");
const closeBtn = document.querySelector(".main-nav_close-btn");
const fireImg = document.querySelector(".main-header_fire-img-brand-logo");
const languageBlock = document.querySelector(".main-header_language-block");
const languageBtn = document.querySelector(".main-header_language-btn");
const languageBtnImg = document.querySelector(".main-header_language-btn-img");
const inputBtn = document.querySelector(".main-header_input-btn");
const openedInput = document.querySelector(".main-header_opened-input");
const closeInputIcon = document.querySelector(".main-header_opened-input-icon");

inputBtn.addEventListener('click', () => {
    openedInput.style.display = "block";
    closeInputIcon.style.visibility = "visible";
    inputBtn.style.display = "none"; 
});

closeInputIcon.addEventListener('click', () => {
    openedInput.style.display = "none";  
    inputBtn.style.display = "block"
});

function togglePopup() {
    languageBtn.innerHTML = "";

    if (languageBlock.style.display === "none") {
        languageBlock.style.display = "block";
        languageBtn.innerHTML += `<img class="main-header_language-btn-img" src="./images/header-language.svg" alt="language">;`
    } else {
        languageBlock.style.display = "none";
        languageBtn.innerHTML += `<img class="main-header_language-btn-img" src="./images/header-language.svg" alt="language">`;
    }
};

togglePopup();

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




