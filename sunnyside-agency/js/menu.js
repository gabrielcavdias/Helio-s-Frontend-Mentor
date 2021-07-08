document.querySelector('.hambur-btn').addEventListener('click', () =>{
    let menu = document.querySelector('.hambur-btn')
    if(!menu.classList.contains('open')){
        menu.classList.add('open')
        openOptions('open')
    }else{
        menu.classList.remove('open')
        openOptions('close')
    }

    function openOptions(open){
        if(open=='open'){
            document.querySelector('#menu__mobile').style.setProperty('display', 'flex')
        }else{
            document.querySelector('#menu__mobile').style.setProperty('display', 'none')
        }
    }
})