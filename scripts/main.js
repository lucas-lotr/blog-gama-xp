var submitButton=document.getElementById('submit-button');
var nome=document.getElementById('input-nome');
var database=firebase.database();

function writeData(id,data){

    database.ref('meta/').set({
        qtd: id+1
    });  

     var updates = {};
     updates['leads/' + id+1] = {
         nome: data
     };
     

    return firebase.database().ref().update(updates);



}

submitButton.onclick = function(){
    console.log(nome.value);

    return firebase.database().ref('/meta/').once('value').then(function(snapshot) {
        console.log(snapshot.val().qtd);

        writeData(snapshot.val().qtd,nome.value);

      });

    
}
