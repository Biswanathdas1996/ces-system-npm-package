import { getKeyValue, encryptionValue } from "./data/HelperData";
import getAllKeys from "./data/keys";

export function Encryption(inputdata, key) {
  const encryptions = new Promise((resolve, reject) => {
    let filterKey;
    if (!key) {
      filterKey = getAllKeys[Math.floor(Math.random() * getAllKeys.length)];
    } else {
      filterKey = key;
    }

    // Split the string
    const splitSrt = inputdata.split("");
    const finalencpt = [];
    // Itrate through every element that generated by user input
    const keyValue = getKeyValue(filterKey);
    splitSrt.map((val) => {
      for (let j = 0; j < encryptionValue.length; j++) {
        if (val === encryptionValue[j]) {
          let x;
          x = keyValue[j];
          finalencpt.push(x);
        }
      }
    });
    //pushing the lenth for identification key
    finalencpt.push(filterKey["length"]);
    const encrypted = finalencpt.join("");
    resolve(encrypted);
  });
  return encryptions;
}

export function Decryptions(inputdata, key) {
  const encryptedText = inputdata;
  const encriptLength = encryptedText.slice(-1);
  // filter key with active ones
  let filterKey;
  if (!key) {
    filterKey = getAllKeys.find((value) => value.length === encriptLength);
  } else {
    filterKey = key;
  }

  // Split the encrypted string with length
  const splitSrt = encryptedText.match(
    new RegExp(".{1," + encriptLength + "}", "g")
  );
  // remove last element of the array
  splitSrt.pop();
  // set coresponding value
  const keyValue = getKeyValue(filterKey);
  const finalDecrypt = [];
  // Itrate through every element that generated by user input
  splitSrt.map((val, index) => {
    for (let j = 0; j < keyValue.length; j++) {
      if (val === keyValue[j]) {
        let x;
        x = encryptionValue[j];
        finalDecrypt.push(x);
      }
    }
  });
  const decryptedData = finalDecrypt.join("");
  return decryptedData;
}
