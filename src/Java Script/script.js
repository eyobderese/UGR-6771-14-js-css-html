const humbutger = document.querySelector(".header__btn--tagle");
const navigation = document.querySelector(".header__navigation");
const header = document.querySelector("header");

humbutger.addEventListener("click", () => {
  navigation.classList.toggle("navigation--active");
  header.classList.toggle("header--active");
});

function adddingReadMoreListener(button, content) {
  const textButton = document.querySelector(button);
  const textcontent = document.querySelector(".card__addtional-text");
  let isShowLess = true;

  textButton.addEventListener("click", () => {
    isShowLess = !isShowLess;

    textButton.previousElementSibling.classList.toggle(
      "card__addtional-text--active"
    );
    if (isShowLess === true) {
      textButton.innerHTML = "Read More";
    } else {
      textButton.innerHTML = "Read Less";
    }
  });
}

adddingReadMoreListener(".btn--read-more");
adddingReadMoreListener(".btn--read-more-1");
adddingReadMoreListener(".btn--read-more-2");
