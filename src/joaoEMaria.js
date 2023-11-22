debugger;
let joao=1;
let maria=2;

function getJoao(){
    return joao;
}

function getMaria(){
    return maria;
}

    function setMaria(novoValor){
        if (novoValor>0)
        maria=novoValor;
            else 
            maria =0;
    }

    function setJoao(novoValor){
        if (novoValor>0)
        joao=novoValor;
            else 
            joao =0;
    }

function deMariaParaJoao(){
    setJoao(maria+joao)
    setMaria(0);

}

function deJoaoParaMaria(){
    setMaria(maria+joao)
    setJoao(0);

}

export{deJoaoParaMaria,deMariaParaJoao,setJoao,setMaria,getJoao,getMaria}