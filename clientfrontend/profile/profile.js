// const share = document.querySelector('.links')
const viewForm = document.querySelector(".viewmessage");
console.log("before");

viewForm.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("after");
  try {
    console.log("clicked");
    window.location.href =
      "http://127.0.0.1:5500/clientfrontend/viewmessages/viewmessages.html";
    // } catch (err) {
    //   console.log("\n\n\nSome error: ", err);
  } finally {
    console.log("siaaa");
  }
});

// const share = document.querySelector("#shareLink");

// console.log("sia");

// share.addEventListener("click", async (event) => {
//   console.log(event);
//   event.preventDefault();

//   console.log("siaa");

//   const userId = "66bc77700c31fe24f3399abe";
//   const url = `http://localhost:3000/users/${userId}`;

//   console.log("ok");

//   try {
//     const response = await fetch(url, {
//       method: "GET",
//     });

//     console.log("okk");

//     if (response.ok) {
//       const user = await response.json();

//       console.log("shared user:", user);
//     } else {
//       console.error("Error fetching user:", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });
