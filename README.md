## &lt;img-magick&gt;

A [Webcomponent](https://www.webcomponents.org/) that gives you the power of [WASM-ImageMagick](https://github.com/KnicKnic/WASM-ImageMagick) with the ease of use of the ```<img>``` tag.

[Demo](https://f0urfingeredfish.github.io/img-magick/example.html)

### Run example
```
npm install -g polymer-cli
npm install
polymer serve
```

### Attributes
```cmd``` Any [ImageMagick command](https://imagemagick.org/script/convert.php)

```src``` Image URL
### Usage
```html
 <img-magick src="./test.png" cmd="convert * -paint 3 -set filename:mysize %t"></img-magick>
```
