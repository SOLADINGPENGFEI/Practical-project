ES6 
1. let与var的区别：let所声明的变量,只在let命令所在的代码块内有效，暂时性死区；var所声明的变量在全局下都有效，可以声明提升
2. 用ES5原生实现let声明的变量 利用函数的作用域 通过闭包函数实现；实现const声明的变量 使用defineProperty下的属性描述符来实现： ## writable/configurable/enumerable/value/get/set ##
        writable,是否可写
        Object.defineProperty(obj,'a', {
            writable: false
        })
        configurable,是否可删除
        Object.defineProperty(obj,'a',{
            configurable: false
        })
        是否可被枚举
        Object.defineProperty(obj,'a',{
            enumerable: true
        })
        value 赋值
        Object.defineProperty(obj,'a',{
            value: 100
        })
        get&set
        Object.defineProperty(obj,'a',{
            get(){
                return 'abc'
            },
            set(val){
                console.log('val...',val)
            }
        }) 
3. proxy VUE3.0版本 不兼容IE浏览器 放弃使用了 Object.defineProperty，而选择了使用更快的原生 Proxy
Proxy对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）
ES6 原生提供的 Proxy 语法很简单，用法如下：
let proxy = new Proxy(target, handler);
参数 target 是用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）, 参数 handler 也是一个对象，其属性是当执行一个操作时定义代理的行为的函数，也就是自定义的行为。
4. Promise
    Promise,async/await,generator
    Promise的三种状态: pending, fulfilled, rejected
    Promise的两个静态方法: resolve, reject
    Promise的两个控制时序的方法：all、race
5. 深浅拷贝  数组：[...arr]、concat()、slice()  对象：拓展运算符({...obj})、object.assign   JSON.parse(JOSN.stringify(str))