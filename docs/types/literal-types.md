---
sidebar_position: 5
---

# Literal Types

Genel tiplerin yanı sıra doğrudan kendi `string` ve `number` değişkenlerimizle de tipler oluşturabiliriz. Tıpkı JavaScript'in `var` ve `let` ile tanımlanmış değişkenlerinin değişebildiği ancak `const` ile tanımlanan değişkenlerin değişmemesi gibi TypeScript'te de değişmeyecek tipler oluşturabiliriz.

```bash
let x: "hello" = "hello";

✅ // OK
x = "hello";

x = "howdy";
🚨 Type '"howdy"' is not assignable to type '"hello"'.
```

Tek başına bir tip oluşturmanın bize pek bir faydası yok gibi. Ancak bu `literal` tipleri birer `union` tipe dönüştürdüğünüzü düşünün: 

```bash
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

🚨 Argument of type '"centre"' is not assignable 
to parameter of type '"left" | "right" | "center"'.
```

Bu yapıyı literal olmayan tiplerle beraber de kullanabiliriz:

```bash
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");

🚨 Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
```

#### Kaynaklar
[Literal Types - Deepdive TypeScript](https://basarat.gitbook.io/typescript/type-system/literal-types)

[Literal Types - TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)