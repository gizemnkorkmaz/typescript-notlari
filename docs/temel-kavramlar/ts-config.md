---
sidebar_position: 3
---

# tsconfig.json

Yeni bir TypeScript projesi oluşturduktan sonra yapılacak ilk şey bir `tsconfig.json` dosyası oluşturmak olabilir. Bu **config** dosyası TypeScript'in hangi compiler seçeneklerini kulannacağını ya da hangi dosyaları dahil edeceği gibi ayarların belirlendiği dosyadır.

TypeScript'in resmi web sayfasında verilen örnek bir `tsconfig.json` dosyası:

```bash
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### noImplicitAny

TypeScript herhangi bir type belirleme çabasına girmediğinde kendini en güvende hissettiği type'ı sunar: `any`. Bu da aslında sıradan bir JavaScript kodundan başka bir şey değildir.

Ancak bu kullanım sıklıkla TypeScript'in doğasına aykırıdır. `noImplicitAny` flag'i ile bu durumun önüne geçebiliyoruz.

### TSConfig Bases

Hangi JavaScript environment'ında kodunuzu çalıştıracağınıza bağlı olarak temel konfigürasyonlar olabilir. Bu config dosyalarını [tsconfig/bases](https://github.com/tsconfig/bases/) reposundan inceleyebilirsiniz. Örneğin Node.js versiyonu 12 ya da üstü olsun gibi bir kontrolü sağlamak isterseniz mevcut `tsconfig.json` dosyanız şu şekilde gözükecektir. Böylece [@tsconfig/node12](https://www.npmjs.com/package/@tsconfig/node12) npm modülünü kullanabileceksiniz.

```bash
{
  "extends": "@tsconfig/node12/tsconfig.json",
  "compilerOptions": {
    "preserveConstEnums": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

#### Kaynaklar

[tsconfig.json - VS Code](https://code.visualstudio.com/docs/typescript/typescript-compiling#_tsconfigjson)

[What is a tsconfig.json - TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[tsconfig - JSON Schema Store](http://json.schemastore.org/tsconfig)