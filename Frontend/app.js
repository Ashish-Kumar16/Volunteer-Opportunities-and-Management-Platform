document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "http://127.0.0.1:8000/api/opportunities/";
  const opportunitiesList = document.getElementById("opportunities-list1");
  const volunteerCount = document.getElementById("volunteer-count1");
  const inPersonCheckbox = document.getElementById("in-person1");
  const virtualCheckbox = document.getElementById("virtual1");
  const locationInput = document.getElementById("location1");
  const keywordSearchInput = document.getElementById("keyword-search1");
  const searchButton = document.getElementById("search-button1");
  const clearFiltersLink = document.getElementById("clear-filters1").querySelector("a");

  async function fetchOpportunities() {
      let filters = [];

      if (inPersonCheckbox.checked) {
          filters.push("is_remote=false");
      }
      if (virtualCheckbox.checked) {
          filters.push("is_remote=true");
      }
      if (locationInput.value.trim()) {
          filters.push(`location=${encodeURIComponent(locationInput.value.trim())}`);
      }
      if (keywordSearchInput.value.trim()) {
          filters.push(`title=${encodeURIComponent(keywordSearchInput.value.trim())}`);
      }

      const queryString = filters.length > 0 ? `?${filters.join("&")}` : "";
      const url = `${apiUrl}${queryString}`;

      try {
          const response = await fetch(url);
          if (!response.ok) throw new Error("Network response was not ok");
          const data = await response.json();

          opportunitiesList.innerHTML = "";
          volunteerCount.textContent = `${data.length} volunteer opportunities found`;

          data.forEach((opportunity, index) => {
              const opportunityDiv = document.createElement("div");
              opportunityDiv.classList.add("opportunity1");

              opportunityDiv.innerHTML = `
                  <div class="opportunity-number1">${index + 1}</div>
                  <div class="opportunity-title1">${opportunity.title}</div>
                  <div class="opportunity-organization1">Organization ID: ${opportunity.organization}</div>
                  <div class="opportunity-details1">${opportunity.location} | ${opportunity.is_remote ? "Virtual" : "In-Person"}</div>
                  <div class="opportunity-description1">${opportunity.description}</div>
                  <a href="#" class="view-more1" target="_blank">View More</a>
              `;

              opportunitiesList.appendChild(opportunityDiv);
          });
      } catch (error) {
          console.error("Error fetching opportunities:", error);
      }
  }

  searchButton.addEventListener("click", fetchOpportunities);
  inPersonCheckbox.addEventListener("change", fetchOpportunities);
  virtualCheckbox.addEventListener("change", fetchOpportunities);
  clearFiltersLink.addEventListener("click", function (e) {
      e.preventDefault();
      inPersonCheckbox.checked = true;
      virtualCheckbox.checked = true;
      locationInput.value = "";
      keywordSearchInput.value = "";
      fetchOpportunities();
  });

  fetchOpportunities(); // Initial fetch
});
