const humbutger = document.querySelector(".header__btn--tagle");
const navigation = document.querySelector(".header__navigation");
const header = document.querySelector("header");

humbutger.addEventListener("click", () => {
  navigation.classList.toggle("navigation--active");
  header.classList.toggle("header--active");
});

function adddingReadMoreListener(button) {
  const textButton = document.querySelector(button);
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
adddingReadMoreListener(".btn--read-more-2"); //give error for home-page / because the home page doesn't have btn-2
