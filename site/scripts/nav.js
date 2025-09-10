fetch("/nav.html")
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error("Failed to load navbar");
  })
  .then(nav => {
    document.getElementById("nav").innerHTML = nav;
  })
  .catch(error => {
    console.error("[ERROR]", error);
  });