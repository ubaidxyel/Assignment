function get(){

    let name= prompt("Enter your name")
    let tm=document.getElementById("tm1").value
    let obt=document.getElementById("obt1").value
    let res=obt/tm*100
    alert(`dear ${name} you have got it ${res.toFixed(3)} %`)
    document.getElementById("aa").innerHTML=    (`dear ${name} you have got it ${res.toFixed(3)} %`)
    console.log(`dear ${name} you have got it ${res.toFixed(3)} %`)
}