/*
@license MIT
Copyright (c) 2019 Horacio "LostInBrittany" Gonzalez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import { LitElement, html, css } from 'lit-element';

import '@granite-elements/granite-qrcode-decoder';
import '@granite-elements/granite-app-media-periodic-image-capture';

import '@polymer/app-media/app-media-devices.js';
import '@polymer/app-media/app-media-stream.js';
import '@polymer/app-media/app-media-video.js';
import '@polymer/app-media/app-media-image-capture.js';

import '@material/mwc-fab/mwc-fab.js';
import '@material/mwc-ripple/mwc-ripple.js';


class GraniteQrcodeScanner extends LitElement {

  constructor() {
    super();
    this.frequency = 10;
  }

  static get properties() {
    return {
      /**
      * Number of captured images per second
      */
      frequency: {
        type: Number,
      },
      /**
      * If true, the element captures `frequency` images per second
      * If false, capture will be done with a button
      */
      active: {
        type: Boolean,
      },
      /**
      * The last decoded QRCode
      */
      data: {
        type: String,
        reflect: true,
      },
      device: {
        type: Object,
      },
      stream: {
        type: Object,
      },
      photo: {
        type: Object,
      },
      userMode: {
        type: Boolean,
      },
      /**
      * If true, send logs to the console
      */
      debug: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        [hide] {
          display: none !important;
        }

        #videoWindow {
          position: relative;
        }
        #videoWindow #buttonRow {
          position: absolute;
          bottom: 1em;
          left: 0;
          right: 0;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;

        }
        #videoWindow #targetSquare {
          position: absolute;
          left: 5em;
          right: 5em;
          top: 4em;
          bottom: 6em;
          border: solid 5px rgba(200,200,200,0.5);
        }

        .media {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }
      `,
    ];
  }

  facingMode() {
    if (this.userMode) {
      return 'user';
    }
    return 'environment';
  }

  render() {
    return html`
        <div class="media">

          <app-media-devices
              id="mediaDevices"
              @devices-changed="${this._onDevicesChanged}"
              @selected-device-changed="${this._onSelectedDeviceChanged}"
              kind="videoinput"></app-media-devices>

          <app-media-stream
              .video-device="${this.device}"
              .videoDevice="${this.device}"
              video-constraints=
                '{"width": {"ideal": 480}, "height": {"ideal": 480}}, "facingMode":"${this.facingMode()}"'
              @active-changed="${this._onActiveChanged}"
              @stream-changed="${this._onStreamChanged}"
              active></app-media-stream>

          <div id="videoWindow">

            <app-media-video
                id="video"
                .source="${this.stream}"
                @click="${this.record}"
                autoplay
                muted></app-media-video>

            <div id="targetSquare"></div>

            <mwc-ripple 
                id="ripple" 
                noink>
            </mwc-ripple>

            ${
              !this.active ?
              html`
              <div id="buttonRow">
                <mwc-fab 
                    icon="photo_camera" 
                    @click="${this._takePhoto}"></mwc-fab>
              </div>
              `:
              ``
            }
          </div>


          <granite-app-media-periodic-image-capture
              id="imageCapture"
              .capture="${this.active}"
              .frequency="${this.frequency}"
              .fill-light-mode="${this.fillLightMode}"
              .stream="${this.stream}"
              focus-mode="single-shot"
              image-width="480"
              image-height="480"
              @last-photo-changed="${this._onLastPhotoChanged}"
              debug="${this.debug}"></granite-app-media-periodic-image-capture>


          <granite-qrcode-decoder
              .blob="${this.photo}" 
              @qrcode-decoded="${this._onQrcodeDecoded}"></granite-qrcode-decoder>

          ${
            this.data ?
            html `<div> Last decoded data: ${this.data}</div>`
            : ``
          }
        </div>
    `;
  }

  _onSelectedDeviceChanged(evt) {
    if (this.debug) {
      console.log('[granite-qrcode-scanner] _onSelectedDeviceChanged', evt);
    }
    this.device=evt.detail.value;
    console.dir(this.devices);
  }

  _takePhoto(evt) {
    if (this.debug) {
      console.log('[granite-qrcode-scanner] _takePhoto');
    }
    let imageCapture = this.shadowRoot.querySelector('#imageCapture');
    console.dir(imageCapture);
    imageCapture.takePhoto();
  }


  _onLastPhotoChanged(evt) {
    if (this.debug) {
      console.log('[granite-qrcode-scanner] _onLastPhotoChanged', evt);
    }
    this.photo = evt.detail.value;
  }

  _onQrcodeDecoded(evt) {
    if (this.debug) {
      console.log('[granite-qrcode-scanner] _onQrcodeDecoded', evt);
    }
    this.data = evt.detail;
    this.dispatchEvent(new CustomEvent('qrcode-decoded', {detail: evt.detail}));
  }

  _onStreamChanged(evt) {
    if (this.debug) {
      console.log('[granite-qrcode-scanner] _onStreamChanged', evt);
    }
    this.stream = evt.detail.value;
  }

  _onActiveChanged(evt) {
    if (this.debug) {
      console.log('[granite-qrcode-scanner] _onActiveChanged', evt);
    }
  }
}

customElements.define('granite-qrcode-scanner', GraniteQrcodeScanner);
