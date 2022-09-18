

function closeFunction() {
    document.getElementById("close").onclick=
        document.getElementById("disclaimer").style.display = "none";
    }


function openPage(){
    var x = document.getElementById("search").value;
    
    switch(x){
        case "hashiq":
            window.open("error.html");
            break;
        
        case "youtube":
            window.open("https://youtube.com/");
            break;
        
        case "google":
            window.open("https://google.com");
            break;

        case "":
            window.open("/error.html");
            break;

        case "quora":
            window.open ("https://quora.com");
            break;

        case "shafna":
            window.open ("second.html");
            break;

        default:
            window.open("https://www.google.com/search?q=" + x );
            break;
    }
    }

 
function myFunction(){
    alert("Why are you clicked?");
}
function me(){
         alert("You are successfully loged in.");
     }




