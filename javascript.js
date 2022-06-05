
//add active class in selected list item 
 let list = document.querySelectorAll('.list');
 for (let i=0; i<list.lenghth; i++){
    list[i].onclick = function(){
         let j = 0;
         while(j < list.lenghth){
             list[j++].className = 'list'; 
         }
         list[i].className = 'list active';
     }
 }
 
 function openPage(){
    var x = document.getElementById("search").value
         if (x === "shafna") {
             window.open("https://s488u.github.io/My-website/second.html");
         }
}


function myFunction(){
    alert("Why are you clicked?");
}
function me(){
         alert("You are successfully loged in.");
     }



function clickf(){
    var a = 20;
    var b = 30;
    document.write(a + b);
}
