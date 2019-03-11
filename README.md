[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LostInBrittany/granite-qrcode-scanner)

# granite-qrcode-scanner

> A webcomponent to scan a QR Codes,
> using [a modified version](https://github.com/LostInBrittany/jsqrcode) of [Lazersoft's jsqrcode](https://github.com/LazerSoft/jsqrcode) library, to allow `jsqrcode` to deal with ShadowDOM
>
>
> Built on [lit-element](https://github.com/Polymer/lit-element)
>
> The old Polymer 2.x-1.x version is available on the [`polymer-hybrid` branch](https://github.com/LostInBrittany/granite-qrcode-decoder/tree/polymer-hybrid).

## Doc & demo

[https://lostinbrittany.github.io/granite-qrcode-scanner](https://lostinbrittany.github.io/granite-qrcode-scanner)


## Usage example

<!--
```
<custom-element-demo>
  <template>
    <script src="@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
    <script src="@granite-elements/granite-qrcode-decoder/granite-qrcode-scanner.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<granite-qrcode-scanner active continuous></granite-qrcode-scanner>
```

## Install



Install the component using [npm](https://www.npmjs.com/):

```sh
$ npm i @granite-elements/granite-qrcode-scanner 
```

Once installed, import it in your application:

import '@granite-elements/granite-qrcode-scanner/granite-qrcode-scanner.js';


## Running demos and tests in browser

1. Fork the `granite-qrcode-scanner` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) 
and the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) installed.

1. When in the `granite-qrcode-scanner` directory, run `npm install` to install dependencies.

1. Serve the project using Polyumer CLI:

    `polymer serve --npm`

1. Open the demo in the browser

    - http://127.0.0.1:8080/components/@greanite-elements/granite-qrcode-scanner/demo


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
