document.getElementById("calculate-button").addEventListener("click", function() {
    const billAmount = parseFloat(document.getElementById("bill").value);
    const serviceQuality = parseFloat(document.getElementById("service-quality").value);
    
    if (isNaN(billAmount) || isNaN(serviceQuality)) {
      alert("Please enter a valid bill amount and service quality.");
      return;
    }
  
    const tipAmount = billAmount * serviceQuality;
    const totalAmount = billAmount + tipAmount;
    
    document.getElementById("result").innerText = `Tip Amount: $${tipAmount.toFixed(2)} \nTotal Amount: $${totalAmount.toFixed(2)}`;
  });
   
