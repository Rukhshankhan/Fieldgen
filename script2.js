const wrapper=document.querySelector('.wrapper');
const loginlink = document.querySelector('.Login-link');
const registerlink = document.querySelector('.register-link');
const loginbtn = document.querySelector('.btn');
const innercross = document.querySelector('.icon-close')

document.getElementById("ruk-fb").addEventListener("click",function (){
        window.location.href = "https://www.facebook.com/rukhshankhanzada123?mibextid=ZbWKwL";
});
document.getElementById("ruk-ins").addEventListener("click",function (){
    window.location.href = "https://www.instagram.com/rukhshan.khan?igsh=M2V6d2piZHdnemJj";
});

document.getElementById("ruk-lin").addEventListener("click",function (){
    window.location.href = "https://www.linkedin.com/in/rukhshan-khan-9351b6243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
});

// document.getElementById("ali-git").addEventListener("click",function (){
//     window.location.href = github link ;
// });


registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

loginbtn.addEventListener('click', ()=> {
    wrapper.classList.toggle('active-pop');
});
innercross.addEventListener('click', ()=>{
    wrapper.classList.remove('active-pop');
});
