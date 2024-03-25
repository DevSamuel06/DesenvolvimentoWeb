namespace condicoes {
    let num: number = 11;
    let n2: string;

    if (num > 10) {
        console.log('Este numero é maior que 10');
    }

    let teste: boolean = false;

    if (teste) {
        console.log('Isso é verdade');
    } else {
        console.log('isso é mentira');
    }

    //switch case
    let comando: string = 'ataque';

    switch (comando) {
        case "ataque": console.log('O boss vai atacar.')
            break;
        case "Defesa": console.log('O boss defende')
            break;
        case "Morrer": console.log('O boss morre')
            break;
    }

    n2 = num % 2 == 0 ? "Par" : "Impar"
}