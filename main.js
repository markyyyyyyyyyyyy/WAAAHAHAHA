onload = () => {
    document.body.classList.remove("container");
  };

onload = () => {
    document.body.classList.remove("container");
  };

  onload = () => {
    document.body.classList.remove("container");
  
    const mailBtn = document.getElementById("mailBtn");
    const popup = document.getElementById("mailPopup");
    const closePopup = document.getElementById("closePopup");
  
    mailBtn.addEventListener("click", () => {
      popup.style.display = "flex"; // Show the popup
    });
  
    closePopup.addEventListener("click", () => {
      popup.style.display = "none"; // Hide the popup
    });
  
    // Optional: close the popup if you click outside the content
    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.style.display = "none"; // Close if outside content is clicked
    });
  };
