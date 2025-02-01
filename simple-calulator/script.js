function calculate(operator){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let a = parseFloat(n1);
    let b = parseFloat(n2);

    let result = document.getElementById('result');

    if(isNaN(a)||isNaN(b)){
        result.textContent = "Error!"
    }
    else{
        switch(operator){
            case '+':
                result.textContent = a+b;
                break;
            case '-':
                result.textContent = a-b;
                break;
            case '*':
                result.textContent = a*b;
                break; 
            case '/':
                result.textContent = b !==0 ? (a/b).toFixed(2): "Divison Error!";
                break;                       
        }
    }

}

function clearFields(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '0';
}