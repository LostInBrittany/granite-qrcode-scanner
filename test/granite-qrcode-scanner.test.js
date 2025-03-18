import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../granite-qrcode-scanner.js';

suite('granite-qrcode-scanner', () => {
  let element;
  
  teardown(() => {
    fixtureCleanup();
  });

  test('instantiating the element works', async () => {
    element = await fixture(html`<granite-qrcode-scanner></granite-qrcode-scanner>`);
    assert.instanceOf(element, customElements.get('granite-qrcode-scanner'));
  });

  test('element has correct properties', async () => {
    element = await fixture(html`<granite-qrcode-scanner frequency="20"></granite-qrcode-scanner>`);
    assert.equal(element.frequency, 20);
  });
});
