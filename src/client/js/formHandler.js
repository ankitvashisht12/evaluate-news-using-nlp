async function handleSubmit(event) {
  event.preventDefault();

  let url = document.getElementById("url").value;
  if (
    !url ||
    (typeof textToAnalyze === "string" && !url?.trim()?.length) ||
    !Client.isValidURL(url)
  ) {
    alert("Please enter a valid URL");
    return;
  }


  let response;

  try {
    response = await fetch("http://localhost:8080/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: textToAnalyze }),
    });
    response = await response.json();
  } catch (err) {
    console.error("Error in analyzing data", err);
    response = { status: "error", message: "Error in analyzing data" };
  }

  Client.updateUI(response);
}

export { handleSubmit };
