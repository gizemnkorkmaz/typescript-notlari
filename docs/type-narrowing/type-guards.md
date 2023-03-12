---
sidebar_position: 2
---

# Type Guards

Type Guardlar bir conditional blok ile objelerinizin tiplerini daraltmanızı sağlarlar.

## typeof 

Runtime'da değerlerimizin hangi tipte olduğu temel bilgisini bize veren `typeof` operatöründen bahsetmiştik. TypeScript bu operatörün "string", "number", "bigint", "boolean", "symbol", "undefined", "object" ya da "function" `string` değerlerinden birini dönmesini bekler.

Bu `typeof` değerini kontrol etmek bir tür **type guard**'dır. Çünkü TypeScript farklı değerlerde `typeof`'un nasıl çalıştığını bilir. Aşağıdaki örnekte `typeof`'un nasıl `null` string değerine dönmediğine bir bakalım:

```bash
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
 🚨 Object is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
```

JavaScript'te `array`ler birer `object` olduğu için örnek fonksiyonda `strs` değerinin bir `object` olup olmadığını kontrol ediyoruz. Ancak maalesef ki JavaScript dünyasında `null` değeri de aslında bir `object` data tipi. Böylece TypeScript bize `strs` değerinin sadece `string[]`'e değil `string[] | null` tiplerine kadar daralttığını bildiriyor.

#### Kaynaklar

[TypeScript Handbook - Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

[basarat.gitbook - typeguard](https://basarat.gitbook.io/typescript/type-system/typeguard)