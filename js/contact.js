document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contactform");
  
	if (form) {
	  form.addEventListener("submit", async function (e) {
		e.preventDefault(); // Prevent default form submission
  
		const formData = new FormData(form);
  
		try {
		  const response = await fetch(form.action, {
			method: "POST",
			body: formData,
			headers: {
			  Accept: "application/json"
			}
		  });
  
		  if (response.ok) {
			alert("Thanks! Your message has been sent.");
			form.reset(); // Clear the form
		  } else {
			alert("Oops! There was a problem. Try again.");
		  }
		} catch (error) {
		  alert("Network error. Please try again.");
		}
	  });
	}
  });
  