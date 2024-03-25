namespace vetor 
{
    let num: number[] = [2, 4, 6 , 8];
    let valor:number = num[3];
    console.log(valor);

    //mostra todos os valores
    console.log(num);
    
    for (let i: number = 0; i < num.length; i++)
    {
        console.log(num[i]);
    }

    let cores: Array<string> = ["vermelho", "verde", "azul"];
    //let cores: string[] = ["vermelho", "verde", "azul"];
    

    let quadrados: number[]
    quadrados = num.map(function (numero : number){
        return numero * numero
    })
{

    }

}