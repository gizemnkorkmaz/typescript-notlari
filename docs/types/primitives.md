---
sidebar_position: 1
---

# Primitives

JavaScript ekosisteminde primitive değerler aslında object olmayan değerleri, yani herhangi bir method'u ya da property'si olmayan değerleri ifade eder. Toplamda 7 [immutable](https://developer.mozilla.org/en-US/docs/Glossary/Immutable) primitive data tipi bulunur:
* [string](https://developer.mozilla.org/en-US/docs/Glossary/String)

```bash
let fullName: string = `${firstName} ${lastName}`;
```

* [number](https://developer.mozilla.org/en-US/docs/Glossary/Number)

```bash
let binary: number = 0b1010;
```

* [bigint](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)

```bash
let bigNumber: bigint = 9007199254740991n;
```

* [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)

```bash
let isTrue: boolean = true;
```

* [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)

```bash
let undefinedValue: undefined = undefined;
```

* [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

```bash
let symbol1 = Symbol("key");
let symbol2 = Symbol("key");

console.log(symbol1 === symbol2); // false 
```

* [null](https://developer.mozilla.org/en-US/docs/Glossary/Null)

```bash
let nullValue: null = null;
```


`string`, `number` ve `boolean` tipleri en sık kullanılan primitivelerdir. Her ne kadar büyük harfle başlayan kullanımları da geçerli olsa da tiplemeler için TypeScript resmi handbook'unda küçük harfle kullanmamız tavsiye ediliyor.  

#### Kaynaklar
[Primitive - MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

[The Primitives - TypeScript Handbook](https://developer.mozilla.org/en-US/docs/Glossary/Null)