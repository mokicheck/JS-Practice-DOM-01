document.addEventListener("DOMContentLoaded", function () {
    // Task 1: Highlight words over 8 characters long
    const paragraph = document.getElementById("paragraph");
    paragraph.innerHTML = paragraph.innerHTML.replace(/\b\w{9,}\b/g, '<span style="background-color: yellow;">$&</span>');

    // Task 2: Add a link back to the source
    const sourceLink = document.getElementById("source-link");
    sourceLink.innerHTML = `Source: <a href="${sourceLink.href}">${sourceLink.href}</a>`;

    // Task 3: Split sentences into separate paragraphs
    const sentences = paragraph.textContent.split('. ');
    paragraph.textContent = '';
    sentences.forEach((sentence) => {
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = sentence;
        paragraph.appendChild(paragraphElement);
    });

    // Task 4: Count the number of words
    const paragraphs = paragraph.getElementsByTagName('p');
    let wordCount = 0;
    for (let i = 0; i < paragraphs.length; i++) {
        wordCount += paragraphs[i].textContent.trim().split(/\s+/).length;
    }
    const wordCountHeading = document.createElement('h2');
    wordCountHeading.textContent = `Word Count: ${wordCount}`;
    document.body.insertBefore(wordCountHeading, paragraph);

    // Task 5: Replace question marks and exclamation marks
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = paragraphs[i].textContent.replace(/\?/g, '🤔').replace(/\!/g, '😲');
    }
});
