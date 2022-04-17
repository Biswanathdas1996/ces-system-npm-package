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

## Advance module

Passing pre-defined logic (key) for encryption and decryption

For encryption

```sh
const text = "I love CES";
Encryption(text, key).then((encryptedText) => console.log(encryptedText));
```

> Note: Output would be `ZEh5c3BjcTJlMzEyNDNuMXFzc3Bjb0BWcE5nZzNkMw==` .

For decryption

```sh
const encryptedText = "ZEh5c3BjcTJlMzEyNDNuMXFzc3Bjb0BWcE5nZzNkMw=="
Decryptions(encryptedText, key).then((text) => console.log(text));
```

> Note: Output would be `I love CES`

## Format of key

key is an object
you can change the each item of the key in order to customize your encryption rule.

> Ipmortant : `All value must be unique and same length` , `specify the "length" value`
> For example: if you set `V1: "rtyu"` then the value of `length: "4"`

```sh
const key = {
  v1: "fr6",
  v2: "fg6",
  v3: "mlp",
  v4: "7ii",
  v5: "klo",
  v6: "6y8",
  v7: "caq",
  v8: "432",
  v9: "glp",
  v0: "a23",
  A: "sZF",
  B: "X@n",
  C: "o@V",
  D: "QlX",
  E: "pNg",
  F: "Hrh",
  G: "@gg",
  H: "@pk",
  I: "dHy",
  J: "fgh",
  K: "45g",
  L: "4@k",
  M: "dke",
  N: "Ygg",
  O: "1d4",
  P: "4th",
  Q: "4r6",
  R: "fgy",
  S: "g3d",
  T: "q24",
  U: "3rl",
  V: "ap0",
  W: "a40",
  X: "fep",
  Y: "dpp",
  Z: "eNd",
  sa: "dfg",
  sb: "vcz",
  sc: "qqq",
  sd: "uuu",
  se: "1qs",
  sf: "jnu",
  sg: "670",
  sh: "wow",
  si: "hbb",
  sj: "vZC",
  sk: "x23",
  sl: "q2e",
  sm: "11p",
  sn: "4rr",
  so: "312",
  sp: "234",
  sq: "fca",
  sr: "412",
  ss: "242",
  st: "xc4",
  su: "452",
  sv: "43n",
  sw: "Vf2",
  sx: "r2r",
  sy: "vew",
  sz: "324",
  tilt: "aLs",
  vnot: "etp",
  adarate: "vAt",
  doller: "Do4",
  up: "vrt",
  vand: "An5",
  vstar: "Sly",
  backetopen1st: "bbC",
  backetclose1st: "BD1",
  minius: "my1",
  plus: "cp1",
  equals: "eq1",
  slash: "vs1",
  dot: "js1",
  comma: "vc1",
  question: "a01",
  colone: "VC1",
  semicolone: "L41",
  singleinvarted: "L42",
  doubleinvarted: "q0k",
  lessthan: "q0k",
  graterthan: "q0k",
  us: "a8D",
  hash: "y7u",
  percent: "rp0",
  space: "spc",
  length: "3",
};
```
