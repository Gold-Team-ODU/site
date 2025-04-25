fetch("../nav.html")
  .then(response => {
    if (response.ok) {
      let text = response.text();
      console.debug("[GOT]", text);
      return text;
    }
    throw new Error("Failed to load navbar");
  })
  .then(footer => {
    document.getElementById("nav").innerHTML = footer;
  })
  .catch(error => {
    console.error("[ERROR]", error);
  });