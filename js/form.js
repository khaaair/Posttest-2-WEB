form()
function form(){
    let data = sessionStorage.getItem("data");
    data = JSON.parse(data);
    const nm = data['nm'];
    const eml = data['eml'];
    const checkbox = data['checkbox'];
    const experiences = data['experiences'];
    const radio = data['radio'];
    const Gender = data['Gender'];
    
    const userInputNama = document.getElementById('nm_form');
    const userInputEmail = document.getElementById('eml_form');
    const userInputCheckbox = document.getElementById('checkbox_form');
    const userInputExperience = document.getElementById('experiences_form');
    const userInputRadio = document.getElementById('radio_form');  
    const userInputGender = document.getElementById('gender_form');

    userInputNama.innerHTML =     "Nama                                     : " + nm;
    userInputEmail.innerHTML =    "Email                                    : " + eml;
    userInputExperience.innerHTML =   "Experiences                          : " + experiences;
    userInputRadio.innerHTML =    "Transport                                : " + radio;
    userInputGender.innerHTML=     "Jenis Kelamin                           : " + Gender;
    userInputCheckbox.innerHTML = "Country                                  : " + checkbox;

}
  