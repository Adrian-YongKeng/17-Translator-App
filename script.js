import { translate } from '/translate.js';

function translateText() {
  const inputText = document.getElementById("inputText").value.toLowerCase().trim();
  const sourceLanguage = document.getElementById("sourceLanguage").value;
  const targetLanguage = document.getElementById("targetLanguage").value

  const translated = translate(sourceLanguage, targetLanguage, inputText);

  if (translated != undefined) {
    document.getElementById("translatedText").value = `${translated}`;
  } else {
    document.getElementById("translatedText").value = `Translation Not Found`;
  }
}

window.translateText = translateText;