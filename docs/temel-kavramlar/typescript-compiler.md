---
sidebar_position: 2
---

# TypeScript Compiler

Artık tip kontrolünün neden yapıldığını biliyoruz, şimdi sıra bu kontrolü yapan type-checker'ı tanımaya geldi. `TypeScript compiler` ya da kısa adıyla `tsc` nedir ve nasıl çalışır bakmadan önce daha temelden **compiler** nedir sorusu ile başlayalım.

## Compiler nedir?

Compiler high-level bir programlama dili ile yazılmış kaynak kodunu alıp bilgisayarların çalıştırabileceği makina koduna çeviren bir program ya da araçtır. Compiling süreçleri lexical analysis, syntax analysis, semantic analysis, code optimization ve code generation gibi çeşitli adımlardan oluşur.

## TypeScript compiler, tsc

TypeScript compiler ise TypeScript kodunu tarayıcıların ya da diğer JavaScript runtime environmentlarının anlayabileceği JavaScript koduna çeviren araçtır. TypeScript compiler type kontrollerini yapmaktan, debugging için gereken source mapleri oluşturmaktan ve decorators, async/await syntaxleri gibi diğer üst seviye özellikleri sağlamaktan sorumludur. TypeScript compiler'ı kullanmak için npm gibi bir paket yöneticisi aracılığı ile bir paket yüklemeniz gerekiyor. Bu paket yüklendikten sonra compiler'ı build aşamasının bir parçası olarak TypeScript dosyalarını derlemek için kullanabilirsiniz.

```bash
npm install -g typescript
```

Bu komut TypeScript compiler'ı (`tsc`) global olarak yükler. Lokal `node_modules` paketine yüklemek istiyorsanız `npx` ya da benzeri bir aracı kullanabilirsiniz.

Yüklemenin gerçekleştiğini ya da hali hazırda hangi versiyonu kullandığınızı kontrol etmek isterseniz şu komutları kullanabilirsiniz:

```bash
tsc --version
tsc --help
```

### İlk deneme

`hello.ts` adında bir dosyanız olduğunu düşünelim. İçerisinde `person` ve `date` parametrelerini alan bir `greet` fonksiyonu olsun ve bu fonksiyonu sadece name argümanı ile çağıralım.

![greet function](./img/greet-function.png)

`tsc hello.ts` komutu ile TypeScript compiler'ı çalıştırdığımızda ilk fark edeceğimiz şey output olarak içinde bulunduğumuz directory'de `hello.js` adında yeni bir dosya olacak. Bu `hello.ts` dosyasının `tsc` komutundan sonra  oluşturduğu bir JavaScript dosyası. Bu dosyanın dışında bir de command line'da şöyle bir hata ile karşılaşacağız:

**`Expected 2 arguments, but got 1.`**

Bir önceki bölümde de bahsettiğimiz gibi TypeScript bize geliştirme esnasındaki eksiklikleri görünür hale getirdi. Ancak her tür hata geliştirmede çözülmesi zorunlu kılınmıyor. Burada TypeScript gün sonunda geliştiricinin sürece daha hakim olduğunu varsayarak bazı hataları görmezden gelebiliyor. Bu noktada daha katı kuralları tercih ediyorsanız `noEmitOnError` gibi compiler seçeneklerini kullanabilirsiniz. Bu flag ile beraber aynı dosyayı yeniden çalıştırmayı deneyin:

```bash
tsc --noEmitOnError hello.ts
```

`hello.js` dosyasının güncellenmediğini fark edeceksiniz.

#### Kaynaklar
[Compiler - Wikipedia](https://en.wikipedia.org/wiki/Compiler)

[tsc, the TypeScript compiler - TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler)

[Compiling TypeScript - VS Code](https://code.visualstudio.com/docs/typescript/typescript-compiling)