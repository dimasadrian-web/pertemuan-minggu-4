toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
      toggle.textContent="☀️";
  }else{
      toggle.textContent="🌙";
  }
});