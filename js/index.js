var inputField = document.getElementById("input");
var logField = document.getElementById("logInformation");
var resultField = document.getElementById("resultValue");
var resetButton = document.getElementsByClassName("resetButton");
var r = 0;
var o = "";
var ans = 0;
var dat = "";

function equation(input){
  if(dat == input){
    logField.value = "Repeated operator.";
  } else{
  let  inputS = inputField.value;
  if(inputS == 'ans'){ 
    inputS = ans;
  }
  if(dat == ""){ 
    r = inputS;
    resultField.value = r;
    dat = input;
    o = o + r;
  } else{ 
    o = o + dat + inputS;
    r = eval(r + dat + inputS);
    resultField.value = r;
    dat = input;
    clearOne(false);
  }
  clearOne(false);
  }
};

function calculate(){
  if(o == "" && inputField.value == ""){
    logField.value += "\n" + 'No valid operations.';
  } else{
  o = o + dat + inputField.value;
  r = eval(o);
  resultField.value = r;
  logField.value = logField.value + "\n" + o + ' = ' + r;
  dat = "";
  ans = r; 
  clearOne(true);
  }
};

function clearOne(reset){
    inputField.value = "";
    if(reset == true){
      dat = "";
      r = "";
      o = "";
    }
};

function clearTwo(){
    ans = 0;
    resultField.value = "";
    clearOne(true);
    logField.value = "Cleared";
}