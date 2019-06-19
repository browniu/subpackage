# subpackage

> some methods of subpackgage

[![NPM](https://img.shields.io/npm/v/subpackage.svg)](https://www.npmjs.com/package/subpackage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 分包方式

### async

#### 引包方式
`import Handle from 'subpackage'`

#### 使用方式

```javascript
// App.js
<Handle type="1"/>
```

#### 处理机制

根据`props`传值，通过 `import()`动态引入相关的处理方式子组件

```javascript
// subpackage/index.js
import('./components/handle_' + this.props.type).then(Handle => {})
```

#### 加载状况

|逻辑代码|静态资源|
|-|-|
|未分离|异步加载|
|![code](static/async_code.png)|![code](static/async_img.png)|

### insider

#### 引包方式
`import {Handle1, Handle2} from 'subpackage'`

#### 使用方式

```javascript
// App.js
<Handle1/>
```

#### 处理机制

暴露为对象的方式

```javascript
// subpackage/index.js
import Handle1 from './components/handle_1'
import Handle2 from './components/handle_2'
import Handle3 from './components/handle_3'

export default {
  Handle1,
  Handle2,
  Handle3
}
```

#### 加载状况

|逻辑代码|静态资源|
|-|-|
|未分离|异步加载|


### insider

#### 引包方式
`import Handle from 'subpackage/dist/outsider/handle_1.js'`

#### 使用方式

```javascript
// App.js
<Handle/>
```

#### 处理机制

直接引入包内具体执行文件

#### 加载状况

|逻辑代码|静态资源|
|-|-|
|代码分离|异步加载|

## License

MIT © [browniu](https://github.com/browniu)
