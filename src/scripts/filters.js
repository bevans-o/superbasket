export function getFilters() {
    var newFilters = [];
    var filterElements = document.querySelectorAll(".filter");

    filterElements.forEach((element) => {
      if (element.dataset.active == "true") {
        newFilters.push(element.dataset.filter);
      }
    })

    return newFilters;
}