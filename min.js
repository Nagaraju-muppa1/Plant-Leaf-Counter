let profilepic=document.getElementById("profile");
let inputfile=document.getElementById("inputimg");

inputfile.onchange=function (){
    profilepic.src=URL.createObjectURL(inputfile.files[0]);
}
