let text = document.querySelector("input");


function speackHandler() {
  if(text.value == "") {
    alert("Sorry, I don't read empty content");
  } else {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(text.value)
    );
  }
}

function CopyText(event) {
  
  if(text.value == "") {
    alert("Sorry, I don't copy empty content");
  } else {
    navigator.clipboard.writeText(text.value);

    event.innerHTML = "متن کپی شد";

    setTimeout(() => {
      event.innerHTML = "متن و کپی کن";
    }, 3000);
  }

}


let speekToText = new webkitSpeechRecognition();

speekToText.continuous = true;
speekToText.interimResults = true;

speekToText.onresult = (event) => {

  let finaltext = "";

  Object.values(event.results).forEach( (item) => {
    finaltext += item[0].transcript;
  })

  text.value = finaltext;
}
