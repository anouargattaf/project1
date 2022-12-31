let texte = document.getElementById('texte');
let result = document.getElementById('result');
let btndelete = document.getElementById('btndelete');
let btnedite = document.getElementById('btnedite');
let arabic = document.getElementById('arabic');
let english = document.getElementById('english');
onload = () =>{
    texte.value = localStorage.setItem("anouar");
    result.innerHTML = texte.value;
}
btnedite.addEventListener("click",function(){
    result.innerHTML = texte.value;
    localStorage.setItem("anouar",texte.value)
})
btndelete.addEventListener("click",function(){
    result.innerHTML = "";
    texte.value = '';
})