var toggleAnswerBtnList=document.querySelectorAll(".toggle-question-btn");function onToggleAnswerBtnClick(e){var n=e.closest(".questions__item").querySelectorAll(".questions__text");console.log("questionTextList: ",n),n.forEach((function(e){toggleAnswerToQuestion(e)})),toggleBtnIcon(e)}function toggleAnswerToQuestion(e){var n="none"===window.getComputedStyle(e).display;e.style.display=n?"block":"none"}function toggleBtnIcon(e){var n=e.querySelector(".icon--plus"),o=e.querySelector(".icon--minus");"none"===n.style.display?(n.style.display="block",o.style.display="none"):(n.style.display="none",o.style.display="block")}toggleAnswerBtnList.forEach((function(e){e.addEventListener("click",(function(){onToggleAnswerBtnClick(e)}))}));
//# sourceMappingURL=index.22f9b6ef.js.map
