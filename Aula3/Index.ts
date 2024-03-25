namespace samu 
{
    let aux: number = 10;
    while (aux != 0){
        console.log(`hello world ${aux}`);
        aux -= 1;
    }

    let vida : number = 100
    while (vida != 0){
        console.log("Zezinho perdeu 1 vida")
        vida -=1;
    }
    console.log("game over!");

    do {
        console.log("Entrou no WHILE")
    } while (aux = 0)

    for (let i:number = 0; i < 10; i++){
        console.log(i);
    }
}
