const AppendClass = () => {
  let divElement = document.querySelector(".toast");
  if (divElement.classList.contains("active")) {
    divElement.classList.remove("active");
  } else {
    divElement.classList.add("active");
  }
};
