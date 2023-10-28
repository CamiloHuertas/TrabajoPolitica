let d = document

let boxes = d.querySelectorAll(".box")

boxes.forEach(box => {
    box.addEventListener("click", (e) => {
        let currentBox = e.currentTarget
        let currentClick = currentBox.querySelector(".sub")
        let currentPar = currentBox.querySelector(".par")

        let justifyContent = window.getComputedStyle(currentClick).justifyContent
        const isTransitioned = currentClick.classList.contains("transition");

        
        if (justifyContent === "center") {
          currentClick.style.justifyContent = "flex-start"
          currentPar.style.display = "block"
          currentClick.style.height = "20%"
          currentClick.style.marginTop = "30px"
          
        } else if (justifyContent === "flex-start"){
          currentClick.style.justifyContent = "center"
          currentPar.style.display = "none"
          currentClick.style.height = "100%"
          currentClick.style.marginTop = "0px"
      }
    })
})

