function fizzBuzz(n){
    // makes sure input is valid
    if(!Number.isInteger(n) || n < 1 || n >= 100) {
        // log error message for in invalid input
        console.log('Error');
        // exit funtion
        return;
    }

    // looping through each number up to n 
    for(let i = 1; i <= n; i++){
        // empty variable for result 
        let res = '';
        // appends fizz if divisible by 3 
        if(i % 3 === 0) res += 'Fizz';
        //appends buzz if divisible by 5
        if(i % 5 === 0) res += 'Buzz';
        // if result is empty stringm set it to the current number
        if(res === '') res += i;

        // print result
        console.log(res);
    }
}