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

fetch(getRoot() + "nav.html")
  .then(response => {
    if (response.ok) {
      let text = response.text();
      console.debug("[GOT]", text);
      return text;
    }
    throw new Error("Failed to load navbar");
  })
  .then(nav => {
    document.getElementById("nav").innerHTML = nav;

    for (element of document.getElementsByClassName("nav-link")) {
      element.href = getRoot() + element.id;
    }
  })
  .catch(error => {
    console.error("[ERROR]", error);
  });