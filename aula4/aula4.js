let x,y;
x = 10;
y = 10;


function soma(a,b){
    let pri = a;
    let seg = b;
    console.log(pri + seg);
}

soma(x,y);

let entUser = '';

process.stdin.on('data' , function(data){
        entUser = data.toString();
        console.log('voce digitou:', entUser);
    }
);