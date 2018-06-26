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
    btnSubmit.disabled = false;
  } else {
    document.getElementById("emailchk").style.display = "block";
  }
});
