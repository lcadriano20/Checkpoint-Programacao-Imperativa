function microondas(opcao,tempo) {

    if (opcao=='Pipoca'&& tempo==10) {
        return 'Pipoca pronta'
    }

    else if (opcao=='Pipoca' && tempo<10) {

        return 'Tempo insuficiente, pipoca crua.'

    } else if (opcao=='Pipoca' && tempo>=20 && tempo<30) {

        return 'Pipoca queimou'

    } else if (opcao=='Pipoca' && tempo>=30) {
        return 'Kabuum'
    }
   //-----------------------------------------------//
    else if (opcao=='Macarrão' && tempo==8) {
        return 'Macarrão Pronto'
    }

    else if (opcao=='Macarrão' && tempo<8) {

        return 'Tempo insuficiente, macarrão cru.'

    } else if (opcao=='Macarrão' && tempo>=16 && tempo<24) {

        return 'Macarrão queimou'

    } 
    else if (opcao=='Macarrão' && tempo>=24) {
        return 'Kabuum'
    }
    //------------------------------------------------//
    else if (opcao=='Carne' && tempo==15) {
        return 'Carne pronta'
    }
    else if (opcao=='Carne' && tempo<15) {

        return 'Tempo insuficiente, carne crua.'

    } else if (opcao=='Carne' && tempo>=30 && tempo<45) {

        return 'Carne queimou'
    }  
    else if (opcao=='Carne'&& tempo>=45) {
        return 'Kabuum'
    }
    //----------------------------------------------------------//

    else if (opcao=='Feijão' && tempo==12) {
        return 'Feijão pronto'
    }

    else if (opcao=='Feijão' && tempo<12) {

    return 'Tempo insuficiente, feijão cru.'

    } else if (opcao=='Feijão' && tempo>=24 && tempo<36) {
    return 'Feijão queimou'

    } 
    else if (opcao=='Feijão' && tempo>=36) {
        return 'Kabuum'
    }
    
    //---------------------------------------------------------//
    
    else if (opcao=='Brigadeiro' && tempo==8) {
        return 'Brigadeiro pronto'
    }

    else if (opcao=='Brigadeiro' && tempo<8) {
        return 'Brigadeiro está cru'
    }
    else if (opcao=='Brigadeiro' && tempo>= 16 && tempo<24) {
        return 'Brigadeiro queimou'
    } 
    else if (opcao=='Brigadeiro' && tempo>=24) {
        return 'Kabuum'
    }

    //--------------------------------------------------------//
    
    else {
        return 'Prato inexistente'
    }

}






