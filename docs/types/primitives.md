---
sidebar_position: 1
---

# Primitives

JavaScript ekosisteminde primitive değerler aslında object olmayan değerleri, yani herhangi bir method'u ya da property'si olmayan değerleri ifade eder. Toplamda 7 primitive data tipi bulunur:
* [string](https://developer.mozilla.org/en-US/docs/Glossary/String)

* [number](https://developer.mozilla.org/en-US/docs/Glossary/Number)

* [bigint](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)

* [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)

* [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)

* [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

* [null](https://developer.mozilla.org/en-US/docs/Glossary/Null)

`string`, `number` ve `boolean` tipleri en sık kullanılan primitivelerdir. Her ne kadar büyük harfle başlayan kullanımları da geçerli olsa da tiplemeler için TypeScript resmi handbook'unda küçük harfle kullanmamız tavsiye ediliyor.  

```bash
let isTrue: boolean = true;
let binary: number = 0b1010;
let fullName: string = `${firstName} ${lastName}`;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let symbol1 = Symbol("key");
```

#


#### Kaynaklar
[Primitive - MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

[The Primitives - TypeScript Handbook](https://developer.mozilla.org/en-US/docs/Glossary/Null)