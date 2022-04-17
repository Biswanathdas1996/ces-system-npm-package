# ces-system

> Author: `Biswanath Das`

## Instalation

```sh
yarn add ces-system
```

## How to use

```sh
import { Encryption, Decryptions } from "ces-system";
```

For encryption

```sh
const text = "I love CES";
Encryption(text).then((encryptedText) => console.log(encryptedText));
```

> Note: Output would be `ZEh5c3BjcTJlMzEyNDNuMXFzc3Bjb0BWcE5nZzNkMw==` .

For decryption

```sh
const encryptedText = "ZEh5c3BjcTJlMzEyNDNuMXFzc3Bjb0BWcE5nZzNkMw=="
Decryptions(encryptedText).then((text) => console.log(text));
```

> Note: Output would be `I love CES`

## Sample code

```sh
import React, { useState } from "react";
import { Encryption, Decryptions } from "ces-system";

export default function EncryptionView() {
  const [text, setText] = useState(null);
  const [encryptedTextInput, setEncryptedTextInput] = useState(null);
  const [encriptedtext, setEncriptedtext] = useState(null);
  const [decryptedText, setDecryptedText] = useState(null);

  const postHandlerForEncryption = () => {
    Encryption(text).then((encryptedText) => setEncriptedtext(encryptedText));
  };

  const postHandlerForDecryption = () => {
    const decryptTextData = Decryptions(encryptedTextInput);
    setDecryptedText(decryptTextData);
  };

  return (
    <>
      <h1>For Encryption</h1>
      <h5>Encrypted text: {encriptedtext}</h5>
      <form>
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter your text here"
        />
        <button type="button" onClick={(event) => postHandlerForEncryption()}>
          Encrypt
        </button>
      </form>
      <br />
      <h1>For Dicryption</h1>
      <h5>Decrypted text: {decryptedText}</h5>
      <form>
        <input
          type="text"
          onChange={(event) => setEncryptedTextInput(event.target.value)}
          placeholder="Enter your text here"
        />
        <button type="button" onClick={(event) => postHandlerForDecryption()}>
          Decrypt
        </button>
      </form>
    </>
  );
}
```
