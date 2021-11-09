// -------------- MENU MICROONDAS --------------
// Para utilizar o microondas super rápido, favor selecionar o número do prato desejado e quantos segundos deseja baseado nas opções abaixo:
// 1 - Pipoca – 10 segundos (tempo padrão)
// 2 - Macarrão – 8 segundos (tempo padrão)
// 3 - Carne – 15 segundos (tempo padrão)
// 4 - Feijão – 12 segundos (tempo padrão)
// 5 - Brigadeiro – 8 segundos (tempo padrão)


function prepararComida (prato,segundos){
    let comidaPronta = ""
    
    if (prato == 1 && segundos >= 10 && segundos <= 19){
        comidaPronta = "Pipoca pronta, bom apetite!!!"
    } else if (prato == 1 && segundos >= 20 && segundos <= 29){
        comidaPronta = "A pipoca queimou!"
    } else if (prato == 1 && segundos >= 30){
        comidaPronta = "KABUMMM!"
    } else if  (prato == 1 && segundos <= 9){
        comidaPronta = "Tempo insuficiente."
    }

    if (prato == 2 && segundos >= 8 && segundos <= 15){
        comidaPronta = "Macarrão pronto, bom apetite!!!"
    } else if (prato == 2 && segundos >= 16 && segundos <= 23){
        comidaPronta = "O macarrão queimou!"
    } else if (prato == 2 && segundos >= 24){
        comidaPronta = "KABUMMM!"
    } else if  (prato == 2 && segundos <= 7){
        comidaPronta = "Tempo insuficiente."
    }

    if (prato == 3 && segundos >= 15 && segundos <= 29){
        comidaPronta = "Carne pronta, bom apetite!!!"
    } else if (prato == 3 && segundos >= 30 && segundos <= 44){
        comidaPronta = "A carne queimou!"
    } else if (prato == 3 && segundos >= 45){
        comidaPronta = "KABUMMM!"
    } else if  (prato == 3 && segundos <= 14){
        comidaPronta = "Tempo insuficiente."
    }

    if (prato == 4 && segundos >= 12 && segundos <= 23){
        comidaPronta = "Feijão pronto, bom apetite!!!"
    } else if (prato == 4 && segundos >= 24 && segundos <= 35){
        comidaPronta = "O feijão queimou!"
    } else if (prato == 4 && segundos >= 36){
        comidaPronta = "KABUMMM!"
    } else if  (prato == 4 && segundos <= 11){
        comidaPronta = "Tempo insuficiente."
    }

    if (prato == 5 && segundos >= 8 && segundos <= 15){
        comidaPronta = "Brigadeiro pronto, bom apetite!!!"
    } else if (prato == 5 && segundos >= 16 && segundos <= 23){
        comidaPronta = "O brigadeiro queimou!"
    } else if (prato == 5 && segundos >= 24){
        comidaPronta = "KABUMMM!"
    } else if  (prato == 5 && segundos <= 7){
        comidaPronta = "Tempo insuficiente."
    }
    
    return comidaPronta
    }
    console.log(prepararComida(2,20))
    