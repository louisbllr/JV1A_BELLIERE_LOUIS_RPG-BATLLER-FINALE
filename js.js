maDiv = document.getElementById("maDiv");
valeurResultat = document.getElementById("valeurResultat");
afficheAction = document.getElementById("afficheAction");
Valeurhp=document.getElementById("Valeurhp");
Attaque=document.getElementById("Attaque");
function getRandomArbitrary(min, max) {         //import d'aleatoire
    return Math.random() * (3 - 0) + min;
  }
Print=document.getElementById("Print")  
                                                          //personnages
Dwain=document.getElementById("Dwain")
afficherchoix1=document.getElementById("afficherchoix1")
afficherchoix2=document.getElementById("afficherchoix2")
afficherchoix3=document.getElementById("afficherchoix3")
mana1=document.getElementById("mana1")
// afficherchoix4=document.getElementById("afficherchoix4")
Keria=document.getElementById("Keria")
afficherchoix5=document.getElementById("afficherchoix5")
afficherchoix6=document.getElementById("afficherchoix6")
afficherchoix7=document.getElementById("afficherchoix7")
mana2=document.getElementById("mana2")
// afficherchoix8=document.getElementById("afficherchoix8")
Zeus=document.getElementById("Zeus")
afficherchoix9=document.getElementById("afficherchoix9")
afficherchoix10=document.getElementById("afficherchoix10")
afficherchoix11=document.getElementById("afficherchoix11")
mana3=document.getElementById("mana3")
// afficherchoix12=document.getElementById("afficherchoix12")
Faker=document.getElementById("Faker")
afficherchoix13=document.getElementById("afficherchoix13")
afficherchoix14=document.getElementById("afficherchoix14")
afficherchoix15=document.getElementById("afficherchoix15")
mana4=document.getElementById("mana4")
// afficherchoix16=document.getElementById("afficherchoix16")
                                                                // fin personnages 
                                                                // Monstres
Monstre1=document.getElementById("Monstre1")
M1riposte=document.getElementById("riposte1")
monstre1HP=document.getElementById("monstre1HP")
Monstre2=document.getElementById("Monstre2")
M2riposte=document.getElementById("riposte2")
monstre2HP=document.getElementById("monstre2HP")
Monstre3=document.getElementById("Monstre3")
M3riposte=document.getElementById("riposte3")
monstre3HP=document.getElementById("monstre3HP")
                                                                // fin monstres
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//maDiv.onclick=function () {
    //valeurResultat.innerHTML =parseInt(valeurResultat.innerHTML)-20;
    //afficheAction.innerHTML = "J'ai enelever 10 hp !";
    //afficheAction.innerHTML ="Le monstre a inflige 10!"
    //Valeurhp.innerHTML=parseInt(Valeurhp.innerHTML)-10;
    //afficheAction.innerHTML ="Le monstre a inflige 10!"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                    // variables
// *function choixadversaire(num){
//     if (num == 1){
//         document.getElementById("afficherchoix1").innerHTML= "<input type='button' onclick='monstre1(valeurResultat.innerHTML=parseInt(valeurResultat.innerHTML)-20) ' value '20' >";
//         document.getElementById("afficherchoix2").innerHTML= "<input type='button' onclick='monstre1(valeurResultat.innerHTML=parseInt(valeurResultat.innerHTML)-20) ' value '20' >";
//         document.getElementById("afficherchoix3").innerHTML= "<input type='button' onclick='monstre1(valeurResultat.innerHTML=parseInt(valeurResultat.innerHTML)-20) ' value '20' >";
//     }
// onclick.afficherchoix.innerHTML=Monstre1;
// }

// function afficherChoix(num){
    // if (num == 0){
        //  
        // document.getElementById("afficherchoix5").innerHTML = "<input type='button' onclick='attaque1(\""+charaName+"\","+charaAttack+")' value='20'>";
        // document.getElementById("afficherchoix6").innerHTML = "<input type='button' onclick='attaque2(\""+charaName+"\","+charaAttack+")' value='20'>";
        // document.getElementById("afficherchoix7").innerHTML = "<input type='button' onclick='attaque3(\""+charaName+"\","+charaAttack+")' value='20'>";
    // }
// }

// findepartie.style.visibility='false';
// variable d'Attaque
// afficherchoix1.onclick= function(){
// Attaque.onclick=function(){
    // function targetSelect(num){
        // if (num == 0){
            // monstre1HP = monstre1HP - 25
        // }
        // else if (num == 1){
            // monstre2HP = monstre2HP - 25
        // }
        // else if (num == 2){
            // monstre3HP = monstre3HP -25
        // }
    // }
    // setTimeout(1000);//attendre 1 seconde avant la prochaine action
// };
// fin variable Attaque 





afficherchoix1.onclick= function(){
    if(parseInt(Dwain.innerHTML)>0)//verification que le heros est encore en vie 
    {//choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-25;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-25;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-25;
        }
    }
    

        else {
            Dwain.style.visibility='hidden';
            Print.innerHTML="Votre hero est mort"
        } 
        setTimeout(1000);//attendre 1 seconde avant la prochaine action
};


afficherchoix2.onclick= function(){
    if(parseInt(Dwain.innerHTML)>0)//verification que le heros est encore en vie 
    {//choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-25;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-25;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-25;
        }
    }

        else {
            Dwain.style.visibility='hidden';
            Print.innerHTML="Votre hero est mort"
        }
        setTimeout(1000);//attendre 1 seconde avant la prochaine action    
};


afficherchoix3.onclick= function(){
    if (parseInt(Dwain.innerHTML)>0)//verification que le heros est encore en vie 
    {
        mana1===100//gestion mana
        mana1.innerHTML=parseInt(mana1.innerHTML)-40;
        //choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-40;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-40;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-40;
        }
      }
        else if (mana) {
            mana1===60
            mana1.innerHTML=parseInt(mana1.innerHTML)-40;
        }
            else if (mana) {
                mana1 === 20
                mana1.innerHTML="pas assez de mana pour lancer ce sort !"
            }
            else {
                Dwain.style.visibility='hidden';
                Print.innerHTML="Votre hero est mort"
            }
            setTimeout(1000);//attendre 1 seconde avant la prochaine action
};


afficherchoix5.onclick= function(){
    if(parseInt(Keria.innerHTML)>0)//verification que le heros est encore en vie 
    {//choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-25;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-25;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-25;
        }
    }
        
    else {
            Keria.style.visibility='hidden';
            Print.innerHTML="Votre hero est mort"
        }
        setTimeout(1000);//attendre 1 seconde avant la prochaine action
    }
  

afficherchoix6.onclick= function(){
    if(parseInt(Keria.innerHTML)>0)//verification que le heros est encore en vie 
    {//choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-25;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-25;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-25;
        }
    }
            
         else {
            Keria.style.visibility='hidden';
            Print.innerHTML="Votre hero est mort"
        }
        setTimeout(1000);//attendre 1 seconde avant la prochaine action
    }
 

afficherchoix7.onclick=function(){
    if (parseInt(Keria.innerHTML)>0)//verification que le heros est encore en vie 
     {
        mana2===100//gestion mana
        mana2.innerHTML=parseInt(mana2.innerHTML)-40;
        //choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-40;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-40;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-40;
        }
      }
            else if (mana) {
              mana2===60
              mana2.innerHTML=parseInt(mana2.innerHTML)-40;
            }
                  else if (mana) {
              mana2 === 20
              print.innerHTML="pas assez de mana pour lancer ce sort !"
            }
       else {
        Keria.style.visibility='hidden';
        Print.innerHTML="Votre hero est mort"
       }
       setTimeout(1000);//attendre 1 seconde avant la prochaine action
}


afficherchoix9.onclick= function(){
    if(parseInt(Zeus.innerHTML)>0)//verification que le heros est encore en vie 
    {//choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-25;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-25;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-25;
        }
    }
            
         else {
            Zeus.style.visibility='hidden';
            Print.innerHTML="Votre hero est mort"
        }
        setTimeout(1000);//attendre 1 seconde avant la prochaine action
    }
 

afficherchoix10.onclick= function(){
    if(parseInt(Zeus.innerHTML)>0)//verification que le heros est encore en vie 
    {//choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-25;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-25;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-25;
        }
    }
            
         else {
            Zeus.style.visibility='hidden';
            Print.innerHTML="Votre hero est mort"
        }
        setTimeout(1000);//attendre 1 seconde avant la prochaine action
    }
 

afficherchoix11.onclick=function(){
    if (parseInt(Zeus.innerHTML)>0)//verification que le heros est encore en vie
     {
        mana3===100//gestion mana
        mana3.innerHTML=parseInt(mana3.innerHTML)-40;
        //choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-40;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-40;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-40;
        }
     }
            else if (mana) {
              mana3===60
              mana3.innerHTML=parseInt(mana3.innerHTML)-40;
            }
                  else if (mana) {
              mana3 === 20
              print.innerHTML="pas assez de mana pour lancer ce sort !"
      }
        else { 
            Zeus.style.visibility='hidden';
            Print.innerHTML="Votre hero est mort"
        }
        setTimeout(1000);//attendre 1 seconde avant la prochaine action
} 


afficherchoix13.onclick= function(){
    if(parseInt(Faker.innerHTML)>0)//verification que le heros est encore en vie 
    {//choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-25;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-25;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-25;
        }
    }
            
         else {
            Faker.style.visibility='hidden';
            Print.innerHTML="Votre hero est mort"
        }
        setTimeout(1000);//attendre 1 seconde avant la prochaine action
    }


afficherchoix14.onclick= function(){
    if(parseInt(Faker.innerHTML)>0)//verification que le heros est encore en vie 
    {//choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-25;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-25;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-25;
        }
    }
            
         else {
            Faker.style.visibility='hidden';
            Print.innerHTML="Votre hero est mort"
        }
        setTimeout(1000);//attendre 1 seconde avant la prochaine action
    }


afficherchoix15.onclick=function(){
    if (parseInt(Faker.innerHTML)>0)//verification que le heros est encore en vie
    {
        mana4===100//gestion mana
        mana4.innerHTML=parseInt(mana4.innerHTML)-40;
        //choix du personnage a attaque et degats en plus si attaque spe
        Monstre1.onclick=function(){
            monstre1HP.innerHTML=parseInt(monstre1HP)-40;
        }
        Monstre2.onclick=function(){
            monstre2HP.innerHTML=parseInt(monstre2HP)-40;
        }
        Monstre3.onclick=function(){
            monstre3HP.innerHTML=parseInt(monstre3HP)-40;
        }
      }
      else if (mana) {
        mana4===60
        mana4.innerHTML=parseInt(mana4.innerHTML)-40;
      }
            else if (mana) {
        mana4 === 20
        print.innerHTML="pas assez de mana pour lancer ce sort !"
      }
      else{
        Faker.style.visibility='hidden';
        Print.innerHTML="Votre hero est mort"
      }
      setTimeout(1000);//attendre 1 seconde avant la prochaine action
}


// afficher les choix d'attaques pour chaque personnage
Dwain.onmouseover= function(){
    afficherchoix1.innerHTML= "Attaque" 
    afficherchoix2.innerHTML= "Defense"
    afficherchoix3.innerHTML= "Spe(40 mana)"
    // afficherchoix4.innerHTML= "Ne rien faire"
};
Keria.onmouseover= function(){
    afficherchoix5.innerHTML="Attaque"
    afficherchoix6.innerHTML="Defense"
    afficherchoix7.innerHTML="Spe(40 mana)"
    // afficherchoix8.innerHTML="Ne rien faire"
};
Zeus.onmouseover= function(){
     console.log("test");
    afficherchoix9.innerHTML="Attaque"
    afficherchoix10.innerHTML="Defense"
    afficherchoix11.innerHTML="Spe(40 mana)"
    // afficherchoix12.innerHTML="Ne rien faire "
};
Faker.onmouseover= function(){
    afficherchoix13.innerHTML="Attaque"
    afficherchoix14.innerHTML="Defense"
    afficherchoix15.innerHTML="Spe(40 mana)"
    // afficherchoix16.innerHTML="Lancer une lance"
};
// fin afficher choix


//Perte pv et contre attaque des monstres
Monstre1.onclick= function(){
    if (parseInt(Monstre1.innerHTML)>0)//verification que le monstre est encore en vie
    {
    monstre1HP.innerHTML =parseInt(monstre1HP.innerHTML)-25;//degats prit par le monstre
    setTimeout(1000);//attente
    M1riposte=parseInt(random=Zeus,Keria,Faker,dwayn)-10;//choix aleatoire de la cible
    }
        else {
            Monstre1.style.visibility='hidden';
            Print.innerHTML="Le monstre est mort"
        }
   
}
Monstre2.onclick= function(){
    if (parseInt(Monstre2.innerHTML)>0)//verification que le monstre est encore en vie
    {
    monstre2HP.innerHTML =parseInt(monstre2HP.innerHTML)-25;//degats prit par le monstre
    setTimeout(1000);//attente
    M2riposte=parseInt(random=(Zeus,Keria,Faker,dwayn))-10;//choix aleatoire de la cible
    }
        else {
            Monstre2.style.visibility='hidden';
            Print.innerHTML="Le monstre est mort"
        }
   
    }
Monstre3.onclick= function(){
    if (parseInt(Monstre2.innerHTML)>0)//verification que le monstre est encore en vie
    {
    monstre3HP.innerHTML =parseInt(monstre3HP.innerHTML)-25;//degats prit par le monstre
    setTimeout(1000);//attente
    M3riposte=parseInt(random=(Zeus,Keria,Faker,dwayn))-10;//choix aleatoire de la cible
    }
        else {
            Monstre3.style.visibility='hidden';
            Print.innerHTML="Le monstre est mort"
        } 
}
//FIN Perte pv et contre attaque des monstres



// if (attaque) monstre1.onclick=function(){
//     M1riposte.innerHTML=parseInt(Keria.innerHTML)-10;
// }
// else
// setInterval


// montrer quand on passe la souris
function afficherHP(id){ 
    document.getElementById(id).style.visibility = 'visible';
}
//cacher quand on passe la souris
function cacherHP(id) { 
    document.getElementById(id).style.visibility='hidden';
}


if(findepartie) {
    (parseInt(Dwain.innerHTML)<0)
    (parseInt(Keria.innerHTML)<0)
    (parseInt(Zeus.innerHTML)<0)
    (parseInt(Faker.innerHTML)<0)
    (parseInt(Monstre1.innerHTML)<0)
    (parseInt(Monstre2.innerHTML)<0)
    (parseInt(Monstre3.innerHTML)<0)

findepartie=document.getElementById("findepartie")
findepartie.style.visibility='visible';
}
else{

}