"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.querySelector("#title");
    const messageInput = document.querySelector("#message");
    const submitButton = document.querySelector("#submitButton");
    const displayTitle = document.querySelector("#displayTitle") || document.createElement("h2");
    const displayDescription = document.querySelector("#displayDescription") || document.createElement("p");
    submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const titleValue = titleInput === null || titleInput === void 0 ? void 0 : titleInput.value;
        const messageValue = messageInput === null || messageInput === void 0 ? void 0 : messageInput.value;
        displayTitle.textContent = titleValue !== null && titleValue !== void 0 ? titleValue : "";
        displayDescription.textContent = messageValue !== null && messageValue !== void 0 ? messageValue : "";
    });
});
//# sourceMappingURL=index.js.map