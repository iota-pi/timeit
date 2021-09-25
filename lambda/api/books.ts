import fuzz from 'fuzzball';

// axios.get(`/bibles/${bible.id}/books`)
const books = [
  {
    "id": "GEN",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Gen.",
    "name": "Genesis",
    "nameLong": "The First Book of Moses, Commonly Called Genesis"
  },
  {
    "id": "EXO",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Ex.",
    "name": "Exodus",
    "nameLong": "The Second Book of Moses, Commonly Called Exodus"
  },
  {
    "id": "LEV",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Lev.",
    "name": "Leviticus",
    "nameLong": "The Third Book of Moses, Commonly Called Leviticus"
  },
  {
    "id": "NUM",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Num.",
    "name": "Numbers",
    "nameLong": "The Fourth Book of Moses, Commonly Called Numbers"
  },
  {
    "id": "DEU",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Dt.",
    "name": "Deuteronomy",
    "nameLong": "The Fifth Book of Moses, Commonly Called Deuteronomy"
  },
  {
    "id": "JOS",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Josh.",
    "name": "Joshua",
    "nameLong": "The Book of Joshua"
  },
  {
    "id": "JDG",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Judg.",
    "name": "Judges",
    "nameLong": "The Book of Judges"
  },
  {
    "id": "RUT",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Ruth",
    "name": "Ruth",
    "nameLong": "The Book of Ruth"
  },
  {
    "id": "1SA",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "1 S.",
    "name": "1 Samuel",
    "nameLong": "The First Book of Samuel"
  },
  {
    "id": "2SA",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "2 S.",
    "name": "2 Samuel",
    "nameLong": "The Second Book of Samuel"
  },
  {
    "id": "1KI",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "1 K.",
    "name": "1 Kings",
    "nameLong": "The First Book of the Kings"
  },
  {
    "id": "2KI",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "2 K.",
    "name": "2 Kings",
    "nameLong": "The Second Book of the Kings"
  },
  {
    "id": "1CH",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "1 Chr.",
    "name": "1 Chronicles",
    "nameLong": "The First Book of the Chronicles"
  },
  {
    "id": "2CH",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "2 Chr.",
    "name": "2 Chronicles",
    "nameLong": "The Second Book of the Chronicles"
  },
  {
    "id": "EZR",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Ezra",
    "name": "Ezra",
    "nameLong": "The Book of Ezra"
  },
  {
    "id": "NEH",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Neh.",
    "name": "Nehemiah",
    "nameLong": "The Book of Nehemiah"
  },
  {
    "id": "EST",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Esth.",
    "name": "Esther",
    "nameLong": "The Book of Esther"
  },
  {
    "id": "JOB",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Job",
    "name": "Job",
    "nameLong": "The Book of Job"
  },
  {
    "id": "PSA",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Ps.",
    "name": "Psalms",
    "nameLong": "The Psalms"
  },
  {
    "id": "PRO",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Prov.",
    "name": "Proverbs",
    "nameLong": "The Proverbs"
  },
  {
    "id": "ECC",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Eccl.",
    "name": "Ecclesiastes",
    "nameLong": "Ecclesiastes or, The Preacher"
  },
  {
    "id": "SNG",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "S. S.",
    "name": "Song of Solomon",
    "nameLong": "THE SONG OF SOLOMON"
  },
  {
    "id": "ISA",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Is.",
    "name": "Isaiah",
    "nameLong": "The Book of Isaiah"
  },
  {
    "id": "JER",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Jer.",
    "name": "Jeremiah",
    "nameLong": "The Book of Jeremiah"
  },
  {
    "id": "LAM",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Lam.",
    "name": "Lamentations",
    "nameLong": "The Lamentations of Jeremiah"
  },
  {
    "id": "EZK",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Ezek.",
    "name": "Ezekiel",
    "nameLong": "The Book of Ezekiel"
  },
  {
    "id": "DAN",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Dan.",
    "name": "Daniel",
    "nameLong": "The Book of Daniel"
  },
  {
    "id": "HOS",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Hos.",
    "name": "Hosea",
    "nameLong": "The Book of Hosea"
  },
  {
    "id": "JOL",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Joel",
    "name": "Joel",
    "nameLong": "The Book of Joel"
  },
  {
    "id": "AMO",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Am.",
    "name": "Amos",
    "nameLong": "The Book of Amos"
  },
  {
    "id": "OBA",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Obad.",
    "name": "Obadiah",
    "nameLong": "The Book of Obadiah"
  },
  {
    "id": "JON",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Jon.",
    "name": "Jonah",
    "nameLong": "The Book of Jonah"
  },
  {
    "id": "MIC",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Mic.",
    "name": "Micah",
    "nameLong": "The Book of Micah"
  },
  {
    "id": "NAM",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Nah.",
    "name": "Nahum",
    "nameLong": "The Book of Nahum"
  },
  {
    "id": "HAB",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Hab.",
    "name": "Habakkuk",
    "nameLong": "The Book of Habakkuk"
  },
  {
    "id": "ZEP",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Zeph.",
    "name": "Zephaniah",
    "nameLong": "The Book of Zephaniah"
  },
  {
    "id": "HAG",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Hag.",
    "name": "Haggai",
    "nameLong": "The Book of Haggai"
  },
  {
    "id": "ZEC",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Zech.",
    "name": "Zechariah",
    "nameLong": "The Book of Zechariah"
  },
  {
    "id": "MAL",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Mal.",
    "name": "Malachi",
    "nameLong": "The Book of Malachi"
  },
  {
    "id": "MAT",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Mt.",
    "name": "Matthew",
    "nameLong": "The Gospel According to Matthew"
  },
  {
    "id": "MRK",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Mk.",
    "name": "Mark",
    "nameLong": "The Gospel According to Mark"
  },
  {
    "id": "LUK",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Lk.",
    "name": "Luke",
    "nameLong": "The Gospel According to Luke"
  },
  {
    "id": "JHN",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Jn.",
    "name": "John",
    "nameLong": "The Gospel According to John"
  },
  {
    "id": "ACT",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Acts",
    "name": "Acts",
    "nameLong": "The Acts"
  },
  {
    "id": "ROM",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Rom.",
    "name": "Romans",
    "nameLong": "The Epistle of Paul to the Romans"
  },
  {
    "id": "1CO",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "1 Cor.",
    "name": "1 Corinthians",
    "nameLong": "The First Epistle of Paul to the Corinthians"
  },
  {
    "id": "2CO",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "2 Cor.",
    "name": "2 Corinthians",
    "nameLong": "The Second Epistle of Paul to the Corinthians"
  },
  {
    "id": "GAL",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Gal.",
    "name": "Galatians",
    "nameLong": "The Epistle of Paul to the Galatians"
  },
  {
    "id": "EPH",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Eph.",
    "name": "Ephesians",
    "nameLong": "The Epistle of Paul to the Ephesians"
  },
  {
    "id": "PHP",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Phil.",
    "name": "Philippians",
    "nameLong": "The Epistle of Paul to the Philippians"
  },
  {
    "id": "COL",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Col.",
    "name": "Colossians",
    "nameLong": "The Epistle of Paul to the Colossians"
  },
  {
    "id": "1TH",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "1 Th.",
    "name": "1 Thessalonians",
    "nameLong": "The First Epistle of Paul to the Thessalonians"
  },
  {
    "id": "2TH",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "2 Th.",
    "name": "2 Thessalonians",
    "nameLong": "The Second Epistle of Paul to the Thessalonians"
  },
  {
    "id": "1TI",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "1 Tim.",
    "name": "1 Timothy",
    "nameLong": "The First Epistle of Paul to Timothy"
  },
  {
    "id": "2TI",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "2 Tim.",
    "name": "2 Timothy",
    "nameLong": "The Second Epistle of Paul to Timothy"
  },
  {
    "id": "TIT",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Tit.",
    "name": "Titus",
    "nameLong": "The Epistle of Paul to Titus"
  },
  {
    "id": "PHM",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Philem.",
    "name": "Philemon",
    "nameLong": "The Epistle of Paul to Philemon"
  },
  {
    "id": "HEB",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Heb.",
    "name": "Hebrews",
    "nameLong": "The Epistle to the Hebrews"
  },
  {
    "id": "JAS",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Jas.",
    "name": "James",
    "nameLong": "The Epistle of James"
  },
  {
    "id": "1PE",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "1 Pet.",
    "name": "1 Peter",
    "nameLong": "The First Epistle of Peter"
  },
  {
    "id": "2PE",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "2 Pet.",
    "name": "2 Peter",
    "nameLong": "The Second Epistle of Peter"
  },
  {
    "id": "1JN",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "1 Jn.",
    "name": "1 John",
    "nameLong": "The First Epistle of John"
  },
  {
    "id": "2JN",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "2 Jn.",
    "name": "2 John",
    "nameLong": "The Second Epistle of John"
  },
  {
    "id": "3JN",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "3 Jn.",
    "name": "3 John",
    "nameLong": "The Third Epistle of John"
  },
  {
    "id": "JUD",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Jude",
    "name": "Jude",
    "nameLong": "The Epistle of Jude"
  },
  {
    "id": "REV",
    "bibleId": "06125adad2d5898a-01",
    "abbreviation": "Rev.",
    "name": "Revelation",
    "nameLong": "The Revelation of John"
  }
];

const bookMap = Object.fromEntries(
  books.map(
    book => [book.name.toLowerCase(), book.id],
  ),
);

export function getBookId(rawName: string) {
  let bestScore = 70;
  let best: string | null = null;
  const name = rawName.replace(/[^a-z0-9 ]/i, '').toLowerCase();
  for (const book of books) {
    const normalisedName = book.name.toLowerCase();
    const normalisedAbbrev = book.abbreviation.replace(/\.$/, '').toLowerCase();
    const score = Math.max(
      fuzz.partial_ratio(
        name,
        normalisedName.padEnd(name.length + 1, ' '),
        { full_process: false },
      ),
      fuzz.ratio(name, normalisedAbbrev, { full_process: false }),
    );
    if (score > bestScore) {
      bestScore = score;
      best = book.id;
    }
  }
  return best;
}

export function getPassageId(passage: string) {
  const book = passage.replace(/[\d\s-–]*$/, '');
  const reference = (
    passage
      .replace(/^\d*(\s*[a-z]+)+\s*/i, '')
      .replace(/\s*[-–]\s*/g, '-')
      .replace(/:/g, '.')
      .trim()
  );
  const bookId = getBookId(book);
  if (!reference || !bookId) {
    return bookId;
  }
  const referenceParts = reference.split('-');
  const hasVerseNumbers = reference.includes('.');
  const firstChapter = referenceParts[0].replace(/\..*/, '');
  const withBookAndChapter = referenceParts.map((part, index) => {
    if (part.includes('.') || !hasVerseNumbers) {
      return `${bookId}.${part}`;
    }
    if (index === 0) {
      return `${bookId}.${part}.1`;
    }
    return `${bookId}.${firstChapter}.${part}`;
  });
  return withBookAndChapter.join('-');
}

export default bookMap;
