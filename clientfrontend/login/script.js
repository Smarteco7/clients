const form = document.querySelector(".form-actions");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  console.log("bro");
  const params = new URLSearchParams(formData);

  console.log("broo");
  try {
    const response = await fetch("http://localhost:2000/users/login", {
      method: "POST",
      body: params,
    });

    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }
    const data = await response.json();
    console.log("login successful", data);
    window.location.href =
      "http://127.0.0.1:5500/clientfrontend/profile/profile.html";
  } catch (error) {
    console.error("error logging in", error);
  }
});
