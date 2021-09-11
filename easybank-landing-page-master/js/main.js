document.querySelector('.menuToggler').addEventListener('click', e=>{
    let src = e.target.attributes.src.value
    let mbNav = document.querySelector('.mobileNav')
    //Open menu and change icon
    if(src==="images/icon-hamburger.svg"){
        e.target.attributes.src.value="images/icon-close.svg"
        mbNav.style.setProperty('display', 'block')
    }
    //Close menu and change icon
    else{
        e.target.attributes.src.value="images/icon-hamburger.svg"
        mbNav.style.setProperty('display', 'none')
    }
})