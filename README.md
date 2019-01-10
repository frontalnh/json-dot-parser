# json-dot-parser

Converts json object whick has key with dot notation to plain json object

## Install

`npm install @frontalnh/json-dot-parser`

## Usage

```js
import { removeDotInJson } from '@frontalnh/json-dot-parser';

let data = {
  a: 'a',
  b: 'b',
  'c.a': 'a',
  'c.b': 'b'
};

let result = removeDotInJson(data);
console.log(result); // {a:"a",b:"b",c:{a:"a",b:"b"}}

// or

Object.assign(data, removeDotInJson(data));

console.log(data); // {a:"a",b:"b",c:{a:"a",b:"b"}}
```
