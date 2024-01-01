function check(){
    var name="hello";//functional scope........
    let a=3;
    if(a==2){
        let b=5;//block scope
        console.log(name);
        console.log(b);
    }
    else{
        let c=5;
        
        console.log(name);
        console.log(c);
        // console.log(b);
    }
    console.log(c);
}
check();