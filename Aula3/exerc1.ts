namespace exercicio1 {
    //escreva um programa em typescript que imprima todos os numeros primos de 1 a 63 usando a função while.


    let num: number = 1;
    while (num < 53) {
        let eprimo: boolean = true;
        let divisor: number = 2;
        while (divisor < num) {
            if (num % divisor === 0) {
                eprimo = false;
                break;
            }
            divisor++
        }
        if (eprimo === true){
            console.log(num);
        }
        num++
    }



}