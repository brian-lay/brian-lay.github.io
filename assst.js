



// step 1  
function calcl(){              
// step 2 
const dis = document.getElementById('distance').value; 
const cons = document.getElementById('fuel-used').value;
var show = document.getElementById('display');


//  step 3   error out empty string 
      if ( dis == "" || cons == "" ){
          alert("pls enter all fields".toUpperCase())
  
      }   //  step 4    error out alphabetic 
      else if ( isNaN(dis) || isNaN(cons)){
        alert(`pls enter number `.toUpperCase()); 
     }   //  step 5  ensure is within regular range 
      else if (dis >= 1000 ){show.innerHTML = `the km has exceeded the maximum limits pls re-enter`} 
      else if (cons >= 500){show.innerHTML = `the fuel consumed has reached abnormal range  pls re-enter`} 
      else {     // step 6 compute result 
              let result  = ( cons / dis ) * 100;
              const toDecimal = result.toFixed(2); 
                  //  step 7 and 8   catergorize  and display display 
                switch(toDecimal !=NaN) {
                case   toDecimal <= 8 :
                    show.innerHTML = `your car used ${toDecimal} litre  per 100km  under section of fuel efficient `
                    break
                case toDecimal > 8 && toDecimal < 12 :
                  show.innerHTML = `your car used  ${toDecimal} litre per 100km  under section of average fuel efficient  `
                    break
                case toDecimal >= 12 :
                  show.innerHTML = `your car used  ${toDecimal} litre per 100km and under section of  bad  efficient `
                    break
      }
      
      
      
    }
}

navigator.geolocation.getCurrentPosition((position) => p = position) ; 
console.log(p.coords) ; 
      
  

    





