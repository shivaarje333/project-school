let signinbtn,signinform,UserLoginPage,togglesign;
signinbtn=document.getElementById('signinbtn');
signinform=document.getElementById('signinform');
UserLoginPage=document.getElementById('UserLoginPage');
togglesign = document.querySelectorAll('.toggle-sign');

signinbtn.addEventListener('click',()=>{
     signinform.classList.toggle("d-none")
})

for(i of togglesign){
     i.addEventListener('click',()=>{
          UserLoginPage.classList.toggle("d-none")
     })
     
}
document.body.addEventListener('click', function(){
   if(UserLoginPage.style.display = "block"){
     UserLoginPage.style.display = "none"     
   }else{
     UserLoginPage.style.display = "block"
   }
   
})