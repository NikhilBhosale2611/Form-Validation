console.log("This is project 4");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
// console.log(phone,email,name);  

name.addEventListener('blur', () => {
    console.log("name is Blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str = name.value;
    // console.log(regex,str);
    if(regex.test(str)){
        console.log("It Matched");
        name.classList.remove('is-invalid');
    }
    else
    {
        console.log("Not Matched");
        name.classList.add('is-invalid');
    }
})

email.addEventListener('blur', () => {
    console.log("email is Blurred");
    let regex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)$/;
    let str = email.value;
    // console.log(regex,str);
    if(regex.test(str)){
        console.log("It Matched");
        email.classList.remove('is-invalid'); 
    }
    else
    {
        console.log("Not Matched");
        email.classList.add('is-invalid');
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is Blurred");
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    // console.log(regex,str);
    if(regex.test(str)){
        console.log("It Matched");
        phone.classList.remove('is-invalid');
    }
    else
    {
        console.log("Not Matched");
        phone.classList.add('is-invalid');
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("You click on submit");

    let success=document.getElementById('success');
    success.classList.add('show')
    
})