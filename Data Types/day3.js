scope();
function scope(){
    let a=2;
    console.log(a);
    {
        let a=6;
        console.log(a);
    }
    if(a==2){
        let b=5;
        console.log(b);
        console.log(a);
    }
    else{
        let b=5;
        console.log(b);
    }
}
