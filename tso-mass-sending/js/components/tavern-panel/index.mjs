import PanelComponent from "../shared/PanelComponent.mjs";
import { tavernPanelTemplate, groupRowTemplate } from './template.mjs';
import { EVENTS, STORAGE_KEY, FRIEND_BUFF_MULTIPLIER } from "../../constants/index.mjs";

import explorerSearchInfo from "../../data/explorer-search-info.mjs";
import explorerTypes from "../../data/explorer-types.mjs";
import { explorers, groups } from "../../data/db/index.mjs";
import { loadAllData } from '../../api/index.mjs';

import { queryElement, queryElements } from "../../utils/dom.mjs";
import JsonStorage from "../../utils/storage.mjs";
import { escapeAttribute } from "../../utils/html.mjs";
import { normalizeId } from "../../utils/normalize.mjs";

export class TavernPanelComponent extends PanelComponent {
  constructor(messagingService, root) {
    super(messagingService, root);
    this.show = this.show.bind(this);
    this.renderGroups = this.renderGroups.bind(this);
  }

  mount() {
    this.messagingService.subscribe(EVENTS.TAVERN_PANEL_OPEN, this.show);

    this.messagingService.subscribe(EVENTS.TAVERN_GROUP_UPDATED, this.renderGroups);
 
    super.mount();
    this.listen(this.element, "click", this.clickHandler);

    return this;
  }

  show() {
    this.renderGroups();
    super.show();
  }

  clickHandler = (ev) => {
    const target = ev.target;
    const action = target.getAttribute("data-action");
    const groupId = target.getAttribute("data-group-id");
    if (action === 'send-group' && groupId) {
        this.messagingService.publish(EVENTS.TAVERN_SEND_GROUP, { groupId: parseInt(groupId) })
    }

    if (action === 'edit-group' && groupId) {
        this.messagingService.publish(EVENTS.TAVERN_EDIT_GROUP, { groupId: parseInt(groupId) })
    }

  }

  renderGroups() {
    const { groups, explorers } = loadAllData();
    const elements = groups
        .map(group => groupRowTemplate(group, explorers.length)).join("\n")
    this.groupContainer.innerHTML = elements;
  }

  unmount() {
    this.messagingService.unsubscribe(EVENTS.TAVERN_PANEL_OPEN, this.show);
    super.unmount();
    return this;
  }

  create() {
    super.create({ innerHTML: tavernPanelTemplate });
    this.groupContainer = queryElement(this.element, ".panel-content");
    return this;
  }
}

export default TavernPanelComponent;