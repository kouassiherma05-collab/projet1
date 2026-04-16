var nbractuel = "";//variable pour stocker le nombre actuel 
var nbrprecedent = "";//variable pour stocker le nombre précédent
var operateur = "";//variable pour stocker l'opérateur

function afficher(nombre)
{
 document.getElementById("ecran").textContent = nombre;
}

function appuyerchiffres(chiffre){
    nbractuel += chiffre;
    afficher(nbractuel);    

}

function appuyeroperateur(op){
    nbrprecedent = nbractuel;
    nbractuel = "";
    operateur = op;
    afficher("0");
}
function calculer(){
    
    var num1 = parseFloat(nbrprecedent);
    var num2 = parseFloat(nbractuel);
    var resultat = 0;



    if (operateur === "+"){
        resultat = num1 + num2;
    }
    else if (operateur === "-"){
        resultat = num1 - num2;
    }
    else if (operateur === "*"){
        resultat = num1 * num2;
    }
    else if (operateur === "/"){
        resultat = num1 / num2;
    }
    afficher(resultat);
    nbractuel = resultat.toString();
    nbrprecedent = "";
    operateur = "";
}


function effacerone(){
    nbractuel = nbractuel.slice(0, -1);
    afficher(nbractuel);
}


function effacertout(){
    nbractuel = "";
    nbrprecedent = "";
    operateur = "";
    afficher("0");
}