
  document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var formData = new FormData(event.target);
    var name = formData.get("name");
    var email = formData.get("email");
    var phone = formData.get("phone");
    var amount = formData.get("amount");

    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phone);
    console.log("Amount:", amount);


    alert("Thank you, " + name + ", for your donation of $" + amount + "!");
    event.target.reset();
  });