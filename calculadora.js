/*function validar(){
    console.log('Entrei na função validar()');
    var num1 = document.getElementsByName('num1').value;
    console.log('numero1', num1);
    var num2 = document.getElementById('num2').value;
    console.log('numero2', num2);  

    var msgerro = document.getElementById('msg_erro');
    if (num1 == ''){
        msgerro.innerHTML = 'Número inválido';
        return false;
     }
     if (num2 == ''){
        msgerro.innerHTML = 'Número inválido';
        return false;
     }    
}*/

function soma(){     
   var e1 = parseInt(document.getElementById("nummero1").value);
   var e2 = parseInt(document.getElementById("nummero2").value);
   document.getElementById("resultado").value =  + (e1 + e2);
}

function soma(){     
   var e1 = parseInt(document.getElementById("nummero1").value);
   var e2 = parseInt(document.getElementById("nummero2").value);
   document.getElementById("resultado").value = + (e1 - e2);
}

function soma(){ 
   var e1 = parseInt(document.getElementById("nummero1").value);
   var e2 = parseInt(document.getElementById("nummero2").value);
   document.getElementById("resultado").value =  + (e1 * e2);
}

function div(){     
   var e1 = parseInt(document.getElementById("nummero1").value);
   var e2 = parseInt(document.getElementById("nummero2").value);
   document.getElementById("resultado").value =  + (e1 / e2);
   if (e2 == 0)
   {
      alert("erro");
   }
}