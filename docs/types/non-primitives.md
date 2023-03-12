---
sidebar_position: 2
---

# Non-primitives

JavaScript'te primitive değerler dışında kalan değerler birer `Object`tir. TypeScript ile verebileceğimiz bazı tipleri şu şekilde sıralayabiliriz.

## any

TypeScript'e özel bir tip olan `any` isminden de anlaşılacağı gibi herhangi bir tipleme vermek istemediğinizde kullanabileceğiniz bir değer. Herhangi bir anlam ifade etmese de TypeScript'i kurduğunuz yapıda herhangi bir sorun olmadığına ikna etmek için kullanabilirsiniz.

```bash
let obj: any = { x: 0 };

✅ obj.foo();
✅ obj();
✅ obj.bar = 100;
✅ obj = "hello";
✅ const n: number = obj;
```

## **Array**

TypeScript primitive ya da kullanıcı tarafından oluşturulmuş tüm array typelarını destekler. Köşeli parantez (`[]`) ile tanımlanan array tiplerinin elemanlarının tipleri küçüktür/büyüktür(`<type>`) işaretleri ile ifade edilir.

```bash
let myArray: number[] = [1, 2, 3];
let myArray: Array<number> = [1, 2, 3];
```

## **Tuple**

Tuple belirli bir sayıda elementin ve her bir elementin farklı tiplere sahip olabileceği bir array çeşididir. Tıpkı `array`ler gibi ifade edilebilirler.

```bash
let myTuple: [string, number] = ['hello', 123];
```

## **Enum**

Enum geliştiricilerin bir dizi isimlendirilmiş sabitler oluşturmalarını sağlar. Hem numerik hem string temelli enum yapıları oluşturabiliriz.

```bash
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

Yukarıda verilen örnekte `Up` değeri `1` olarak verilmiştir. Bu noktadan itibaren diğer değerler otomatik olarak artarak ilerleyecektir. Herhangi bir `initializer` vermeye gerek yok, doğrudan listeleme de yapabiliriz.

```bash
enum Color {
  Red,
  Green,
  Blue
};

let myColor: Color = Color.Red;
```

## **Union**

Union tipi bir değişkenin belirtilen herhangi bir tipte olabileceğini ifade eder. Bu tip `|` sembolü ile tanımlanır.

```bash
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK ✅
printId(101);
// OK ✅
printId("202");
// Error 🚨
printId({ myID: 22342 });
```

TypeScript union tiplerinin her ikisi için de geçerli olan işlemlere izin verir. Örneğin `string | number` ikilisini verdiyseniz sadece `string` için geçerli olan metotları kullanamazsınız.

```bash
function printId(id: number | string) {
  console.log(id.toUpperCase());
🚨 Property 'toUpperCase' does not exist on type 'string | number'.
 🚨 Property 'toUpperCase' does not exist on type 'number'.
}
```

## **Intersection**

Intersection bir değişkenin farklı tiplerde property ve metotları olduğunu ifade eder. Bu tip `&` sembolü ile tanımlanır.

```bash
interface A {
  a: number;
}

interface B {
  b: string;
}

type C = A & B;

let myObj: C = { a: 123, b: 'hello' };
```

## **Function**

Fonksiyonlar JavaScript'te veriyi iletmenin temel araçlarından biridir. TypeScript, bu fonksiyonların hem input hem de output değerlerinin tiplerini belirlemenizi sağlar.

Parametre type annotationlar, parametre isminden hemen sonra gelir:

```bash
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```
Return type annotationları ise parametre listesinden hemen sonra gelir:

```bash
function getFavoriteNumber(): number {
  return 26;
}
```

Tıpkı değişken type annotationları gibi return tiplemelerini de vermemiz gerekmiyor çünkü TypeScript `return` değerine göre bunu kendisi çıkaracaktır. Yukarıda verilen tipleme herhangi bir şeyi değiştirmiyor. Ancak bazı codebase'lerde dokümante edilmesi açısından bilinçli şekilde açıkça return tiplemelerini veriyor olabilirler.

Anonim fonksiyonlar biraz farklı. TypeScript'in nasıl çağırılacağını belirlediği şekilde oluşturulan fonksiyonlarda parametreler otomatik olarak tiplenecektir:

```bash
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
 
names.forEach(function (s) {
  console.log(s.toUppercase());

🚨 Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

names.forEach((s) => {
  console.log(s.toUppercase());

🚨 Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```
`s` parametresinin herhangi bir tip değeri olmamasına rağmen TypeScript array'in tipine göre `s`'in alacağı değeri belirleyebildi. Buna **contextual typing** adı veriliyor çünkü fonksiyonun gerçekleştiği *context* hangi tipleri alması gerektiğini belirliyor.

## Object

Primitive tipler dışında en çok karşılaşacağınız tip `object`. JavaScript'te propertyleri olan bir değer anlamına gelen bu tipi tanımlamak için propertylerin listeleyip onlara tip atamaları yapmamız gerekiyor.

```bash
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
```

Bazı propertylerin **optional** olduklarını belirtmek için property isminin ardından `?` ekleyebilirsiniz.

```bash
function printName(obj: { first: string; last?: string }) {
  // ...
}

✅ printName({ first: "Bob" });
✅ printName({ first: "Alice", last: "Alisson" });
```

## Type

`Object` ve `Union` tiplerini doğrudan type annotationlarını vererek yazıyoruz. Bunda herhangi bir sorun yok ancak aynı tipi birden fazla aynı isimle kullanmak isteyebiliriz. `Type` isimlendirmesi tam da bu işe yarıyor. Herhangi bir *tip*e verilen bir *isim*.

```bash
type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

Type isimlendirmesini herhangi bir tipleme için kullanabilirsiniz:

```bash
type ID = number | string;
```

## Interface

Interface `object` isimlendirmenin başka bir yoludur.

```bash
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

Bu örnek de tıpkı `type` isimlendirmesi gibi çalışacaktır. TypeScript için önemli olan sadece `printCoord` için verilen değerin yapısıdır. Tek ilgilendiği istenilen propertyleri sağlamış olmasıdır. Bu yüzden de TypeScript'e **structurally typed** tip sistemi denilmektedir.

### Kaynaklar

[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

