 document.getElementById("healthForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let problem = document.getElementById("problem").value.toLowerCase();
    let response = "";

    // Simple AI (keyword-based)
    if (problem.includes("fever")) {
        response = "You may have a fever. Drink plenty of fluids and take rest.";
    } 
    else if (problem.includes("headache")) {
        response = "For headache, stay hydrated and avoid screen time.";
    } 
    else if (problem.includes("cough")) {
        response = "For cough, try warm water and consult a doctor if it persists.";
    } 
    else {
        response = "Thank you! Our team will contact you soon.";
    }

    let box = document.getElementById("responseBox");
    box.innerText = response;
    box.className = "success";
});