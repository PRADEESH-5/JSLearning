function isPrime(x) {
    if(x<=1) return false;

    for(let i=2;i<=Math.sqrt(x);i++){
        if(x%i==0) return false;
    }
    return true;
}

let x=56;

for(let i=2;i<=x;i++){
    if(isPrime(i)) console.log(i);
}