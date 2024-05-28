function setTimestamp() {
  const timestampInput = document.getElementById("timestamp");
  const now = new Date();
  const isoString = now.toISOString(); //Iso string
  timestampInput.value = isoString;
}

window.onload = setTimestamp;
