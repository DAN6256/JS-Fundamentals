const args = process.argv.slice(2);
const num = parseInt(args[0]);
console.log(factorial(num));

function factorial(number){
    if (isNaN(number)){
        return 1;
    }

    if (number==0 || number==1){
        return 1;
    }
    return number * factorial(number-1);
}