function Swap(a, b) {
    console.log("Before swap: a =", a, "b =", b);
    a = a + b; 
    b = a - b; 
    a = a - b; 

    console.log("After swap: a =", a, "b =", b);
}

Swap(5, 10);

// Algorithm

// Step 1:Start
// Step 2:Input two numbers a and b
// Step 3:Compute the sum of a and b and assign it to a
//         a = a + b
// Step 4:Subtract the new b from the updated a to get the original value of a and assign it to b
//         b = a - b
// Step 5:Subtract the updated b from the updated a to get the original value of b and assign it to a
//         a = a - b
// Step 6:Print the swapped values of a and b
// Step 7:End