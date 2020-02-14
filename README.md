## &lt;img-magick&gt;

A [Web Component](https://www.webcomponents.org/) that gives you the power of [WASM-ImageMagick](https://github.com/KnicKnic/WASM-ImageMagick) with the ease of use of the ```<img>``` tag.

[Live Demo](https://f0urfingeredfish.github.io/img-magick/) Edit the attributes with your dev tools to see live updates!
<!-- Remix Button -->
<a href="https://glitch.com/edit/?utm_content=project_f0urfingeredfish-img-magick-examples&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/f0urfingeredfish-img-magick-examples">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix this" height="33">
</a>

### Install
```
npm i img-magick
```

### Usage
In a Javascript module
```js
import 'img-magick';
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
Results:
![image](https://user-images.githubusercontent.com/399068/73820158-5853f400-47ae-11ea-980e-62a94b30c801.png)

### Attributes

|Attributes|Description|Default|
|---|---|---|
|`cmd`|Any [ImageMagick command](https://imagemagick.org/script/convert.php)| "" |
|`src`|Image URL| "" |
|`showLoader`|Show the loading spinner when processing| false |
|`loaderColor`|Color of the loading indicator| #606060 |
|`loaderSize`|Size of the loader| 25px |

Example with custom loading indicator:
```html
 <img-magick src="./test.png" cmd="convert * -paint 3 -set filename:mysize %t" showLoader loaderSize="100px" loaderColor="red"></img-magick>
```

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

