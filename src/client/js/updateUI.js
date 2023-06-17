function updateUI (result) {
  const resultElement = document.getElementById('results');

  if(!result || result.status !== "success") {
    resultElement.innerText = "Error in analyzing data"
  }

  console.log("result", result)

  resultElement.innerHTML = `
    <div>
      <p>Polarity: ${result.polarity}</p>
      <p>Subjectivity: ${result.subjectivity}</p>
      <p>Text: ${result.text}</p>
    </div>
  `
}

export { updateUI }
