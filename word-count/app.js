const input = document.querySelector("textarea")

const wordCount = document.querySelector("[data-word-count]")
const characterCount = document.querySelector("[data-character-count]")

const sentenceCount = document.querySelector("[data-sentense-count")

const paragraphCount = document.querySelector("[data-paragraph-count]")

input.addEventListener("input", UpdateCount)


/**
 * Updates the count of words, characters, sentences and paragraphs
 * based on the value of the input element.
 */
function UpdateCount() {
    if (!input.value) {
        resetCount()
        return
    }
    // Split the input value into an array of words
    const wordsArray = input.value.split(" ")
        .filter((word) => word.trim() !== "")

    // Update the word count element
    wordCount.innerText = wordsArray.length

    // Update the character count element
    characterCount.innerText = input.value.length

    // Split the input value into an array of sentences
    const sentenceArray = input.value.split(/[].!]/)

    // Update the sentence count element
    sentenceCount.innerText = sentenceArray.length - 1

    // Split the input value into an array of paragraphs
    const paragraphArray = input.value.split("\n").filter((word) => word.trim() !== "")

    // Update the paragraph count element
    paragraphCount.innerText = paragraphArray.length
}

function resetCount() {
    wordCount.textContent = characterCount.textContent = sentenceCount.textContent = paragraphCount.textContent = "0"
}






