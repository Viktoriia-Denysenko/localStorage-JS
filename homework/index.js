formRef = document.querySelector(".form");
btnStartRef = document.querySelector(".btn-start");
btnBestResultRef = document.querySelector(".btn-best-rslt");
btnAllBestResultRef = document.querySelector(".btn-all-best-rslt");
btnClearBestResultRef = document.querySelector(".btn-clear-best-rslt");
btnClearAllBestResultRef = document.querySelector(".btn-clear-all-best-rslt");
mainBtnRef = document.querySelector(".main-btn");

// formRef.addEventListener("submit", onInputSubmit);
btnStartRef.addEventListener("click", onStartBtnClick);
mainBtnRef.addEventListener("click", onMainBtnClick);
btnBestResultRef.addEventListener("click", onBestResultBtnClick);
btnAllBestResultRef.addEventListener("click", onAllBestResultBtnClick);
btnClearBestResultRef.addEventListener("click", onClearBestResultBtnRef);
btnClearAllBestResultRef.addEventListener("click", onClearAllBestResultBtnRef);
// function onInputSubmit(evt) {
//   evt.preventDefault();
// }

let clicks = 0;
let nickname = "";
let parsedSavedClicksBestLast = 0;
let parsedSavedClicksBestOfTheBestLast = 0;
// let parsedSavedClicksBestOfTheBest = { clicks, nickname };

function onStartBtnClick() {
  try {
    nickname = document.getElementById("nickname").value;

    if (nickname === "") {
      throw new Error(alert("Empty nickname"));
    }

    clicks = 0;

    setTimeout(() => {
      alert(`You clicked ${clicks} times`);

      const savedClicksBest = localStorage.getItem("Best result");
      const savedClicksBestOfTheBest = localStorage.getItem(
        "Best result for all time"
      );
      const parsedSavedClicksBest = JSON.parse(savedClicksBest);
      const parsedSavedClicksBestOfTheBest = JSON.parse(
        savedClicksBestOfTheBest
      );

      if (parsedSavedClicksBest < clicks) {
        localStorage.setItem("Best result", JSON.stringify(clicks));
      }

      if (parsedSavedClicksBestOfTheBest.clicks < clicks) {
        const data = { clicks, nickname };
        console.log(clicks);
        console.log(nickname);
        localStorage.setItem("Best result for all time", JSON.stringify(data));
      }

      console.log(parsedSavedClicksBestOfTheBest);

      const savedClicksBestLast = localStorage.getItem("Best result");
      parsedSavedClicksBestLast = JSON.parse(savedClicksBestLast);

      const savedClicksBestOfTheBestLast = localStorage.getItem(
        "Best result for all time"
      );
      parsedSavedClicksBestOfTheBestLast = JSON.parse(
        savedClicksBestOfTheBestLast
      );

      console.log(parsedSavedClicksBestOfTheBest);
    }, 5000);
  } catch (error) {
    console.log(error.message);
  }
}

// localStorage.setItem("Best result", JSON.stringify(clicks));
// localStorage.setItem(
//   "Best result for all time",
//   JSON.stringify({ clicks, nickname })
// );

function onMainBtnClick() {
  clicks += 1;
}

function onBestResultBtnClick() {
  alert(`Best result is: ${parsedSavedClicksBestLast}`);
}

function onAllBestResultBtnClick() {
  alert(
    `Best result for the whole time is: ${parsedSavedClicksBestOfTheBestLast.clicks} by ${parsedSavedClicksBestOfTheBestLast.nickname}`
  );
}

function onClearBestResultBtnRef() {
  localStorage.removeItem("Best result");
  alert("Best result is cleared");
}

function onClearAllBestResultBtnRef() {
  localStorage.removeItem("Best result for all time");
  alert("Best result for all time is cleared");
}

function changeUser() {
  localStorage.setItem("userName", nickname);
  return;
}
