
//set variable
var counter = 0;

//function
window.addEventListener("DOMContentLoaded",move=() =>{
  //global condition (increment j by 1)
  if (counter == 0) {
    J = 1;
    //select element
    var elem = document.querySelector(".progress-done1");
    //set prefered width for element
    var width = 50 ;
    //for width 
    var  main  = setInterval(frame,50);
     //function for width 
    function frame() {
      //our width should be :100 + "%"
      if (width >= 100) {
        //clear
        clearInterval(main);
      } else {
        //increment width
        width++;
        //assign percentages to our width as a unit
        elem.style.width = width + "%";
        // elem.innerHTML = width  + "%";
      }
    }
  }
});

//or
//   var  counter=0;
//   setInterval(()=>{
//   if (counter===100){
//   clearInterval();
//   }
//   else{
//   counter+=1;
//   document.querySelector=(".progress-done").innerHTML=counter+"%";
//     }

//   },1000)