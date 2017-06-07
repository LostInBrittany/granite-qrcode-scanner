[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LostInBrittany/granite-qrcode-scanner)

# granite-qrcode-scanner

> A webcomponent to scan a QR Codes,
> using [a modified version](https://github.com/LostInBrittany/jsqrcode) of [Lazersoft's jsqrcode](https://github.com/LazerSoft/jsqrcode) library, to allow `jsqrcode` to deal with ShadowDOM
>
> Hybrid Polymer element, 1.x-2.x ready


## Doc & demo

[https://lostinbrittany.github.io/granite-qrcode-scanner](https://lostinbrittany.github.io/granite-qrcode-scanner)


## Usage example

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="granite-qrcode-scanner.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<granite-qrcode-scanner data="{{data}}" active continuous></granite-qrcode-scanner>
```

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install LostInBrittany/granite-qrcode-scanner --save
```

Or [download as ZIP](https://github.com/LostInBrittany/granite-qrcode-scanner/archive/gh-pages.zip).## Usage

1. Import Web Components' polyfill (if needed):

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/granite-qrcode-scanner/granite-qrcode-scanner.html">
    ```

3. Start using it!

    ```html
    <granite-qrcode-scanner>
    </granite-qrcode-scanner>
    ```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
