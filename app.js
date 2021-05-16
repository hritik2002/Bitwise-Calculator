const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const result = document.querySelector('.result');
const bin = document.querySelector('.bin');
const and = document.querySelector('.and');
const or = document.querySelector('.or');
const xor = document.querySelector('.xor');

and.addEventListener('click',function(){

    if(input1.value == "" || input2.value == ""){

        alert('Please fil all the inputs');
    }
    else
    {
    console.log(Number(input1.value).toString(2) & Number(input2.value).toString(2))
    result.innerHTML = Number(input1.value) & Number(input2.value) ;
    bin.innerHTML ="( " + (Number(input1.value).toString(2) & Number(input2.value).toString(2)) + " )";

    }
})
or.addEventListener('click',function(){

    if(input1.value == "" || input2.value == ""){

        alert('Please fil all the inputs');
    }
    else
    {
    console.log(Number(input1.value).toString(2) | Number(input2.value).toString(2))
    result.innerHTML = Number(input1.value) | Number(input2.value) ;
    bin.innerHTML ="( " + (Number(input1.value).toString(2) | Number(input2.value).toString(2)) + " )";

    }
})
xor.addEventListener('click',function(){

    if(input1.value == "" || input2.value == ""){

        alert('Please fil all the inputs');
    }
    else
    {
    console.log(Number(input1.value).toString(2) ^ Number(input2.value).toString(2))
    result.innerHTML = Number(input1.value) ^ Number(input2.value) ;
    bin.innerHTML ="( " + (Number(input1.value).toString(2) ^ Number(input2.value).toString(2)) + " )";

    }
})