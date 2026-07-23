// Single configurable destination for every offer link/button on the page.
const OFFER_URL = "#";

document.querySelectorAll("[data-offer-link]").forEach((el) => {
  el.setAttribute("href", OFFER_URL);
});
