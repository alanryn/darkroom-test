const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
});

const mainMenu = document.querySelector(".main-menu");
const subMenuAbout = document.querySelector(".sub-menu-about");
const subMenuCommunity = document.querySelector(".sub-menu-community");
const subMenuExperiences = document.querySelector(".sub-menu-experiences");

const mainMenuItemAbout = document.querySelector(".main-about");
const mainMenuItemCommunity = document.querySelector(".main-community");
const mainMenuItemExperiences = document.querySelector(".main-experiences");

const subMenuItemAbout = document.querySelector(".sub-about");
const subMenuItemCommunity = document.querySelector(".sub-community");
const subMenuItemExperiences = document.querySelector(".sub-experiences");

mainMenuItemAbout.addEventListener("click", () => {
  hideContent(mainMenu);
  showContent(subMenuAbout);
});
mainMenuItemCommunity.addEventListener("click", () => {
  hideContent(mainMenu);
  showContent(subMenuCommunity);
});
mainMenuItemExperiences.addEventListener("click", () => {
  hideContent(mainMenu);
  showContent(subMenuExperiences);
});
subMenuItemAbout.addEventListener("click", () => {
  hideContent(subMenuAbout);
  showContent(mainMenu);
});
subMenuItemCommunity.addEventListener("click", () => {
  hideContent(subMenuCommunity);
  showContent(mainMenu);
});
subMenuItemExperiences.addEventListener("click", () => {
  hideContent(subMenuExperiences);
  showContent(mainMenu);
});

function hideContent(parent) {
  parent.setAttribute("hidden", true);
}

function showContent(parent) {
  parent.removeAttribute("hidden");
}
