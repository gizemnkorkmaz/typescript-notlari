---
sidebar_position: 4
---

# Implicit, Explicit ve Erased Types

TypeScript ile üç farklı şekilde tip belirleme yapabiliriz. Bunlar **implicit**, **explicit** ve **erased** tipleridir. 

Implicit anlamsal olarak örtülü/gizli olanı ifade ederken explicit özellikleri açıkça, manuel olarak eklenen durumları ifade eder.

#### Implicit Types

TypeScript ile ekstra bir type ataması yapmadan da değişkenler oluşturabiliyoruz. Bu değişkenlerin typeları atandığı değerlere göre belirlenir. Örneğin aşağıdaki `a` değişkeninin type'ı açıkça belirtilmemiş olsa dahi `number`, `b` değişkeninin ise `string`'dir.

```bash
let a = 10; 
let b = 'hello'; 
```

Implicit typing ile compiler bizim için otomatik kontrolleri yapacaktır:

```bash
let isTrue= true;  

isTrue= 10;

//$ error: Type '10' is not assignable to type 'boolean'
```

Bu kural `array` ve `object` değerleri için de geçerlidir:

```bash
let typescriptArr = [1,2]
typescriptArr = ['X','Y']

//$ error: Type 'string' is not assignable to type 'number'.
```

#### Explicit Types

Type annotation ile değişkenleri belirli typelarda olmaları konusunda sınırlandırabiliriz. Bu sayede TypeScript kodunuz hakkında daha az çıkarım yapacaktır.

```bash
let c: number = 10;
let d: string = 'hello';
```

TypeScript compiler bölümünda verdiğimiz greet fonksiyonu örneğini ele alalım. Fonksiyonu `person` parametresinin bir `string`, `date` parametresinin ise bir `Date` objesi olduğunu söyleyelim.

```bash
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", Date());

// Argument of type 'string' is not assignable to parameter of type 'Date'.
```
Böylece JavaScript ile `Date()` methodunun çağırdığımızda `string` dönüyor olduğunu, bunun yerine `new Date()` yapısını kullanmamız gerektiğini fark ederek hatayı düzeltmiş olacağız:

```bash
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());
```
💡 Her zaman explicit şekilde type annotation yapmak zorunda değiliz. TypeScript'in bunları bir şekilde "fark edebiliyor" olması planlanmış bir **feature**.

#### Erased Types

`greet` fonksiyonunun `tsc` ile alınan JavaScript çıktısına bir bakalım:

```bash
"use strict";
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
```

Burada dikkat etmemiz gereken iki şey var:

* `person` ve `date` parametrelerinin type annotationları artık yok.

* `template string` ile yazdığımız string değeri concat metotlarına dönüştürülmüş.

Burada dikkat etmemiz gereken nokta ilk madde. Aslında JavaScript içerisinde **type annotation** diye bir şey yok. Bu yüzden herhangi bir tarayıcı TypeScript kodunu alıp çalıştıramıyor. TypeScript comppiler'a da bu sebeple ihtiyacımız olduğundan bahsetmiştik. Yazdığımız TypeScript kodlarının silinmesinin sebebi de bu.

[Explicit Types - TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#explicit-types)

[Erased Types - TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#erased-types)