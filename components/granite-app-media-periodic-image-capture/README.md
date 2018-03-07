[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LostInBrittany/granite-app-media-periodic-image-capture)

# granite-app-media-periodic-image-capture

> An element extending [`app-media-image-capture`](https://www.webcomponents.org/element/PolymerElements/app-media/elements/app-media-image-capture) allowing a periodic image capture (i.e. x images per second)
>
> Polymer 2.x element


## Doc & demo

It works like [`app-media-image-capture`](https://www.webcomponents.org/element/PolymerElements/app-media/elements/app-media-image-capture) but allowing periodic image capture using `frequency` property to fix the number of capture images per second and `capture` boolean property to activate or desactivate periodical capture.

You can see a full example on the demo.

[https://lostinbrittany.github.io/granite-app-media-periodic-image-capture](https://lostinbrittany.github.io/granite-app-media-periodic-image-capture)



## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install LostInBrittany/granite-app-media-periodic-image-capture --save
```

Or [download as ZIP](https://github.com/LostInBrittany/granite-app-media-periodic-image-capture/archive/gh-pages.zip).## Usage

1. Import Web Components' polyfill (if needed):

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/granite-qrcode-scanner/granite-app-media-periodic-image-capture.html">
    ```

3. Start using it!

    ```html
    <granite-app-media-periodic-image-capture>
    </granite-app-media-periodic-image-capture>
    ```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)

