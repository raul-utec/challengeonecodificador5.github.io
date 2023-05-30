const textArea=document.querySelector(".textarea")
const mensaje=document.querySelector(".mensaje")

function encriptar(stringEncriptada){
    let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()
    for(let i=0;i<matrizcodigo.length;i++){
        if (stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])    
        }
    }
    return stringEncriptada
}


function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value)
    mensaje.value=textoEncriptado;
    textArea.value="";
}

function desencriptar(stringDesencriptada){
    let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase()
    for(let i=0;i<matrizcodigo.length;i++){
        if (stringDesencriptada.includes(matrizcodigo[i][0])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])    
        }
    }
    return stringDesencriptada
}
function btnDesencriptar(){
    const textoDesencriptado=desencriptar(textArea.value)
    mensaje.value=textoDesencriptado;
    textArea.value="";
}