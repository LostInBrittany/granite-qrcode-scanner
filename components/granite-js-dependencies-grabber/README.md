[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LostInBrittany/granite-js-dependency-grabber)

# granite-js-dependency-grabber

> Based on Polymer 2.x

A custom element and a mixin to ensure that non-componentalized mon-modularized external  
JavaScript libraries are loader once and only once, and in the right order,
importing all the needed dependencies only if they aren't already loaded


## Usage example

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../polymer/polymer.html">
    <link rel="import" href="granite-js-dependencies-grabber.html">
    <dom-bind id="binding">
      <template>
        <div id="demo-history">
        <next-code-block></next-code-block>
      </template>
    </dom-bind>
    <script>    
      document.querySelector('granite-js-dependencies-grabber').addEventListener('dependency-is-ready', (evt) => {
          console.log('Got dependency', evt.detail);
          document.getElementById('demo-history').innerHTML =
            document.querySelector('#granite-js-dependencies-grabber-demo').history;
        });
    </script>
  </template>
</custom-element-demo>
```
-->
```html
<granite-js-dependencies-grabber 
    id="granite-js-dependencies-grabber-demo"
    dependencies='[{"name":"moment","url":"../moment/min/moment.min.js"},{"name":"Chart","url":"../chart.js/dist/Chart.min.js"}]' 
    debug></granite-js-dependencies-grabber>
```



## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[Apache Licence, Version 2.0](https://opensource.org/licenses/Apache-2.0)
