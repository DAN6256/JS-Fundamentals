const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (!args[0] || isNaN(num)) {
  console.log('Missing size');
} else {
    let strForm = '';
    for (let i=0;i<num;i++){
        strForm+='x';
    }

    for (let i=0; i<num;i++){
        console.log(strForm);
    }
}