// Declare Elemnts 
const display = document.getElementById('display')
const expression =""
// Add value to Screen 
function appendValue(value){
  if(display.value =="Error"){
    display.value =""
    display.value += value
  }
  else{
    display.value += value
  }
}
// clear value button 
function clearDisplay(){
  display.value =""
}
// Delete num or operator 
function deleteLast(){
  display.value = display.value.slice(0,-1)
}
// calculate opration
function calculate(){
  try {
    const expression = display.value.replace('x','*')
    display.value = eval(expression)
  }
  catch {
    display.value ="Error"
  }
}


