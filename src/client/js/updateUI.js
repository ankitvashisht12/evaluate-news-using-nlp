function updateUI(result) {
  const resultElement = document.getElementById("results");

  if (!result || result.status !== "success") {
    resultElement.innerText = "Error in analyzing data";
  }

  const inDetailResult = result?.sentence_list?.map((sentence) => {
    return `
          <li class="result-item">
            <p>Sentence: ${sentence.text}</p>
            <p>Polarity: ${
              sentence.score_tag === "P" ? "POSITIVE" : "NEGATIVE"
            }</p>
            <p>Confidence: ${sentence.confidence}%</p>
          </li>
        `;
  });

  resultElement.innerHTML = `
    <div class="overall-result">
      <h3>Overall Analysis Results</h3>
      <p>Polarity: ${result.polarity}</p>
      <p>Subjectivity: ${result.subjectivity}</p>
    </div>
    <div class="detail-result">
      <h3>Analysis In Details</h3>
      <ul>
      ${inDetailResult.join("")}
      </ul>
    </div>
  `;
}

export { updateUI };
