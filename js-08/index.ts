document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.querySelector<HTMLInputElement>("#title");
    const messageInput = document.querySelector<HTMLTextAreaElement>("#message");
    const submitButton = document.querySelector<HTMLButtonElement>("#submitButton");
    const displayTitle = document.querySelector<HTMLHeadingElement>("#displayTitle") || document.createElement("h2");
    const displayDescription = document.querySelector<HTMLParagraphElement>("#displayDescription") || document.createElement("p");

  
    submitButton?.addEventListener("click", (event) => {
      event.preventDefault(); 
  
      const titleValue = titleInput?.value;
      const messageValue = messageInput?.value;
  
      
      displayTitle!.textContent = titleValue ?? "";
      displayDescription!.textContent = messageValue ?? "";
    });
});

