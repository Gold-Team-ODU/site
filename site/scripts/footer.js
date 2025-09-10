function setSrc(id) {
  const element = document.getElementById(id);
  if (element) {
    element.src = "/" + id;
  }
}

fetch("/footer.html")
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error("Failed to load footer");
  })
  .then(footer => {
    document.getElementById("footer").innerHTML = footer;
    setSrc("assets/images/odu_cs.jpg");
  })
  .catch(error => {
    console.error("[ERROR]", error);
  });