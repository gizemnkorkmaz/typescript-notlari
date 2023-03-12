---
sidebar_position: 1
---

# Type Narrowing

`Narrowing` adından da anlaşılacağı üzere tiplerin daha açıklayıcı ve kesin olmasını sağlayan bir yöntemdir ve yazılan kodlarda hata yapma olasılığını düşürür. Örneğin `string | number` gibi bir union type kullanıyorsanız, her iki durumu da kontrol altına alabilmek adına **narrowing**'e ihtiyaç duyacaksınız demektir.

Bir union tipini tek tipe düşürmek istiyorsak her iki durumu ele almamız gerekir. Bunu da konu JavaScript olunca akıllara gelen ilk seçenekler olan `if/else` ya da `switch` statementları ile halledebiliriz.

TypeScript handbook'ta verilen örneğe bir bakalım. `padLeft` adında bir fonksiyonumuz var:

```bash
function padLeft(padding: number | string, input: string): string {
  throw new Error("Not implemented yet!");
}
```

`padding` bir sayı ise `input`'un önüne ekleyeceğimiz boşluk sayısını verecek ancak `padding` bir `string` değerinde ise doğrudan `padding`'i `input`'un önüne ekleyecek. Şimdi `padding`'e bir sayı vermeyi deneyelim:

```bash
function padLeft(padding: number | string, input: string) {
  return " ".repeat(padding) + input;

 🚨 Argument of type 'string | number' is not assignable to parameter of type 'number'.
  Type 'string' is not assignable to type 'number'.
}
```

TypeScript `padding` için açıkça bir `number` değeri kullanacağımızı ona belirtmediğimiz ya da `string` olma durumunda ne yapacağını söylemediğimiz için bizi uyarıyor.

```bash
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

Bunun doğrudan JavaScript kodu olduğunu düşünebilirsiniz ancak aslında amaç da tam olarak bu. TypeScript'in amacı sıradan JavaScript kodlarını yazmayı kolaylaştırmak. Üstelik burada göründüğünden de fazlası var. TypeScript statik tipleri kullanarak runtime değerlerini kontrol ettiği gibi tipleri etkileyebilecek **if/else, conditional ternaryler, looplar, truthiness kontrolleri** gibi JavaScript'in runtime kontrol akışı yapıları üzerinde bir analiz sağlar.

Kullandığımız `if` kontrolünde TypeScript `typeof padding === "number"`'ı görür ve bunun **type guard** adında özel bir tür kod yapısı olduğunu anlar. Programımızın olası tüm çalışma yollarını takip ederek bir değerin belirli bir konumda en spesifik tipini analiz etmeye çalışır. Kısacısı bu özel kontrollere (type guards) bakar ve değerlerin tanımlandıklarından daha spesifik tiplere daraltılmasına da **narrowing** denir.

#### Kaynaklar 
[Narrowing Types - Formidable](https://formidable.com/blog/2022/narrowing-types/)

[Type Narrowing Cheatsheet - Codecademy](https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-type-narrowing/cheatsheet)

[Type Guards - TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)

[How to use type guards in TypeScript - logrocket.com](https://blog.logrocket.com/how-to-use-type-guards-typescript/)