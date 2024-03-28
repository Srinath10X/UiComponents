const AppendClass = () => {
  let ul = document.getElementById("ul");
  if (ul.classList.contains("active")) {
    ul.classList.remove("active");
  } else {
    ul.classList.add("active");
  }
};
