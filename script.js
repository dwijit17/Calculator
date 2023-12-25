let btnele = document.getElementsByTagName("button");
let formele = document.getElementById("userinp")
// console.log(btnele)
// console.log(btnele.length)
let prev = ''
let key_i= 0
for(let i = 0;i<btnele.length;i++){
btnele[i].addEventListener("click",function(){
    if(i>=4 && i!=21 && i!=18){
    prev+=btnele[i].textContent;
    formele.value = prev;
    }
    else if(i==2){
        prev = ''
        formele.value = prev
    }
    else if(i==21){
        prev = String(eval(prev))
        formele.value = prev
        localStorage.setItem(key_i,prev)
        key_i+=1;
        console.log(key_i)
    }
    else if(i==1){
        prev = prev.slice(0,-1)
        formele.value = prev
    }
    else if(i==18){
        var regex = /(-?\d+)$/;
        var match = prev.match(regex);
        // console.log(match)
        if(match){
            var lastnum = match[0]
            // console.log(lastnum)
            var togglednum = lastnum.startsWith('-')?lastnum.slice(1):'-'+lastnum;

            prev = prev.replace(regex,togglednum)
            formele.value = prev;
        }
    }
    else if(i==3){
        if(!(prev.includes('('))){
            prev+='('
            formele.value = prev
        }
        else{
            prev+=')'
            formele.value = prev
        }
    }
    else if(i==0){
        prev = localStorage.getItem(key_i-2)
        console.log(prev)
        formele.value= prev
    }
})
}
window.addEventListener('beforeunload',function(){
    localStorage.clear();
})