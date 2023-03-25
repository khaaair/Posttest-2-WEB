// let nm = document.getElementById("nm").value;
// let adress = document.getElementById("adress").value;
// let email = document.getElementById("eml").value;
// let Gender = document.querySelector("#Gender").value;
// let package = document.querySelector('input[name="radio"]:checked').value;

// Fungsi simpan data pada session storage
function simpan(){
    // clearing session storage
    sessionStorage.clear()
    
    const userInputNama = document.getElementById('nm');
    const userInputExperience = document.getElementById('experiences');
    const userInputEmail = document.getElementById('eml');
    const userInputGender = document.querySelector('#Gender');
    const userInputRadio = document.querySelector('input[name="radio"]:checked');  
    const userInputCheckbox = document.getElementsByName('checkbox');
    
    
    
    let nm = sessionStorage.getItem("nm");
    let eml = sessionStorage.getItem("eml");
    let checkbox = sessionStorage.getItem("checkbox") || [];
    let experiences = sessionStorage.getItem("experiences");
    let radio = sessionStorage.getItem("radio");
    let Gender = sessionStorage.getItem('#Gender');


      // push 
      nm = userInputNama.value || nm;
      
     
      eml = userInputEmail.value || eml;
      
     
      experiences = userInputExperience.value || experiences;
      
      Gender = userInputGender.value || Gender;
    
      radio = userInputRadio.value || radio;
      
        
      for (var i=0; i<userInputCheckbox.length; i++) {
          if (userInputCheckbox[i].checked) {
              checkbox.push(userInputCheckbox[i].value);
          }
      }

      let data ={
        'nm': nm,
        'eml': eml,
        'checkbox' : checkbox,
        'experiences' : experiences,
        'radio' : radio,
        'Gender' : Gender
       }

       sessionStorage.setItem("data", JSON.stringify(data));
}