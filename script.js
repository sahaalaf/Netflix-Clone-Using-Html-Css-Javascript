const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(faqBox => {
    // Track the state of each FAQ box
    let isOpen = false;

    faqBox.addEventListener("click", () => {
        // Check if this faq-box already has an answer shown
        const answerElement = faqBox.nextElementSibling;

        if (isOpen) {
            // Answer is already shown, so remove it
            answerElement.remove();
            isOpen = false;

            // Change cross svg back to plus svg
            const svgIcon = faqBox.querySelector("svg");
            svgIcon.innerHTML = `<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" />`;
        } else {
            // Remove any existing answer elements
            const existingAnswerElements = document.querySelectorAll(".answer-element");
            existingAnswerElements.forEach(element => element.remove());

            // Create a new div element for the answer
            const newAnswerElement = document.createElement("div");
            newAnswerElement.textContent = faqBox.getAttribute("data-answer");
            newAnswerElement.classList.add("answer-element"); // Add a class for identification

            // Insert the answer element after the clicked 'faq-box'
            faqBox.parentElement.insertBefore(newAnswerElement, faqBox.nextSibling);
            isOpen = true;

            // Change plus svg to cross svg for the clicked faq-box
            const svgIcon = faqBox.querySelector("svg");
            svgIcon.innerHTML = `<path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" />`;
        }
    });
});
