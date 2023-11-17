const forms = document.querySelector('.forms')
    pwShowHide = document.querySelectorAll('.eye-icon')
    links = document.querySelectorAll('.link')

pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addeEventListener('click',=>{
        let pwFields = eyeIcon.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if(password.type === 'password'){
                password.type ='text'
                eyeIcon.classList.replace('bx-gide', 'bx-show')
                return;
            }
            password.type ='text'
            eyeIcon.classList.replace('bx-show', 'bx-hide')
        })
    })
})

links.forEach(link => {
    link.addeEventListener('click', e => {
        e.preventDefault()
        forms.classList.toggle('show-signUp');
    })
})