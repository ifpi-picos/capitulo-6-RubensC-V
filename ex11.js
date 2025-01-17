let aleatorio = Math.floor (Math.random () * 101)

function adivinhacao (){
    let palpite = Number (prompt ("Tente adivinhar o número:"));

    for (let tentativas = 10; tentativas > 0; tentativas --){

        if (aleatorio > palpite){
            
            console.log ("O número é maior!");

        } else if (palpite === aleatorio){

            console.log ("Parabéns, você acertou!!!")
            return;

        } else {

            console.log ("o número é menor!");

        };
        
        if (tentativas > 1){
            console.log ("Você ainda tem", tentativas - 1, "tentativas.");

            palpite = Number (prompt ("Tente outra vez:"));

        } else {
            console.log ("Suas tentivas acabaram! O número era " + aleatorio);
        }
    };

    

};

adivinhacao ();
