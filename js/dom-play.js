alert("Hi from DOM Play");

/*

    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
    
    Un-highlight (normal or otherwise) all lines from all other actors in the play
    
    Must accommodate any number of actors, and any number of additional lines
    
    We can change the HMTL as needs

*/

//document.querySelector(".hamlet").style.backgroundColor = " light pink";

function highlight (el){

    if(el.style.backgroundColor == 'white'){//pink
        el.style.backgroundColor= 'pink';
    }else{//white
        el.style.backgroundColor= 'white';
    }    
   
 }


function myAlert(){
    alert("I'm Clicked! ");
 }

function highlightActor(actor){
    //alert("Hi i am "+ actor);
    for(const mySpan of spans)

    {if(actor == mySpan.dataset.actor ){//pink
        mySpan.style.backgroundColor= 'pink';
    }else{//white
        mySpan.style.backgroundColor= 'white';
    }  }
}

 const spans = document.querySelectorAll("#play span");
 console.log(spans);


 for(const mySpan of spans){
   // mySpan.addEventListener("click",myAlert);
    mySpan.addEventListener("click",function(ev){
        highlightActor(mySpan.dataset.actor);
    });
    //alert(mySpan.dataset.actor);
 }