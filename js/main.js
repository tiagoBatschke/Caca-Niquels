var credito = 0;
var aux = 0;
var aposta = 1;
var nSort = 0;
var primeirolt1, primeirolt2, primeirolt3
var terceiroSlt1, terceiroSlt2, terceiroSlt3
var segundoSlt1, segundoSlt2, segundoSlt3

function aleatorio(inferior,superior){ 
    numPossibilidades = superior - inferior; 
    aleat = Math.random() * numPossibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}

function apostaMenos() {
    if (aposta > 1) {
        aposta--;
        document.getElementById('aposta').value = 'R$ ' + aposta;					
    }
}

function apostaMais() {
    if (aposta < 30) {
        aposta ++;
        document.getElementById('aposta').value = 'R$ ' + aposta;
    }
}

function verificaPremio() {
      //verifica se ganhou algum pr�mio
    
    //inicio dos pr�mios menores
    if (primeiroSlt1 == 1 && primeiroSlt2 == 2 && primeiroSlt3 == 3 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (primeiroSlt1 == 1 && primeiroSlt2 == 2 && primeiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 1 && primeiroSlt2 == 3 && primeiroSlt3 == 2 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 1 && primeiroSlt2 == 3 && primeiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 1 && primeiroSlt2 == 4 && primeiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 1 && primeiroSlt2 == 4 && primeiroSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 2 && primeiroSlt2 == 1 && primeiroSlt3 == 3 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (primeiroSlt1 == 2 && primeiroSlt2 == 1 && primeiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 2 && primeiroSlt2 == 3 && primeiroSlt3 == 1 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 2 && primeiroSlt2 == 3 && primeiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 2 && primeiroSlt2 == 4 && primeiroSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 2 && primeiroSlt2 == 4 && primeiroSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
        
    if (primeiroSlt1 == 3 && primeiroSlt2 == 2 && primeiroSlt3 == 1 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (primeiroSlt1 == 3 && primeiroSlt2 == 2 && primeiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 3 && primeiroSlt2 == 1 && primeiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 3 && primeiroSlt2 == 1 && primeiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 3 && primeiroSlt2 == 4 && primeiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 3 && primeiroSlt2 == 4 && primeiroSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    

    if (primeiroSlt1 == 4 && primeiroSlt2 == 2 && primeiroSlt3 == 1 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (primeiroSlt1 == 4 && primeiroSlt2 == 2 && primeiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 4 && primeiroSlt2 == 1 && primeiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 4 && primeiroSlt2 == 1 && primeiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 4 && primeiroSlt2 == 3 && primeiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (primeiroSlt1 == 4 && primeiroSlt2 == 3 && primeiroSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

 

    //fim dos pr�mios menores
    
    //inicio dos premios maiores
    if (primeiroSlt1 == 1 && primeiroSlt2 == 1 && primeiroSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 5);
        document.getElementById('credito').value = 'R$ ' + credito; 
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.5 + ".");
    }
    
    if (primeiroSlt1 == 2 && primeiroSlt2 == 2 && primeiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.5);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 2 + ".");
    }
    
    if (primeiroSlt1 == 3 && primeiroSlt2 == 3 && primeiroSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta *  2.5);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 2.5 + ".");
    }
    
    if (primeiroSlt1 == 4 && primeiroSlt2 == 4 && primeiroSlt3 == 4 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 3);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 3 + ".");
    }
    //fim dos pr�mios maiores

       //verifica se ganhou algum pr�mio
    
    //inicio dos pr�mios menores
    if (segundoSlt1 == 1 && segundoSlt2 == 2 && segundoSlt3 == 3 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (segundoSlt1 == 1 && segundoSlt2 == 2 && segundoSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 1 && segundoSlt2 == 3 && segundoSlt3 == 2 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 1 && segundoSlt2 == 3 && segundoSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 1 && segundoSlt2 == 4 && segundoSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 1 && segundoSlt2 == 4 && segundoSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 2 && segundoSlt2 == 1 && segundoSlt3 == 3 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (segundoSlt1 == 2 && segundoSlt2 == 1 && segundoSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 2 && segundoSlt2 == 3 && segundoSlt3 == 1 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 2 && segundoSlt2 == 3 && segundoSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 2 && segundoSlt2 == 4 && segundoSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 2 && segundoSlt2 == 4 && segundoSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
        
    if (segundoSlt1 == 3 && segundoSlt2 == 2 && segundoSlt3 == 1 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (segundoSlt1 == 3 && segundoSlt2 == 2 && segundoSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 3 && segundoSlt2 == 1 && segundoSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 3 && segundoSlt2 == 1 && segundoSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 3 && segundoSlt2 == 4 && segundoSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 3 && segundoSlt2 == 4 && segundoSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    

    if (segundoSlt1 == 4 && segundoSlt2 == 2 && segundoSlt3 == 1 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (segundoSlt1 == 4 && segundoSlt2 == 2 && segundoSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 4 && segundoSlt2 == 1 && segundoSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 4 && segundoSlt2 == 1 && segundoSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 4 && segundoSlt2 == 3 && segundoSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (segundoSlt1 == 4 && segundoSlt2 == 3 && segundoSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

 

    //fim dos pr�mios menores
    
    //inicio dos premios maiores
    if (segundoSlt1 == 1 && segundoSlt2 == 1 && segundoSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 5);
        document.getElementById('credito').value = 'R$ ' + credito; 
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.5 + ".");
    }
    
    if (segundoSlt1 == 2 && segundoSlt2 == 2 && segundoSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.5);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 2 + ".");
    }
    
    if (segundoSlt1 == 3 && segundoSlt2 == 3 && segundoSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta *  2.5);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 2.5 + ".");
    }
    
    if (segundoSlt1 == 4 && segundoSlt2 == 4 && segundoSlt3 == 4 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 3);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 3 + ".");
    }
    //fim dos pr�mios maiores
    //verifica se ganhou algum pr�mio
    
    //inicio dos pr�mios menores
    if (terceiroSlt1 == 1 && terceiroSlt2 == 2 && terceiroSlt3 == 3 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (terceiroSlt1 == 1 && terceiroSlt2 == 2 && terceiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 1 && terceiroSlt2 == 3 && terceiroSlt3 == 2 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 1 && terceiroSlt2 == 3 && terceiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 1 && terceiroSlt2 == 4 && terceiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 1 && terceiroSlt2 == 4 && terceiroSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 2 && terceiroSlt2 == 1 && terceiroSlt3 == 3 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (terceiroSlt1 == 2 && terceiroSlt2 == 1 && terceiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 2 && terceiroSlt2 == 3 && terceiroSlt3 == 1 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 2 && terceiroSlt2 == 3 && terceiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 2 && terceiroSlt2 == 4 && terceiroSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 2 && terceiroSlt2 == 4 && terceiroSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
        
    if (terceiroSlt1 == 3 && terceiroSlt2 == 2 && terceiroSlt3 == 1 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (terceiroSlt1 == 3 && terceiroSlt2 == 2 && terceiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 3 && terceiroSlt2 == 1 && terceiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 3 && terceiroSlt2 == 1 && terceiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 3 && terceiroSlt2 == 4 && terceiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 3 && terceiroSlt2 == 4 && terceiroSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    

    if (terceiroSlt1 == 4 && terceiroSlt2 == 2 && terceiroSlt3 == 1 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

    if (terceiroSlt1 == 4 && terceiroSlt2 == 2 && terceiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 4 && terceiroSlt2 == 1 && terceiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 4 && terceiroSlt2 == 1 && terceiroSlt3 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 4 && terceiroSlt2 == 3 && terceiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
       window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }
    
    if (terceiroSlt1 == 4 && terceiroSlt2 == 3 && terceiroSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.3);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.3  + ".");
    }

 

    //fim dos pr�mios menores
    
    //inicio dos premios maiores
    if (terceiroSlt1 == 1 && terceiroSlt2 == 1 && terceiroSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 5);
        document.getElementById('credito').value = 'R$ ' + credito; 
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.5 + ".");
    }
    
    if (terceiroSlt1 == 2 && terceiroSlt2 == 2 && terceiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.5);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 2 + ".");
    }
    
    if (terceiroSlt1 == 3 && terceiroSlt2 == 3 && terceiroSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta *  2.5);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 2.5 + ".");
    }
    
    if (terceiroSlt1 == 4 && terceiroSlt2 == 4 && terceiroSlt3 == 4 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 3);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 3 + ".");
    }
    //fim dos pr�mios maiores
    
    //inicio dos premios diagonais
    if (primeiroSlt1 == 1 && segundoSlt2 == 1 && terceiroSlt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.1 );
        document.getElementById('credito').value = 'R$ ' + credito; 
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.1 + ".");
    }

    if (primeiroSlt1 == 2 && segundoSlt2 == 2 && terceiroSlt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.1 );
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.1 + ".");
    }

    if (primeiroSlt1 == 3 && segundoSlt2 == 3 && terceiroSlt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.1 );
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.1 + ".");
    }

    if (primeiroSlt1 == 4 && segundoSlt2 == 4 && terceiroSlt3 == 4 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.1 );
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.1 + ".");
    }
    if (terceiroSlt1 == 1 && segundoSlt2 == 1 && primeirolt3 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.1 );
        document.getElementById('credito').value = 'R$ ' + credito; 
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.1 + ".");
    }

    if (terceiroSlt1 == 2 && segundoSlt2 == 2 && primeirolt3 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.1 );
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.1 + ".");
    }

    if (terceiroSlt1 == 3 && segundoSlt2 == 3 && primeirolt3 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.1 );
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.1 + ".");
    }

    if (terceiroSlt1 == 4 && segundoSlt2== 4 && primeirolt3 == 4 ){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 1.1 );
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parab�ns, voc� ganhou um pr�mio de R$ " + aposta * 1.1 + ".");
    }
    
}

function render1(params) {
    nSort = aleatorio(1,4);
        switch (nSort) {
            case 1:
            cont=setTimeout("document.getElementById('escud1').src = 'img/botafogo.png'", 4000);
            primeiroSlt1 = 1;
            break;
            case 2:
            cont=setTimeout("document.getElementById('escud1').src = 'img/flamengo.png'", 4000);
            primeiroSlt1 = 2;
            break;
            case 3:
            cont=setTimeout("document.getElementById('escud1').src = 'img/fluminense.png'", 4000);
            primeiroSlt1 = 3;
            break;
            case 4:
            cont=setTimeout("document.getElementById('escud1').src = 'img/vasco.png'", 4000);
            primeiroSlt1 = 4;
            break;
        }
    nSort = aleatorio(1,4);
        switch (nSort) {
            case 1:
            cont=setTimeout("document.getElementById('escud4').src = 'img/botafogo.png'", 4000);
            segundoSlt1 = 1;
            break;
            case 2:
            cont=setTimeout("document.getElementById('escud4').src = 'img/flamengo.png'", 4000);
            segundoSlt1 = 2;
            break;
            case 3:
            cont=setTimeout("document.getElementById('escud4').src = 'img/fluminense.png'", 4000);
            segundoSlt1 = 3;
            break;
            case 4:
            cont=setTimeout("document.getElementById('escud4').src = 'img/vasco.png'", 4000);
            segundoSlt1 = 4;
            break;
        }
    nSort = aleatorio(1,4);
        switch (nSort) {
            case 1:
            cont=setTimeout("document.getElementById('escud7').src = 'img/botafogo.png'", 4000);
            terceiroSlt1 = 1;
            break;
            case 2:
            cont=setTimeout("document.getElementById('escud7').src = 'img/flamengo.png'", 4000);
            terceiroSlt1 = 2;
            break;
            case 3:
            cont=setTimeout("document.getElementById('escud7').src = 'img/fluminense.png'", 4000);
            terceiroSlt1 = 3;
            break;
            case 4:
            cont=setTimeout("document.getElementById('escud7').src = 'img/vasco.png'", 4000);
            terceiroSlt1 = 4;
            break;
        }	
}

function render2(params) {
    nSort = aleatorio(1,4);
        switch (nSort) {
            case 1:
            cont=setTimeout("document.getElementById('escud2').src = 'img/botafogo.png'", 6000);
            primeiroSlt2 = 1;
            break;
            case 2:
            cont=setTimeout("document.getElementById('escud2').src = 'img/flamengo.png'", 6000);
            primeiroSlt2 = 2;
            break;
            case 3:
            cont=setTimeout("document.getElementById('escud2').src = 'img/fluminense.png'", 6000);
            primeiroSlt2 = 3;
            break;
            case 4:
            cont=setTimeout("document.getElementById('escud2').src = 'img/vasco.png'", 6000);
            primeiroSlt2 = 4;
            break;
        }
    nSort = aleatorio(1,4);
        switch (nSort) {
            case 1:
            cont=setTimeout("document.getElementById('escud5').src = 'img/botafogo.png'", 6000);
            segundoSlt2 = 1;
            break;
            case 2:
            cont=setTimeout("document.getElementById('escud5').src = 'img/flamengo.png'", 6000);
            segundoSlt2 = 2;
            break;
            case 3:
            cont=setTimeout("document.getElementById('escud5').src = 'img/fluminense.png'", 6000);
            segundoSlt2 = 3;
            break;
            case 4:
            cont=setTimeout("document.getElementById('escud5').src = 'img/vasco.png'", 6000);
            segundoSlt2 = 4;
            break;
        }
    nSort = aleatorio(1,4);
        switch (nSort) {
            case 1:
            cont=setTimeout("document.getElementById('escud8').src = 'img/botafogo.png'", 6000);
            terceiroSlt2 = 1;
            break;
            case 2:
            cont=setTimeout("document.getElementById('escud8').src = 'img/flamengo.png'", 6000);
            terceiroSlt2 = 2;
            break;
            case 3:
            cont=setTimeout("document.getElementById('escud8').src = 'img/fluminense.png'", 6000);
            terceiroSlt2 =3;
            break;
            case 4:
            cont=setTimeout("document.getElementById('escud8').src = 'img/vasco.png'", 6000);
            terceiroSlt2 = 4;
            break;
        }	
}

function render3(params) {
    nSort = aleatorio(1,4);
        switch (nSort) {
            case 1:
            cont=setTimeout("document.getElementById('escud3').src = 'img/botafogo.png'", 8000);
            primeiroSlt3 = 1;
            break;
            case 2:
            cont=setTimeout("document.getElementById('escud3').src = 'img/flamengo.png'", 8000);
            primeiroSlt3 = 2;
            break;
            case 3:
            cont=setTimeout("document.getElementById('escud3').src = 'img/fluminense.png'", 8000);
            primeiroSlt3 = 3;
            break;
            case 4:
            cont=setTimeout("document.getElementById('escud3').src = 'img/vasco.png'", 8000);
            primeiroSlt3 = 4;
            break;
        }
    nSort = aleatorio(1,4);
        switch (nSort) {
            case 1:
            cont=setTimeout("document.getElementById('escud6').src = 'img/botafogo.png'", 8000);
            segundoSlt3 = 1;
            break;
            case 2:
            cont=setTimeout("document.getElementById('escud6').src = 'img/flamengo.png'", 8000);
            segundoSlt3 = 2;
            break;
            case 3:
            cont=setTimeout("document.getElementById('escud6').src = 'img/fluminense.png'", 8000);
            segundoSlt3 = 3;
            break;
            case 4:
            cont=setTimeout("document.getElementById('escud6').src = 'img/vasco.png'", 8000);
            segundoSlt3 = 4;
            break;
        }
    nSort = aleatorio(1,4);
        switch (nSort) {
            case 1:
            cont=setTimeout("document.getElementById('escud9').src = 'img/botafogo.png'", 8000);
            terceiroSlt3 = 1;
            break;
            case 2:
            cont=setTimeout("document.getElementById('escud9').src = 'img/flamengo.png'", 8000);
            terceiroSlt3 = 2;
            break;
            case 3:
            cont=setTimeout("document.getElementById('escud9').src = 'img/fluminense.png'", 8000);
            terceiroSlt3 = 3;
            break;
            case 4:
            cont=setTimeout("document.getElementById('escud9').src = 'img/vasco.png'", 8000);
            terceiroSlt3 = 4;
            break;
        }	
}


function jogar() {
    if (credito < 1 || credito < aposta) {
        aux = window.prompt("Coloque mais creditos, digite a quantidade em R$:","1");
        aux = parseInt(aux);
        credito = parseInt(credito);
        credito = credito + aux;
        document.getElementById('credito').value = 'R$ ' + credito
    }
    else {
        if(credito > 0 && credito >= aposta){
            credito = credito - aposta;
            document.getElementById('credito').value = 'R$ ' + credito;
            document.getElementById('escud1').src = 'img/roleta.gif';
            document.getElementById('escud2').src = 'img/roleta.gif';
            document.getElementById('escud3').src = 'img/roleta.gif';
            document.getElementById('escud4').src = 'img/roleta.gif';
            document.getElementById('escud5').src = 'img/roleta.gif';
            document.getElementById('escud6').src = 'img/roleta.gif';
            document.getElementById('escud7').src = 'img/roleta.gif';
            document.getElementById('escud8').src = 'img/roleta.gif';
            document.getElementById('escud9').src = 'img/roleta.gif';

            
            //processamento do slot1
            render1()
            //processamento do slot2
            render2()
            //processamento do slot3
            render3()
            cont=setTimeout("verificaPremio()", 9000);
        }
    }
}