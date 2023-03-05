---
sidebar_position: 3
---

# Type vs. Interface

`Type` isimlendirmesi ve `Interface` birbirlerine oldukça benzerler. Çoğu durumda birini diğeri yerinde kullanabilirsiniz, `Interface`'in sunduğu tüm özellikler `type` için de geçerlidir. Aralarındaki en büyük fark `type`'ın yeni propertyler için yeniden açılamayacağı ancak `interface`'in her zaman _extendable_ olmasıdır.

* **Interface**'i extend edebiliyoruz:

```bash
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
```

* **Intersection** ile type'ı extend edebiliyoruz:

```bash
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
```
* Var olan **Interface**'e yeni alanlar ekleyebiliyoruz:

```bash
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

* **Type**'ı oluşturulduktan sonra değiştiremiyoruz:


```bash
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'. 🚨

```

Bu iki tip hakkında daha detaylı notlar olacak ama TS handbook'a göre `type`'a ihtiyacınız olana kadar `interface` kullanabilirsiniz.

#### Kaynaklar

[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

[Interfaces vs. Types in Typescript - devgenius.io](https://blog.devgenius.io/interfaces-vs-types-in-typescript-7567ffe390cd)