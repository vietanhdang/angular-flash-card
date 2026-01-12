export interface Card {
  word: string; // từ vựng
  type: string; // loại từ (danh từ, động từ, tính từ, v.v.)
  pronunciation: string; // phiên âm
  meaning: string; // nghĩa của từ
}

export interface DictionaryResponse {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export interface Phonetic {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

export interface License {
  name: string;
  url: string;
}
