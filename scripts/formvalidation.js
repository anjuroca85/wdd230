document.addEventListener("DOMContentLoaded", function () {
  const pw1 = document.querySelector("#password");
  const pw2 = document.querySelector("#confirm-password");
  const fb = document.querySelector("#feedback");

  pw2.addEventListener("focusout", checkEqual);

  function checkEqual() {
    if (pw1.value !== pw2.value) {
      pw1.value = "";
      pw2.value = "";
      pw1.focus();
      fb.textContent = "Passwords do not match❗- Try again";
    } else {
      fb.textContent = "";
    }
  }

  const rangevalue = document.getElementById("rangevalue");
  const range = document.getElementById("range");

  range.addEventListener("input", displayRatingValue);

  function displayRatingValue() {
    rangevalue.textContent = range.value;
  }
});
