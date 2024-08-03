function Prime(num){
    if(num < 2){
        console.log("It is not a prime number")
        return;
    }

    for(let i=2; i<num; i++){
        if(num % i === 0){
            console.log("It is not a prime number")
            return;
        }
        
    }
    console.log("It is a prime number")
}

Prime(7)
Prime(6)

// Algorithm

// step 1:Start
// step 2:Check if Number is Less Than 2:
//         If num < 2, print "It is not a prime number" and end the process.
// step 3:Loop:For each i from 2 to num - 1:
//        If num % i === 0, print "It is not a prime number" and end the process.
// step 4:If No divisors Found:
//        Print "It is a prime number"
// step 5:End