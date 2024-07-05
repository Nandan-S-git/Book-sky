var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")
var plus= document.querySelector(".plus")
plus.addEventListener("click", function() {
   overlay.style.display = "block"
    popup.style.display = "block"
})
var cancel=document.querySelector('.cancel-button')
cancel.addEventListener('click',()=>{
 overlay.style.display = "none"
    popup.style.display = "none"
})

var container=document.querySelector('.container')
var add=document.querySelector('.add-button')
var input1=document.querySelector('.input1')
var input2=document.querySelector('.input2')
var input3=document.querySelector('.input3')

add.addEventListener('click',()=>{
    overlay.style.display = "none"
    popup.style.display = "none"
    var div=document.createElement('div')
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${input1.value}</h1>
        <h5>${input2.value}</h5>
        <p>${input3.value}</p>
        <button onclick="deletefun(event)" class="delete-button">Delete</button>`
    container.append(div)
})
 function deletefun(event){
    event.target.parentElement.remove()
 }