




function calcl(){

const dis = document.getElementById('distance').value; 
const cons = document.getElementById('fuel-used').value;
var show = document.getElementById('display');


// error out empty string 
      if ( dis == "" || cons == "" ){
          alert("pls enter all fields".toUpperCase())
  
      }   // error out alphabetic 
      else if ( isNaN(dis) || isNaN(cons)){
        alert(`pls enter number `.toUpperCase()); 
     }   // ensure is within regular range 
      else if (dis >= 1000 || cons >= 500){
      show.innerHTML = `the km has exceeded the maximum limits pls re-enter`
      } 
      else {     //compute result 
              let result  = ( cons / dis ) * 100;
              const toDecimal = result.toFixed(2); 
                  // display 
                switch(toDecimal !=NaN) {
                case   toDecimal <= 8 :
                    show.innerHTML = `your car efficiency is ${toDecimal}  and  fuel efficient `
                    break
                case toDecimal > 8 && toDecimal <= 12 :
                  show.innerHTML = `your car efficiency is ${toDecimal}  and  average`
                    break
                case toDecimal >= 12 :
                  show.innerHTML = `your car efficiency is ${toDecimal}  and  bad in efficient `
                    break
      }
      
      
      
    }
}


      
  

    





