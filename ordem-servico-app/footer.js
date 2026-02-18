document.addEventListener("DOMContentLoaded", function() {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      const footer = document.createElement("div");
      footer.innerHTML = data;
      document.body.appendChild(footer);
    })
    .catch(err => console.error("Erro ao carregar footer:", err));
});
