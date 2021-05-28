




function calcl(){
  const dis = document.getElementById('distance').value; 
 const cons = document.getElementById('fuel-used').value;


  if (dis =='' || cons==''){
    alert("field not filled")
  }


  

      let result  = ( cons / dis ) * 100;
      const toDecimal = result.toFixed(2); 

     
     
 switch(toDecimal !=NaN) {
       case   toDecimal <= 8 :
          document.getElementById('display').innerHTML = `your car efficiency is ${toDecimal}  and  fuel efficient`
          break
      case toDecimal > 8 && toDecimal <= 12 :
          document.getElementById('display').innerHTML = `your car efficiency is ${toDecimal}  and  average`
          break
      case toDecimal >= 12 :
          document.getElementById('display').innerHTML = `your car efficiency is ${toDecimal}  and  bad in efficient `
          break
      }
      
      
      
    }



      
  

    





