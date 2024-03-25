namespace exercicio1 {
    //faça uma função que substitua as vogais de uma array por *

    /*function substituirVogais(palavras: string[]): string[] {
        const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

        for (let i = 0; i < palavras.length; i++) {
            palavras[i] = palavras[i].replace(/[aeiouAEIOU]/g, '*');
        }

        return palavras;
    }

    const palavras = ['banana', 'laranja', 'morango'];
    const resultado = substituirVogais(palavras);

    console.log(resultado);*/


    function trocarVogais(vetor: string[]): void {
        for (let i: number = 0; i < vetor.length; i++) {
            if (
                vetor[i] === "a" ||
                vetor[i] === "e" ||
                vetor[i] === "i" ||
                vetor[i] === "o" ||
                vetor[i] === "u" ||
                vetor[i] === "A" ||
                vetor[i] === "E" ||
                vetor[i] === "I" ||
                vetor[i] === "O" ||
                vetor[i] === "U"
            ) {
                vetor[i] = "*";
            }
        }
    }


    function trocarVogais2(vetor: string[]): string[] {
        return vetor.map((char: string) => char.replace(/[aeiouAEIOU]/gi, '*'));
    }
}