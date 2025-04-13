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
      popup.style.display = "flex"; 
    });
  
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    
    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.style.display = "none"; 
    });
  };
