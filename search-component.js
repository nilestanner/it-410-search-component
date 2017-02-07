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
            this.input.value=value;
            this.setAttribute('value',value);
        }

        constructor() {
            super();
            let self = this;
            self.search = function(){
                console.log(self.value);
            }
            let shadowRoot = this.attachShadow({mode: 'open'});
            this.input = document.createElement('input');
            this.input.placeholder = 'search';
            this.input.addEventListener('input', function(event){
                self.value = this.value;
            });
            this.input.addEventListener('keydown',function(event){     
                if(event.keyCode === 13){
                    self.search();
                }
            });
            this.button = document.createElement('button');
            this.button.innerHTML = 'Search';
            this.button.addEventListener('click',function(){
                self.search();
            });

            shadowRoot.appendChild(this.input);
            shadowRoot.appendChild(this.button);
        }

        attributeChangedCallback(attrName, oldValue, newValue) {
            if (attrName === 'value') this.value = newValue;
        }
    }

    window.customElements.define('search-component', SearchComponent);
})();
