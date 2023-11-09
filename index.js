// let screen= document.getElementById('screen');
// buttons = document.querySelector('button');
// let screenValue = '';
// for (item of buttons){
//     item.addEventlistener('click', (e)=>{
//             buttonText = e.target.innerText;
//             console.log('Button Text is', buttonText);
//             if(buttonText='*'){
//                 buttonText = '*';
//                 screen.value = buttonText;
//             }
//             else if (buttonText =='='){
             
//             }
//     })
// }

function appendToDisplay(value) {
    document.getElementById('screen').value += value;
  }

  function clearDisplay() {
    document.getElementById('screen').value = '';
  }

  function calculateResult() {
    try {
      document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch (error) {
      document.getElementById('screen').value = 'Error';
    }
  }