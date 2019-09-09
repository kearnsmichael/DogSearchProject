// filter buttons
(function() {
  // select all filter buttons
  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      // prevent default link behaviour
      event.preventDefault();
      // get event.target data filter attribute
      const value = event.target.dataset.filter;
      // console.log(value);
      const items = document.querySelectorAll(".store-item");
      items.forEach(function(item) {
        if (value === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(value)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();

// search input

(function() {
  //target search box
  const search = document.getElementById("search-item");

  search.addEventListener("keyup", function() {
    let value = search.value.toLowerCase().trim();

    const items = document.querySelectorAll(".store-item");
    items.forEach(function(item) {
      let type = item.dataset.item;
      // console.log(type);

      // if (type.includes(value)) {
      //   item.style.display = "block";
      // } else {
      //   item.style.display = "none";
      // }
      // length of input
      let length = value.length;
      // remove the part of type string
      let match = type.slice(0, length);
      if (value === match) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();

// AOS init
AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});
