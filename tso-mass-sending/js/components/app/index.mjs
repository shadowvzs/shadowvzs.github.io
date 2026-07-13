import applicationTemplate from './template/index.mjs';
import BaseComponent from "../shared/BaseComponent.mjs";
import { EVENTS } from '../../constants/index.mjs';

import { sendGroup } from '../../api/index.mjs';

class AppComponent extends BaseComponent {
  constructor(messagingService) {
    super(messagingService, document.body);
  }

  create() {
    super.create({
        innerHTML: applicationTemplate
    });
    this.elements = {
        root: this.element.querySelector('#root'),
        explorerSkillBtn: this.element.querySelector('#open-explorer-calculator'),
        tavernBtn: this.element.querySelector('#open-tavern')
    };

    return this;
  }

  mount() {
    const { explorerSkillBtn, tavernBtn } = this.elements;
    this.listen(explorerSkillBtn, "click", () => {
        this.messagingService.publish(EVENTS.EXPLORER_SKILL_PANEL_OPEN, {});
    });
    this.listen(tavernBtn, "click", () => {
        this.messagingService.publish(EVENTS.TAVERN_PANEL_OPEN, {});
    });
    this.messagingService.subscribe(EVENTS.TAVERN_SEND_GROUP, (payload) => {
      const counter = sendGroup(payload.groupId);
      if (counter === 0) {
        alert('All explorer busy in the group');
      } else {
        alert(`${counter} explorer(s) was sent to their tasks`)
      }
      this.messagingService.publish(EVENTS.TAVERN_GROUP_SENT);
    });
    return super.mount();
  }
}

export default AppComponent;