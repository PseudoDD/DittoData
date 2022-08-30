const randomNumFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateBank = () => {
  const banks = [
    'JPMorgan Chase',
    'Bank of America',
    'Wells Fargo',
    'Citigroup',
    'Capital One',
    'American Express',
  ];

  let random = Math.floor(Math.random() * banks.length);
  return banks[random];
};

const generateDate = () => {
  const month = String(Math.ceil(Math.random() * 12));
  const date = String(Math.ceil(Math.random() * 28));
  const yearList = [2020, 2021, 2022];
  const year = String(yearList[Math.floor(Math.random() * yearList.length)]);

  return month + '/' + date + '/' + year;
};

const generateCcNum = () => {
  const firstNum = String(randomNumFromInterval(3, 6));
  const randomEnd = String(
    randomNumFromInterval(111111111111111, 999999999999999)
  );

  return firstNum.concat(randomEnd);
};

const generateString = (minLength, maxLength, lettersOnly) => {
  let length = randomNumFromInterval(minLength, maxLength);
  let str = '';

  //prettier-ignore
  const letters = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const allChars = letters.concat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  while (length > 0) {
    if (lettersOnly)
      str += String(letters[Math.floor(Math.random() * letters.length)]);
    else str += String(allChars[Math.floor(Math.random() * allChars.length)]);

    length--;
  }

  return str;
};

const generateEmail = () => {
  const emailOptions = [
    '@gmail.com',
    '@outlook.com',
    '@yahoo.com',
    '@hotmail.com',
  ];
  const email = String(
    emailOptions[Math.floor(Math.random() * emailOptions.length)]
  );
  return generateString(8, 12, false) + email;
};

const generateName = () => {
  let name = generateString(3, 7, true);
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const generateDummyDataOnce = (obj) => {
  let valuesAsArray = Object.entries(obj);
  let result = {};

  for (const [value, type] of valuesAsArray) {
    let newVal;
    if (type === 'name') {
      newVal = generateName();
    } else if (type === 'email') {
      newVal = generateEmail();
    } else if (type === 'cc_num') {
      newVal = generateCcNum();
    } else if (type === 'date') {
      newVal = generateDate();
    } else if (type === 'bank') {
      newVal = generateBank();
    }
    result[value] = newVal;
  }

  return result;
};

const generateDummyData = (obj, arraySize) => {
  let result = [];
  while (arraySize > 0) {
    result.push(generateDummyDataOnce(obj));
    arraySize--;
  }
  return result;
};

module.exports = { generateDummyData };
