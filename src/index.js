import { chkUsername, chkPassword, chkEmail } from "./Validate";

let form = document.forms.formValidate;

form.user_name.addEventListener("keyup", () => {
  if (chkUsername(form.user_name.value)) {
    document.getElementById("useravail").style.display = "none";
  } else {
    document.getElementById("useravail").style.display = "block";
  }
});

form.password.addEventListener("keyup", () => {
  if (chkPassword(form.password.value)) {
    document.getElementById("passchk").style.display = "none";
  } else {
    document.getElementById("passchk").style.display = "block";
  }
});

form.re_password.addEventListener("keyup", () => {
  if (form.password.value === form.re_password.value) {
    document.getElementById("repasschk").style.display = "none";
  } else {
    document.getElementById("repasschk").style.display = "block";
  }
});

form.email_id.addEventListener("keyup", () => {
  if (chkEmail(form.email_id.value)) {
    document.getElementById("emailchk").style.display = "none";
  } else {
    document.getElementById("emailchk").style.display = "block";
  }
});

let count = 0;
Array.from(document.getElementsByName("hobbies")).forEach(element => {
  element.addEventListener("click", function() {
    if (element.checked === true) {
      count++;
    } else if (element.checked === false) {
      count--;
    }
    if (count > 2) {
      alert("Only two can be selected");
      element.checked = false;
      count--;
    }
    console.log(count);
  });
});
