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

svgButton?.querySelectorAll("a")[8]?.querySelector("i")?.remove();
const spanElement = svgButton?.querySelectorAll("a")[8].querySelector("span");
if (spanElement) spanElement.textContent = "Copy Svg";

svgButton
  ?.querySelectorAll("a")[8]
  .addEventListener("click", handleSVGButton(svgButton));

// Click pagination button

let paginationButtons = document.querySelectorAll(".pagination-buttons");

paginationButtons[0]?.querySelectorAll("a").forEach((e) => {
  handlePagination(e);
});

// Click next or previous buttons

let paginationNextPrevious = document.querySelectorAll(".pagination");
paginationNextPrevious[0]?.querySelectorAll("a").forEach((e) => {
  handlePagination(e);
});

// Click download button

let editSection = document.getElementsByClassName("edit-icons-user-actions");
let newItem = document.createElement("button");
newItem.classList.add("bj-button", "btn-warning", "mg-left-lv1");
newItem.textContent = "Copy Svg";

let saveButton = document.getElementById("save_into_active");
editSection[0]
  ?.querySelector(".row")
  ?.insertBefore(newItem, saveButton.nextSibling);

newItem.addEventListener("click", () => {
  let svgContent = document.getElementsByClassName(
    "detail__editor__icon-holder"
  );
  navigator.clipboard.writeText(svgContent[0].querySelector("svg").outerHTML);
});

function handleSVGButton(svgButton) {
  //Edit button
  let editButton = document.getElementById("detail_edit_icon");
  // Svg code
  let svgContent = document.getElementsByClassName(
    "detail__editor__icon-holder"
  );

  svgButton.querySelectorAll("a")[8].addEventListener("click", () => {
    let closeInterval = setInterval(() => {
      let closeModalButton = document
        .getElementById("fi-premium-download-buttons")
        .getElementsByClassName("button--close")[0];
      if (closeModalButton) {
        clearInterval(closeInterval);
        closeModalButton.click();
      }
    }, duration);

    editButton.click();
    const intervalContent = setInterval(() => {
      if (svgContent[0]?.querySelector("svg")) {
        clearInterval(intervalContent);
        let exit = document
          .getElementById("detail")
          .getElementsByClassName("close")[0];
        navigator.clipboard.writeText(
          svgContent[0].querySelector("svg").outerHTML
        );
        exit.click();

        // Add toast

        document.body.innerHTML +=
          "<ul id='notifications-copy' class='notifications'></ul>";

        const notifications = document.getElementById("notifications-copy");
        const toastDetails = {
          timer: 5000,
          success: {
            icon: "fa-circle-check",
            text: "Success: This is a success toast.",
          },
        };

        const removeToast = (toast) => {
          toast.classList.add("hide");
          if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
          setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
        };

        const createToast = (id) => {
          // Getting the icon and text for the toast based on the id passed
          const { icon, text } = toastDetails[id];
          const toast = document.createElement("li"); // Creating a new 'li' element for the toast
          toast.className = `toast ${id}`; // Setting the classes for the toast
          // Setting the inner HTML for the toast
          toast.innerHTML = `<div class="column">
                                 <i class="fa-solid ${icon}"></i>
                                 <span>${text}</span>
                              </div>
                              <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
          notifications.appendChild(toast); // Append the toast to the notification ul
          // Setting a timeout to remove the toast after the specified duration
          toast.timeoutId = setTimeout(
            () => removeToast(toast),
            toastDetails.timer
          );
        };

        createToast("success");
      }
    }, duration);
  });
}

function handlePagination(element) {
  element.addEventListener("click", () => {
    let spinnerInterval = setInterval(() => {
      let spinner = document.getElementById("pagination-spinner");
      if (spinner.classList[spinner.classList.length - 1] === "hidden") {
        clearInterval(spinnerInterval);
        let listIcons = document.querySelectorAll(".link-icon-detail");

        if (listIcons?.length) {
          listIcons.forEach((e) => {
            e.addEventListener("click", () => {
              window.location = e.href;
            });
          });
        }
      }
    }, duration);
  });
}
