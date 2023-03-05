---
sidebar_position: 4
---

# Type Assertions

Bazen TypeScript compiler'ını verdiğimiz değer tiplerini ondan daha iyi bildiğimizi ikna etmemiz gerekebilir. Olası bir tiplemenin önüne geçerek daha doğru bir tip oluşturabiliriz. Örneğin `document.getElementById` yazdığınızda TypeScript bunun bi çeşit `HTMLElement` olduğunu tahmin edecektir ancak siz sayfanızda her zaman ID'si olan bir `HTMLCanvasElement`'i olacağını biliyorsunuzdur.

Bu tür durumlarda daha spesifik bir tip belirlemek amacıyla `type assertion` kullanabilirsiniz.

```bash
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

Kodunuz bir `.tsx` dosyası içerisinde değilse bu yapıyı küçüktür/büyüktür işaretleri ile de kullanabilirsiniz (.tsx dosyalarında bu kullanım componentlar ile karışabiliyor):

```bash
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

Bir **any** değerinden **number** değerine gibi başka bir tipe geçişlerde de `type assertion`'ı kullanırız. Ancak TypeScript sadece daha az ya da daha spesifik tiplere dönüşümlerde buna izin verir. Bu kural sayesinde **mümkün olmayan** coercionlara müsaade etmemiş olur:

```bash
const x = "hello" as number;

🚨 Conversion of type 'string' to type 'number' may be a mistake 
because neither type sufficiently overlaps with the other. 
If this was intentional, convert the expression to 'unknown' first.
```

Ancak bazen bu kural olması gerektiğinden daha kısıtlayıcı olur. Bu tür durumlarda iki **assertion**'ı art arda kullanabilirsiniz. Böylece ilk adımda `any` (ya da `unknown`) tipine geçer, ikinci adında ise istediğiniz tipi kullanabilirsiniz: 

```bash
const a = (expr as any) as T;
```

**Type annotation**larda olduğu gibi **type assertion**lar da compiler tarafından silinecektir ve kodunuzun runtime'daki davranışını etkilemeyecektir.

#### Kaynaklar
[Type Assertions - TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

[Explain Type Assertions in TypeScript - Geeks for Geeks](https://www.geeksforgeeks.org/explain-type-assertions-in-typescript/)

[Type Aliases ve Type Assertion - Medium](https://medium.com/kodcular/typescript-type-aliases-ve-type-assertion-b0819c47da4a)