function expressFeelings() {
  const feelingsInput = document.getElementById("feelingsInput").value;
  const feelingsList = document.getElementById("feelingsList");

  if (feelingsInput.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = feelingsInput;
    feelingsList.appendChild(listItem);

    // Bersihkan input setelah mengungkapkan perasaan
    document.getElementById("feelingsInput").value = "";
  } else {
    alert("Mohon tulis perasaanmu terlebih dahulu.");
  }
}
