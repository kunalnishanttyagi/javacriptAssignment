
// this function wil give result of operation
function calculate(operator, value1, value2) {
    
        if(typeof value1!=='number' || typeof value2!=='number') {
            console.log("Invalid input: Both value1 and value2 should be numbers.");
            return 0;
        }
        // now by switch case

        switch(operator){
            case '+':
                return value1+value2;
            case '-':
                return value1-value2;
            case '*':
                return value1*value2;
            case '/':
                if(value2==0){
                    console.log("Invalid Division by zero.");
                    return -1;
                }
                return value1/value2;
            case '^':
                return Math.pow(value1,value2);
            default:
                console.log("Invalid operator");
                return 0;
        }
    
}

function evaluateExpression(expression) {
    // make map of precedence of operators
    let precedence=new Map([
        ['+', 1],
        ['-', 1],
        ['*', 2],
        ['/', 2],
        ['^', 3]
    ])
    let values =[];
    let operators =[];


    // traverse full expression
    for (let i =0; i <expression.length;i++) {
        let char =expression[i];

        if (char ===' ' || char=='[' || char==']') continue;

        // if numebr
        if (char >='0' && char <='9') {
            let numStr = "";
            // form full numebr
            while (i<expression.length && (expression[i]>='0' && expression[i]<='9')) {
                numStr += expression[i];
                i++;
            }
            // make string numebr to int
            values.push(Number(numStr));
            i--; 
        } 
        // if opening bracket push it direct
        else if (char==='(') {
            operators.push(char);
        } 
        // if closing evaluate this bracket
        else if (char ===')') {
            while (operators.length>0 && operators[operators.length-1]!=='(') {
                let val2 =values.pop();
                let val1 =values.pop();
                let op =operators.pop();
                values.push(calculate(op,val1,val2));
            }
            // remove opening bracket
            operators.pop(); 
        } 
        else {
            // if previous opertor is big then calculate it first
            while (
                operators.length>0 && 
                precedence.get(operators[operators.length-1])>=precedence.get(char)
            ) {
                let val2 =values.pop();
                let val1 =values.pop();
                let op =operators.pop();
                values.push(calculate(op,val1,val2));
            }
            operators.push(char);
        }
    }

    // last remainging calculate all 
    while (operators.length > 0) {
        let val2 =values.pop();
        let val1 =values.pop();
        let op =operators.pop();
        values.push(calculate(op,val1,val2));
    }

    return values;
}

var expression ="[1 + (2 + 3) * 4 - 10 / 2]";
console.log(evaluateExpression(expression)); 