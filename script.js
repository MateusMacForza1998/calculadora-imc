    /*var input = document. querySelector("#name");
        var texto = input. value;
            log(texto);*/
    //coletar elementos
    const name = document.querySelector("#nome");
    const peso = document.querySelector("#peso");
    const altura = document.querySelector("#altura");
    const resultado = document.querySelector("#resultado");

        function imc() {            
        
            const valorIMC = (peso.value / (altura.value * altura.value));
            

                if (valorIMC < 18.5) {
                var classe = 'Magreza'
                }
                    else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
                        var classe = 'Normal'
                    }
                        else if (valorIMC >= 25 && valorIMC <= 29.9) {
                            var classe = 'Sobrepeso'
                        }
                            else if (valorIMC >= 30 && valorIMC <= 34.9) {
                                var classe = 'Obesidade grau I'
                            }   
                                else if (valorIMC >= 35 && valorIMC <= 39.9) {
                                    var classe = 'Obesidade grau II'
                                }

            resultado.textContent = `${nome.value} seu IMC é ${valorIMC} e você está ${classe}`;
            //resultado.textContent = `${nome.value}`;
            //resultado.textContent = ` ${classe}`;
            //resultado.textContent = ` ${valorIMC}`;
            //resultado.textContent = `${peso.value}`;
            //resultado.textContent = `${altura.value}`;   
            
        }
        
        