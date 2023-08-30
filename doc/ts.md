### 关键字-函数

```ts

const str: string = "Hello world"
const abj = {attr: 1, attr2: '1'}
const fn = (arg1: number, arg2: string) => arg2
const fn2 = () => ({attr: 1, attr2: '1'})

// keyof
type IParent = {
    name: string
    age: number
}
type Test = keyof IParent  // type Test = 'name' | 'age'

// typeof
type Test = typeof str // type Test = string
type Test = typeof fn // type Test = (arg1: string, arg2: number) => number
type Test = typeof abj // type Test = { attr: number; attr2: string }

// ReturnType
type Test = ReturnType<typeof fn> // type Test =  number
type Test = ReturnType<typeof fn2> // type Test =  { attr: number; attr2: string }

// Parameters
type Test = Parameters<typeof fn> // type Test =  [arg1: number, arg2: string]
type GetType<T> = T extends (arg: infer P) => void ? P : string;

// Partial
type Test = Partial<typeof abj> // type Test = { attr?: number; attr2?: string }

// Record
type Test = Record<'one' | 'two', number> // type Test = { one: number; two: number }

// Pick
type Test = Pick<typeof abj, 'two'> // type Test = { two: string }

// Omit
type Test = Pick<typeof abj, 'two'> // type Test = { one: number }

// 大小写
type Test = Uppercase<Greeting> // type Test = "HELLO WORLD"
type Test = Lowercase<Greeting> // type Test = "hello world"
type Test = Capitalize<Greeting> // type Test = "Hello World"
type Test = Capitalize<Greeting> // type Test = "Hello World"


// 获取属性值的类型
type Test = IParent['name'] // type = string 
type Test = IParent[keyof IParent] // type = string | number
// 判断
type Test<T extends string | number> = T extends number ? IAge : IName
// 迭代
type list = 'x' | 'y';
type Test = `${list}_two` // type Test = 'x_two' | 'y_two'


```

### 定义

```ts
// 函数和构造函数
type GreetFunction = (a: string) => void;
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
type SomeConstructor = {
  new(s: string): SomeObject;
};

// 对象
type Person<T> = {
  [key in keyof T]: boolean
}
type Person<T> = {
  [key in keyof T]: T[key]
}
type PersonAs<T> = {
  [key in keyof T as `get${key}`]: T[key]
}


```

### 关键词

- d.ts 中用 declare 声明全局声明

```ts
// 声明全局属性，多处声明同一个类型是累加的
declare let $: JQuery;
declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }

  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}
```



