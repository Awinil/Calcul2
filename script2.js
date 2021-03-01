function Calculator() {
    var name = Number(document.getElementById("name").value);
    var result = document.getElementById("starting bid").value;
    var education = Number(document.getElementById("education").value);
    if(!education.localeCompare("d1")) {
        result *= 1.5;
    } else if(!education.localeCompare("d2")) {
        result *= 1.2;
    } else if(!education.localeCompare('d3')) {
        result *= 1.05;
    } else {
        result *= 0.9;
    }
    var net_worth = Number(document.getElementById("worth").value);
    if(!net_worth.localeCompare("upper_class")) {
        result *= 2;
    } else if(!net_worth.localeCompare("middle_class")) {
        result *= 1.5;
    } else if(!net_worth.localeCompare("lower_class")){
        result *= 1.2;
    }
    var checkedValue = null; 
    var inputElements = document.getElementsByClassName('skillCheckbox');
    for(var i=0; i<4; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           if(!checkedValue.localeCompare('dombra')) {
            result += 100;
           } else if(!checkedValue.localeCompare('cook')) {
            result += 200;
           } else if(!checkedValue.localeCompare('character')) {
            result += 150;
           } else if(!checkedValue.localeCompare('sings')) {
            result += 100;
           }
      }
    }
    var age = document.getElementsByName('age');
    for (i = 0; i < 3; i++) {
      if (age[i].checked) {
        if(!age[i].value.localeCompare('age1')) {
            result *= 1.5;
        } else if(!age[i].value.localeCompare('age2')) {
            result *= 1.2;
        } else if(!age[i].value.localeCompare('age3')) {
            result *= 0.95;
        }
      }
    }
    var inputElements = document.getElementsByClassName('repoCheckbox');
    for(var i=0; i<3; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           if(!checkedValue.localeCompare('parent')) {
            result *= 0.85;
           } else if(!checkedValue.localeCompare('character')) {
            result *= 0.9;
           } else if(!checkedValue.localeCompare('person')) {
            result -= 200;
           } 
      }
    }
    localStorage.setItem("result", result);
    return false;
  }