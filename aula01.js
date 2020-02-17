function mudaTexto(){
    console.log ('entrei na função muda texto()');
   // alert('minha função mudaTexto()');
   //Acessar elemento html
   // classe Document tem acesso a toda estrutura da árvore do DOM do html
   var elementoP = document.getElementById('info');
   elementoP.innerHTML = 'Novo Texto JavaScript';
   
   document.getElementById('infoP').innerHTML = 'Trocado';
   console.log ('sai na função muda texto()');       
}