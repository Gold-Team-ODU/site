function getRoot() {
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;

  if (hostname.endsWith("github.io")) {
    const pathParts = pathname.split('/');
    if (pathParts.length > 1 && pathParts[1] !== "") {
      return `/${pathParts[1]}/`; // repo name
    } else {
      return "/"; // default root
    }
  } else {
    return "/"; // default root
  }
}

function setSrc(id) {
  const element = document.getElementById(id);
  if (element) {
    element.src = getRoot() + id;
  }
}

fetch(getRoot() + "footer.html")
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