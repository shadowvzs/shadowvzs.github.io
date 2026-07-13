import BaseComponent from "./BaseComponent.mjs";

export class PanelComponent extends BaseComponent {
  constructor(messagingService, root) {
    super(messagingService, root);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  mount() {
    super.mount();
    const closeElement = this.element.querySelector('[data-panel="close-window"]');
    this.element.classList.add('hide-panel');
    this.listen(closeElement, "click", () => this.hide());
    return this;
  }

  unmount() {
    super.unmount();
    return this;
  }

  show() {
    this.hidden = false;
    this.element.classList.remove('hide-panel');
    return this;
  }

  hide() {
    this.hidden = true;
    this.element.classList.add('hide-panel');
    return this;
  }
}

export default PanelComponent;
