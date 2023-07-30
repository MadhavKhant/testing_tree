const papaDiv=document.querySelector('.papa');
const namepapa=document.querySelector('.namepapa');


papaDiv.addEventListener('mouseover', ()=>
{
    namepapa.style.opacity = '1';
});


papaDiv.addEventListener('mouseout', ()=>
{
    namepapa.style.opacity = '1';
});


//madhav and devang
function toggleDiv(divId) {
    const divs = document.querySelectorAll(`.${divId}`);
    divs.forEach((div) => {
      if (div.style.opacity === '0') {
        div.style.opacity = '1'; // Show the div
      } else {
        div.style.opacity = '0'; // Hide the div
      }
    });
  }

  //nevil
  
  
