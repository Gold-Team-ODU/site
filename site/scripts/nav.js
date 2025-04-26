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

function setLink(id) {
  const element = document.getElementById(id);
  if (element) {
    element.href = getRoot() + id;
  }
}

fetch("../nav.html")
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

    setLink("index");
    setLink("customers");
    setLink("presentations/societal_problem");
    setLink("presentations/feasibility");
    setLink("presentations/design");
    setLink("lab1_outline");
    setLink("references");
    setLink("team");
  })
  .catch(error => {
    console.error("[ERROR]", error);
  });