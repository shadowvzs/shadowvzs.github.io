import PanelComponent from "../shared/PanelComponent.mjs";
import { editGroupPanelTemplate, listItemTemplate } from './template.mjs';
import { EVENTS, STORAGE_KEY, FRIEND_BUFF_MULTIPLIER } from "../../constants/index.mjs";

import { loadGroupData } from "../../api/index.mjs";

import { queryElement, queryElements } from "../../utils/dom.mjs";
import JsonStorage from "../../utils/storage.mjs";
import { escapeAttribute } from "../../utils/html.mjs";
import { normalizeId } from "../../utils/normalize.mjs";

export class EditGroupPanelComponent extends PanelComponent {
  constructor(messagingService, root) {
    super(messagingService, root);
    this.openGroup = this.openGroup.bind(this);
    this.filterText = '';
  }

  mount() {
    this.messagingService.subscribe(EVENTS.TAVERN_EDIT_GROUP, this.openGroup);
    super.mount();
    this.listen(this.element, "click", this.clickHandler);
    this.listen(this.filterInput, "input", this.applyFilter);
    return this;
  }

  applyFilter = () => {
    this.filterText = this.filterInput.value.trim().toLowerCase();
    this.render();
  }

  openGroup(payload) {
    console.log(EVENTS.TAVERN_EDIT_GROUP, payload);
    const { groupId } = payload;
    if (!groupId) {
      throw new Error('Missing the group id from the payload, edit group panel cannot handle it');
    }

    this.groupId = groupId;
    this.render();
    this.show();
  }

  render() {
    const { group, explorers, explorerSearchInfoIdMap } = loadGroupData(this.groupId);
    console.log(explorers)
    const filterFn = exp => exp.type.name.toLowerCase().startsWith(this.filterText);
    this.filteredExplorers = this.filterText ? explorers.filter(filterFn) : explorers;

    if (this.filterText) {

    }
    const items = this.filteredExplorers.map(explorer => {
      const assignedTaskId = group.members[explorer.id];

      const data = {
        id: explorer.id,
        title: '',
        disabled: explorer.startedAt,
        name: explorer.type.name, 
        icon: explorer.type.iconUrl,
        checked: !!assignedTaskId,
        leftIcon: '',
        rightIcon: '',
        leftIconTitle: '',
        rightIconTitle: '',
      };
      console.log(data);

      if (assignedTaskId) {
        const assignedTask = explorerSearchInfoIdMap[assignedTaskId];
        data.leftIcon = assignedTask.iconButtonUrl;
        data.rightIcon = assignedTask.iconUrl;
        data.leftIconTitle = `${assignedTask.category} search`,
        data.rightIconTitle = assignedTask.name,
        console.log(assignedTask)

      }

      return data;
    });

    this.listContainer.innerHTML = items.map(data => listItemTemplate(data)).join('');    
  }

  clickHandler = (ev) => {
    const target = ev.target;
    const action = target.getAttribute("data-action");
    if (action === "select-bulk-task") {
      const taskId = target.getAttribute("data-task-id");
      const { group, explorers, explorerSearchInfoIdMap } = loadGroupData(this.groupId);
      console.log(explorerSearchInfoIdMap);
      const task = explorerSearchInfoIdMap[taskId];
      alert(JSON.stringify(task));
    }
    console.log(target, action);
  }

  unmount() {
    this.messagingService.unsubscribe(EVENTS.TAVERN_EDIT_GROUP, this.show);
    super.unmount();
    return this;
  }

  create() {
    super.create({ innerHTML: editGroupPanelTemplate });
    this.panelContainer = queryElement(this.element, ".panel-content");
    this.listContainer = queryElement(this.panelContainer, ".list-container");
    this.filterInput = queryElement(this.element, ".search-container input");
    return this;
  }
}

export default EditGroupPanelComponent;