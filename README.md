## &lt;img-magick&gt;

A [Webcomponent](https://www.webcomponents.org/) that gives you the power of [WASM-ImageMagick](https://github.com/KnicKnic/WASM-ImageMagick) with the ease of use of the ```<img>``` tag.

[Demo](https://f0urfingeredfish.github.io/img-magick/)

### Install
```
npm i img-magick
```

### Usage
In a Javascript module
```js
import 'some-package-name';
```

In html page:
```html
<script type="module" src="https://unpkg.com/img-magick/dist/img-magick.umd.js"></script>
```
or
```html
<script type="module" src="path/to/bundled/img-magick.js"></script>
```

Add component to appliction or page:
```html
 <img-magick src="./test.png" cmd="convert * -paint 3 -set filename:mysize %t"></img-magick>
```

### Attributes

|Attributes|Description|
|---|---|
|`cmd`|Any [ImageMagick command](https://imagemagick.org/script/convert.php)|
|`src`|Image URL|


## For development

### Run polymer server
```
npm install -g polymer-cli && npm install && polymer serve
```
### Start dev server
```
npm run dev
```
Goto http://127.0.0.1:8081/components/img-magick/dev.html

