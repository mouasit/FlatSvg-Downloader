const svgButton = document.getElementById("download").querySelectorAll("a")[8];
const editButton = document.getElementById("detail_edit_icon");
const svgContent = document.getElementsByClassName("icon-holder");

console.log(svgButton);

svgButton.addEventListener("click", () => {
  editButton.click();
  const interval = setInterval(() => {
    if (svgContent[0]?.querySelector("svg")) {
      navigator.clipboard.writeText(
        svgContent[0].querySelector("svg").outerHTML
      );
      clearInterval(interval);
    }
  }, 100);
});
