let num1 = Number (prompt ("Digite um número:"))

let operacao = prompt ("digite a operação que deseja realizar:")

let num2 = Number (prompt ("Digite outro número:"))

switch (operacao){
    case "+":
        function soma (){
            let resultado = num1 + num2;
            console.log ("Resultado:", resultado);

        };
        
        soma ();
        
        break;

        case "-":
            function subtracao (){
                let resultado = num1 - num2;
                console.log ("Resultado:", resultado);
            };
            
            subtracao ();
            
            break;

            case "/":
                function divisao (){
                    let resultado = num1 / num2;
                    console.log ("Resultado:", resultado);
                };

                divisao ();

                break;

                case "*":
                    function multiplicacao (){
                        let resultado = num1 * num2;
                        console.log ("Resultado:", resultado);
                    };

                    multiplicacao ();

                    break;
  };