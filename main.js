const duration = 100;
// In search list page
let listIcons = document.querySelectorAll(".link-icon-detail");

if (listIcons?.length) {
  listIcons.forEach((e) => {
    e.addEventListener("click", () => {
      window.location = e.href;
    });
  });
}

// In edit page
let svgButton = document.getElementById("download");

svgButton
  ?.querySelectorAll("a")[8]
  .addEventListener("click", handleSVGButton(svgButton));

// Click pagination button

let paginationButtons = document.querySelectorAll(".pagination-buttons");

paginationButtons[0]?.querySelectorAll("a").forEach((e) => {
  e.addEventListener("click", () => {
    let spinnerInterval = setInterval(() => {
      let spinner = document.getElementById("pagination-spinner");
      if (spinner.classList[spinner.classList.length - 1] === "hidden") {
        clearInterval(spinnerInterval);

        let listIcons = document.querySelectorAll(".link-icon-detail");

        if (listIcons?.length) {
          listIcons.forEach((e) => {
            console.log(e);
            e.addEventListener("click", () => {
              window.location = e.href;
            });
          });
        }
      }
    }, duration);
  });
});

function handleSVGButton(svgButton) {
  //Edit button
  let editButton = document.getElementById("detail_edit_icon");
  // Svg code
  let svgContent = document.getElementsByClassName(
    "detail__editor__icon-holder"
  );

  svgButton.querySelectorAll("a")[8].addEventListener("click", () => {
    editButton.click();
    const intervalContent = setInterval(() => {
      if (svgContent[0]?.querySelector("svg")) {
        navigator.clipboard.writeText(
          svgContent[0].querySelector("svg").outerHTML
        );
        clearInterval(intervalContent);
      }
    }, duration);
  });
}
