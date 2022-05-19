function createHeader() {
  // creating elmenets
  let header = document.createElement("header");
  let logoLink = document.createElement("a");
  logoLink.innerHTML = "Elzero";
  let navLinks = document.createElement("ul");
  ["Home", "About", "Service", "Contact"].forEach((e) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = e;
    a.href = "#";
    a.style.cssText =
      "text-decoration: none; color: black; box-sizing: border-box;";
    li.appendChild(a);
    li.style.cssText =
      "margin-left: 10px; margin-right: 10px; box-sizing: border-box;";
    navLinks.appendChild(li);
  });
  let nav = document.createElement("nav");
  nav.appendChild(navLinks);

  /* styling elements */
  // logo style
  logoLink.style.cssText =
    "color: green; font-size: 20px; font-weight: bold; display: block; box-sizing: border-box;";
  // header
  header.style.cssText =
    "display: flex; align-items: center; justify-content: space-between; background-color: white; padding: 10px 20px; box-sizing: border-box;";
  // nav
  navLinks.style.cssText =
    "display: flex; list-style: none; padding: 0; box-sizing: border-box;";
  // body
  document.body.style.cssText =
    "margin:0; padding: 0; background-color: #eee; box-sizing:";

  // append children
  header.appendChild(logoLink);
  header.appendChild(nav);
  document.body.appendChild(header);
}

function createFooter() {
  let footer = document.createElement("footer");
  footer.innerHTML = "Copyright 2021";
  footer.style.cssText =
    " text-align: center; background-color: green; width: 100%; padding: 20px; color: white; font-size: 20px; box-sizing: border-box;";
  document.body.appendChild(footer);
}

function createGrid() {
    let 


}

function createPage() {
  createHeader();
  createGrid();
  createFooter();
}

createPage();
