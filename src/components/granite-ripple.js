/**
 * @license MIT
 * Copyright (c) 2025 Horacio "LostInBrittany" Gonzalez
 */
import { LitElement, html, css } from 'lit';

/**
 * A simple ripple effect component
 * 
 * @element granite-ripple
 */
export class GraniteRipple extends LitElement {
  static get properties() {
    return {
      /**
       * Whether the ripple is active
       */
      active: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.active = false;
    this._rippleHandlers = {
      start: (event) => this._startRipple(event),
      end: () => this._endRipple()
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('mousedown', this._rippleHandlers.start);
    this.addEventListener('mouseup', this._rippleHandlers.end);
    this.addEventListener('mouseleave', this._rippleHandlers.end);
    this.addEventListener('touchstart', this._rippleHandlers.start);
    this.addEventListener('touchend', this._rippleHandlers.end);
    this.addEventListener('touchcancel', this._rippleHandlers.end);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('mousedown', this._rippleHandlers.start);
    this.removeEventListener('mouseup', this._rippleHandlers.end);
    this.removeEventListener('mouseleave', this._rippleHandlers.end);
    this.removeEventListener('touchstart', this._rippleHandlers.start);
    this.removeEventListener('touchend', this._rippleHandlers.end);
    this.removeEventListener('touchcancel', this._rippleHandlers.end);
  }

  _startRipple(event) {
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    
    // Get click position relative to the element
    let x, y;
    if (event.type === 'touchstart') {
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    } else {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }

    // Create ripple effect
    this.style.setProperty('--ripple-size', `${size}px`);
    this.style.setProperty('--ripple-x', `${x}px`);
    this.style.setProperty('--ripple-y', `${y}px`);
    this.active = true;
  }

  _endRipple() {
    this.active = false;
  }

  static get styles() {
    return css`
      :host {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        border-radius: inherit;
        pointer-events: none;
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        opacity: 0;
      }

      :host([active]) .ripple {
        transform: scale(1);
        opacity: 1;
      }
    `;
  }

  render() {
    return html`
      <div class="ripple" 
           style="width: var(--ripple-size); 
                  height: var(--ripple-size); 
                  left: calc(var(--ripple-x) - var(--ripple-size) / 2); 
                  top: calc(var(--ripple-y) - var(--ripple-size) / 2);">
      </div>
    `;
  }
}

customElements.define('granite-ripple', GraniteRipple);
