let i =0;
process.argv.forEach((value)=>{
    i+=1;
});

if (i==2){
    console.log("No argument");
}
else if (i>2){
    console.log(process.argv[2]);
}