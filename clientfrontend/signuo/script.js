const formE1 = document.querySelector(".form-actions");

formE1.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log("good");
  try {
    const formData = new FormData(formE1);
    const data = new URLSearchParams(formData);

    const response = await fetch("http://localhost:2000/users/signup", {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} || ${response.message}`);
    }

    const signupData = await response.json();
    console.log("Signup successful:", signupData);
    window.location.href =
      "http://127.0.0.1:5500/clientfrontend/profile/profile.html";
  } catch (error) {
    console.error("Error signing up:", error);
  }
});
