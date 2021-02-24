function CreateRectangle(){
    let n = parseInt(document.getElementById('dai').value);
    let m = parseInt(document.getElementById('rong').value);
    for(let i = 1; i <= m; i++)    {
        for(let j = 1 ; j <= n; j++){
            if(i == 1 || j == 1 || j == n || i == m){
                document.write("* ");
            } else{
                document.write("&#160;"+ "&#160; ");
            }
        }
        document.write('<br>');
    }
}

function IsoscelesTriangle(){
    let c = document.getElementById('canh').value;
    for(let i = 1; i <= c; i++) {
        for(let j = 1; j <= c; j++) {
            if(i == j || j == 1 || i == c) {
                document.write('* ');
            } else {
                document.write("&#160;"+ "&#160; ");
            }
        }
        document.write('<br>');
    }
}
