


var claculate = document.getElementById('calculate');
let input = document.getElementById("temp1");
let output = document.getElementById("temp2");
let clear = document.getElementById("clear")


function convert(){
    var conversion = ( (input.value * 9/5) + 32  )
    output.value = conversion

}


function refresh(){
    input.value = ""
    output.value = ""
}

claculate.addEventListener("click", convert)
clear.addEventListener("click", refresh)











































































// claculate.addEventListener('click', () =>{
//     function calculate(a){
//         return ()
//     }
// })



// function claculate(){
//     if( input *  )
    
    
    
//     conversion = ( (input * 9/5) + 32  )


//     console.log(conversion)
// }





clear = document.getElementById("clear")




