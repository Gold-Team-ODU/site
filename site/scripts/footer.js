fetch("../footer.html")
  .then(response => {
    if (response.ok) {
      let text = response.text();
      console.debug("[GOT]", text);
      return text;
    }
    throw new Error("Failed to load footer");
  })
  .then(footer => {
    document.getElementById("footer").innerHTML = footer;
  })
  .catch(error => {
    console.error("[ERROR]", error);
  });