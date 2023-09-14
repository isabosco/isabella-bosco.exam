document.addEventListener("DOMContentLoaded", function() {
  const worksContainer = document.getElementById("works-container");
  const worksData = [
      { title: "work-1", year: 1990, imageSrc: "images/Untitled (Fortune Cookie Corner) 1990.jpeg" },
      { title: "work-2", year: 1992, imageSrc: "images/Untitled (Rossmore) 1992.jpeg" },
      { title: "work-3", year: 1993, imageSrc: "images/untitled Print on Paper Endless Supply 1992 93.jpeg" },
      { title: "work-4", year: 1993, imageSrc: "images/untitled (couple)1993.jpeg" },
      { title: "work-5", year: 1991, imageSrc: "images/untitled (go-go dancing platform) 1991.jpeg" },
      { title: "work-6", year: 1990, imageSrc: "images/untitled(usa today90.jpeg" },
  ];

  function displayWorks(year) {
      worksContainer.innerHTML = "";

      const filteredData = year === "all" ? worksData : worksData.filter(work => work.year === parseInt(year));

      filteredData.forEach((work) => {
          const workElement = document.createElement("div");
          workElement.className = "work-item";

          // Create an image element
          const imgElement = document.createElement("img");
          imgElement.src = work.imageSrc; // Use the image source from the data
          imgElement.alt = work.title;

          // Create elements for title and year
          const titleElement = document.createElement("p");
          titleElement.textContent = work.title;

          const yearElement = document.createElement("p");
          yearElement.textContent = work.year;

          // Append elements to the workElement
          workElement.appendChild(imgElement);
          workElement.appendChild(titleElement);
          workElement.appendChild(yearElement);

          worksContainer.appendChild(workElement);
      });
  }

  displayWorks("all"); // Initial display of all works

  const filterButtons = document.querySelectorAll("#filter-buttons button");
  filterButtons.forEach((button) => {
      button.addEventListener("click", function() {
          const year = button.getAttribute("data-filter");
          displayWorks(year);
      });
  });
});
