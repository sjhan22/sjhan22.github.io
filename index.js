var num1 = ""
var num2 = ""
var oper = ""
var result = ""
var equal = "="

function show_screen(value) {
    document.getElementsByClassName("calc__display")[0].innerHTML = value;
}

function allclear() {
    num1 = ""
    num2 = ""
    oper = ""
    show_screen(num1);
}

function enter_value(value) {
    if(oper == "" && result == "") {
        num1 += value;
        show_screen(num1);
    }
    else{
        num2 += value;
        show_screen(num2);
    }
}

function enter_oper(value) {
    oper = value;
    show_screen(oper);
}

function enter_equal() {
    switch(oper){
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
        case '×':
            result = Number(num1) * Number(num2);
            break;
        case '÷':
            result = Number(num1) / Number(num2);
            break;
        default:
            break;
    }
    show_screen(result);
    write_history();
    num1 = result;
    num2 = "";
    result = "";
}

function write_history() {
    document.getElementsByClassName("history__table")[0].innerHTML = num1+oper+num2+equal+result;
}





