
let btnOpciones = document.getElementsByTagName("button");



for (let i = 0; i < btnOpciones.length; i++) {

    btnOpciones[i].onclick() = function(){
     
      
       if(i == 0){
        btnOpciones[0].style.border="2px solid green";

            if( i > 0){
                btnOpciones[i].style.border="none";
            }
       }
    }
        
    
}
    





