let linksIcons = document.querySelectorAll(".link-icon-detail");
let svgButton = document.getElementById("download");

linksIcons?.forEach((e) => {
  e.addEventListener("click", () => {
    const intervalSvgButton = setInterval(() => {
      let svgButton = document.getElementById("download");
      if (svgButton) {
        clearInterval(intervalSvgButton);
        handleSVG();
      }
    }, 100);
  });
});

svgButton?.querySelectorAll("a")[8].addEventListener("click", handleSVG);

function handleSVG() {
  let editButton = document.getElementById("detail_edit_icon");
  let svgButton = document.getElementById("download");
  let svgContent = document.getElementsByClassName(
    "detail__editor__icon-holder icon-holder"
  );

  svgButton.querySelectorAll("a")[8].addEventListener("click", () => {
    editButton.click();
    const intervalContent = setInterval(() => {
      console.log(svgContent);
      if (svgContent[0]?.querySelector("svg")) {
        navigator.clipboard.writeText(
          svgContent[0].querySelector("svg").outerHTML
        );
        clearInterval(intervalContent);
      }
    }, 100);
  });
}
