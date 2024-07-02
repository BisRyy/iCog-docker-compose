function fetchMessage() {
  document.getElementById("message").innerText =
    "Icog Labs Test, fetching please wait... \n";

  fetch("http://localhost:5000/api/message")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("message").innerText +=
        data.message || "No message received \n";
    })
    .catch((error) => console.error("Error fetching message:", error));

  document.getElementById("message").innerText += "Fetching complete!"
}
