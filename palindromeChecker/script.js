const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const inputValue = textInput.value.trim();

  if (!inputValue) {
    alert("Please input a value");
    return;
  }

  const isPalindrome = checkPalindrome(inputValue);
  const resultText = `${inputValue} ${
    isPalindrome ? "is" : "is not"
  } a palindrome`;
  resultDiv.textContent = resultText;
});

function checkPalindrome(text) {
  const cleanedText = text.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedText = cleanedText.split("").reverse().join("");
  return cleanedText === reversedText;
}
