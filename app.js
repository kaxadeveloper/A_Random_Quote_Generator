const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
linkedinBtn = document.querySelector(".linkedin");

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://random-quotes-freeapi.vercel.app/api/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.quote;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
   let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
   speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
   navigator.clipboard.writeText(quoteText.innerText);
});

linkedinBtn.addEventListener("click", () => {
   let quote = `${quoteText.innerText} - ${authorName.innerText}`;
   navigator.clipboard.writeText(quote);
   let linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(quote)}`;
   window.open(linkedinUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);
randomQuote();