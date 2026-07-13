export class BaseComponent {
  constructor(messagingService, root) {
    this.root = root;
    this.messagingService = messagingService;
    this.element = null;
    this.events = [];
    this.mounted = false;
  }

  create(attributes) {
    this.element = document.createElement('div');
    if (attributes && typeof attributes === 'object') {
      for (let k in attributes) {
        this.element[k] = attributes[k];
      }
    }
    return this;
  }

  mount() {
    this.mounted = true;
    if (this.element.parentElement === null) {
      this.root.appendChild(this.element);
    }
    return this;
  }

  unmount() {
    for (const { target, type, listener, options } of this.events) {
      target.removeEventListener(type, listener, options);
    }

    this.events = [];
    this.mounted = false;
    return this;
  }

  listen(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    this.events.push({ target, type, listener, options });
    return listener;
  }
}

export default BaseComponent;
