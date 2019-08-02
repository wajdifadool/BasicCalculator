//delegation
const display = document.querySelector('#calc-display-val');
const parent = document.querySelector('#calc-parent');


parent.addEventListener('click', getClickedNumberValue);

//constants
const btnNum = 'calc-btn-num';
const btnOperator = 'calc-btn-operator';
const btnClear = 'calc-btn-clear';
const btnDicemal = 'calc-decimal';
const btnEquals = 'calc-btn-equals';
const btnPlusMinus = 'calc-btn-flip';
const btnPrecentege = 'calc-btn-precentege';

//lets
let addedOperator = false; // is operator is clcik
let operator = '';
let first = 0; // first number
let second = 0; // second number
let displyingSecondNumber = false; //this checks if we are typing number more than one digit Ex: 1123
let value = 0;; //the final result
let isAddingDeciaml = false;
let shouldFlip = false;

//listener
function getClickedNumberValue(e) {
  //console.log(e.target.classList);
  if (e.target.classList.contains(btnPlusMinus)) {
    console.log('flipping --- first -> ' + first + " Second" + second);

    if (first === Number(display.innerText)) {
      //flip first values
      console.log('display equals first value');
      display.innerText = (Number(display.innerText)) * (-1);
      first = Number(display.innerText)
    }

    if (second === Number(display.innerText)) {
      //flip the 2nd values
      console.log('display equals second value');
      display.innerText = (Number(display.innerText)) * (-1);
      second = Number(display.innerText)
    }
  } else if (e.target.classList.contains(btnNum)) {
    console.log(e.target.innerText);
    //display
    const displayValue = display.innerText;
    console.log(`displaying second number ${displyingSecondNumber}`);
    if (displyingSecondNumber) {

      const valuetoAdd = e.target.innerText;
      console.log('the value to add is ' + valuetoAdd);
      let valuesTogother = displayValue + "" + valuetoAdd;
      display.innerText = valuesTogother;
      second = Number(valuesTogother);

      console.log('second--->' + second);
    } else if (!addedOperator && Number(display.innerText) === value) {
      const valuetoAdd = e.target.innerText
      //let valuesTogother = displayValue + "" + valuetoAdd;
      display.innerText = valuetoAdd;
      first = Number(valuetoAdd);
      console.log('fire first value merged with the value in the Display' + first);
      second = 0;
    } else if (!addedOperator && Number(display.innerText) !== value) {
      console.log('here it is ');
      const valuetoAdd = e.target.innerText
      let valuesTogother = displayValue + "" + valuetoAdd;
      display.innerText = valuesTogother;
      first = Number(valuesTogother);


    } else if (addedOperator) {
      //new number added
      addedOperator = false;
      second = 0;
      second = Number(e.target.innerText);
      console.log("second = " + second);
      display.innerText = second;
      displyingSecondNumber = true;
    }
  } else if (e.target.classList.contains(btnOperator)) {
    this.operator = e.target.innerText;
    console.log('Adding Operator: ' + this.operator);
    console.log(`operator: ${operator} first: ${first} second: ${second} --> display: ${display.innerText}`);
    //console.log('the equasion -> ' + first + this.operator);
    if (first !== 0 && second !== 0 && Number(display.innerText) !== value) {
      displyingSecondNumber = false; 
      switch (this.operator) {
        case '+':
          value = first + second;
          break;
        case '-':
          value = first - second;
          break;
        case 'x':
          value = first * second;
          break;
        case '÷':
          value = first / second;
          break;
        default:
      }
      display.innerText = value;
      first = value;
      second = 0;
    }
    addedOperator = true;
  } else if (e.target.classList.contains(btnEquals)) {

    if (first !== 0 & second == 0) {
      display.innerText = first;
      value = first;
      operator = '';
    }

    displyingSecondNumber = false;
    addedOperator = false;
    console.log('first is ->' + first + ", Second->" + second + ', operator' + this.operator);
    //doTheCalculation();

    switch (this.operator) {
      case '+':
        value = first + second;
        break;
      case '-':
        value = first - second;
        break;
      case 'x':
        value = first * second;
        break;
      case '÷':
        value = first / second;
        break;
      default:
    }

    console.log(first + this.operator + second + "=" + value);
    display.innerText = value;
    first = value;
    operator = '';


  } else if (e.target.classList.contains(btnClear)) {
    display.innerText = 0;
    first = 0;
    second = 0;
    operator = '';
    value = 0;
    // TODO: remove head display
  }

  if (e.target.classList.contains(btnPrecentege)){
    if (first !== 0 ) {
      const  myPrecent =(Number(display.innerText))/100 ;
      const copied = first;
      const tvalue = myPrecent*copied;
      display.innerText = tvalue ;
      console.log('fired Precentge first ->' +copied  + " precent"+ myPrecent  +'vvv' + tvalue );

      //console.log(multiplied *myPrecent); // man wtf

      //display.innerText = myPrecent ;
      //console.log("first is = " + multiplied );
      //console.log('my precent ' +myPrecent);
      //  value = first * myPrecent ;
      // console.log(`value ${value}`);
      // display.innerText = value;
      // second = 0 ;
    }

    // if (first !== 0 && displyingSecondNumber ==true ) {
    //   myPrecent = Number(display.innerText) / 100 ;
    //   console.log('fired Precentge first ->' +first + " precent"+ myPrecent  );
    //    let v = first * myPrecent ;
    //   console.log(`value ${v}`);
    //   display.innerText = first * myPrecent;
    //   second = 0 ;
    // }
  }

}
//
// function doTheCalculation() {
//   console.log('first is ->' + first + ", Second->" + second + ', operator' + this.operator + "...");
//   switch (this.operator) {
//     case '+':
//       value = first + second;
//       break;
//     case '-':
//       value = first - second;
//       break;
//     case 'x':
//       value = first * second;
//       break;
//     case '÷':
//       value = first / second;
//       break;
//     default:
//   }
//   console.log('value is ' + value);
//
//   display.innerText = value;
//   first = value;
//   second = 0 ;
//   operator  = '' ;
//
// }

// if (first!==0 & !addedOperator){
//   console.log('first !==0   !addedOperator');
//   const valueToAdd = e.target.innerText;
//
// }
