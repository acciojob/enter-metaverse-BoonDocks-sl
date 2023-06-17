//your JS code here. If required.
  // Get the necessary elements by their IDs
        const statusParagraph = document.getElementById("status");
        const enterButton = document.getElementById("enterBtn");

        // Add an event listener to the button for the click event
        enterButton.addEventListener("click", function () {
            // Update the text of the paragraph to "Entered Metaverse"
            statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
        });
