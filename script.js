let inst=document.getElementById("instagram")
let fac=document.getElementById("facebook")
let link=document.getElementById("link")
let you=document.getElementById("youtube")

let a=1; 

    setInterval( ()=> {
        if(a<1500){
        a++
        inst.innerHTML=a;


        }
    },0.2)

    setInterval( ()=> {
        if(a<1500){
        a++
        fac.innerHTML=a;
        

        }
    },0.2)
    
    setInterval( ()=> {
        if(a<1500){
        a++
        link.innerHTML=a;
        }
    },0.2)
    
    setInterval( ()=> {
        if(a<1500){
        a++
        you.innerHTML=a;
        

        }
    },0.2)
    