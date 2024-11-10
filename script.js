// Calculate the number of days and total price between start and end date
function calculatePrice() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (end >= start) {
        const difference = end - start;
        const days = difference / (1000 * 3600 * 24);
        const price = days * 100; // $100 per day

        // Display the results
        
        document.getElementById("daysDisplay").textContent = days;
        document.getElementById("priceDisplay").textContent = `$${price}`;
      } else {
        alert("End date must be equal to or later than the start date.");
      }
    } else {
      alert("Please select both start and end dates.");
    }
  }