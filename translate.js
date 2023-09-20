const englishTranslations = {
  "english": {
    "morning": "morning"
  },
  "malay": {
    "morning": "pagi"
  },
  "french": {
    "morning": "matin"
  },
};

const malayTranslations = {
  "english": {
    "pagi": "morning"
  },
  "malay": {
    "pagi": "pagi"
  },
  "french": {
    "pagi": "matin"
  },
};

const frenchTranslations = {
  "english": {
    "matin": "morning"
  },
  "malay": {
    "matin": "pagi"
  },
  "french": {
    "matin": "matin"
  },
};

export function translate(sourceLanguage, targetLanguage, inputText) {

  if (sourceLanguage === "english") {
    return englishTranslations[targetLanguage][inputText];
  }
  else if (sourceLanguage === "malay") {
    return malayTranslations[targetLanguage][inputText];
  }
  else if (sourceLanguage === "french") {
    return frenchTranslations[targetLanguage][inputText];
  }

}


//const translations = {
// "en": {
//   "ms": {
//      "morning": "pagi",
//    },
//  },
//  "ms": {
//    "en": {
//      "pagi": "morning",
//    },
//  },
//  "fr": {
//    "ms": {
//      "matin": "pagi",
//    },
//  },
//};

//export function translate(sourceLanguage, targetLanguage, inputText) {
//  const sourceLang = sourceLanguage.toLowerCase();
//  const targetLang = targetLanguage.toLowerCase();

//  if (translations[sourceLang] && translations[sourceLang][targetLang]) {
//    const translation = translations[sourceLang][targetLang][inputText];
//    if (translation) {
 //     return translation;
//    }
//  }
//  return "Translation not available for this input.";
//}