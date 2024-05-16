function showConfirmationFunction(event) {
event.preventDefault();
console.log("🪚 event:", event);

const confirmationModal = `
    <dialog class="modal">
      <div id="confirmation">
        <h2>Are you sure?</h2>
        <p>Do you really want to ACTION this place?</p>
        <div id="confirmation-actions">
          <button id="action-no" className="button-text">
            No
          </button>
          <button id="action-yes" className="button">
            Yes
          </button>
        </div>
      </div>
    </dialog>
  `;

document.body.insertAdjacentHTML("beforeend", confirmationModal);

const dialog = document.querySelector("dialog");
dialog.showModal();
}

document.addEventListener("htmx:beforeRequest", showConfirmationFunction);
