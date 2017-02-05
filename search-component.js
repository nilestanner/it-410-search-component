(function() {
    "use strict";

    class SearchComponent extends HTMLElement {

        static get observedAttributes() {
            return ['value'];
        }

        get value() {
          return this.hasAttribute('value') ? this.getAttribute('value') : '';
        }

        set value(value) {
            this.setAttribute('value',value);
        }

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            this.input = document.createElement('input');
            this.input.placeholder = 'search';
            this.input.addEventListener('input',this.textInput);
            this.input.addEventListener('keydown',this.enter);
            this.button = document.createElement('button');
            this.button.innerHTML = 'Search';
            this.button.addEventListener('click',this.search);

            shadowRoot.appendChild(this.input);
            shadowRoot.appendChild(this.button);
        }

        enter (e){
          if(e.keyCode === 13){
            console.log(this.parentNode.value);
          }
        }

        search (e){
            console.log(this.parentNode.value);
        }

        textInput (e){
          this.parentNode.value = this.value;
          // value(this.value);
        }

        connectedCallback() {
            this.index = this.index;
        }

        attributeChangedCallback(attrName, oldValue, newValue) {
            if (attrName === 'value') this.value = newValue;
        }

    }

    window.customElements.define('search-component', SearchComponent);
})();
