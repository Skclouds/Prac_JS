function outer() {
    let a=10;
    let b=20;
    console.log(c)// The C wont be accesible because of the lexical scope concept 
    function inner() {
        console.log(a)
        console.log(b)
        let c=30

    }
    inner()

}
outer()