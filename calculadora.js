const botonnum = document.getElementsByName('data-number');
const botonopera = document.getElementsByName('data-opera');
const botonigual = document.getElementsByName('data-igual')[0];
const botoneliminar = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeactual = '';
var opeanterior = '';
var operacion = undefined;



botonnum.forEach(function(boton)
{
    boton.addEventListener('click', function(){
        agregarnum(boton.innerText);
    })
});

botonopera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectoperacion(boton.innerText);
    })
});

botonigual.addEventListener('click', function(){
    calcular();
    actualizardisplay();
});

botoneliminar.addEventListener('click', function(){
    clear();
    actualizardisplay();
});


function selectoperacion(op){
    if(opeactual === '') return;
    if(opeanterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opeanterior = opeactual;
    opeactual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeanterior);
    const actual = parseFloat(opeactual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '×':
            calculo = anterior * actual;
            break;
        case '÷':
            calculo = anterior / actual;
            break;  
    }
    opeactual = calculo;
    operacion = undefined;
    opeanterior = '';
}

function agregarnum(num){
    opeactual = opeactual.toString() + num.toString();
    actualizardisplay();
}


function clear(){
    opeactual = '';
    opeanterior = '';
    operacion = undefined;
}

function actualizardisplay(){
    result.value = opeactual;
}

clear();
