
function closeFunction() {
    document.getElementById("close").onclick=
        document.getElementById("disclaimer").style.display = "none";
    }


function openPage(){
    var x = document.getElementById("search").value
    alert("you are redirecting non-malicious page");
         if (x === "hashiq"){
             window.open("/error.html");
            }else{
                window.open("https://www.google.com/search?q=" + document.getElementById("search").value);
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
