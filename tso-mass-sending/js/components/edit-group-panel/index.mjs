import PanelComponent from "../shared/PanelComponent.mjs";
import { editGroupPanelTemplate, listItemTemplate } from './template.mjs';
import { EVENTS, STORAGE_KEY, FRIEND_BUFF_MULTIPLIER } from "../../constants/index.mjs";

import { loadGroupData, updateGroupTasks } from "../../api/index.mjs";

import { queryElement, queryElements } from "../../utils/dom.mjs";
import JsonStorage from "../../utils/storage.mjs";
import { escapeAttribute } from "../../utils/html.mjs";
import { normalizeId } from "../../utils/normalize.mjs";

export class EditGroupPanelComponent extends PanelComponent {
  constructor(messagingService, root) {
    super(messagingService, root);
    this.render = this.render.bind(this);
    this.openGroup = this.openGroup.bind(this);
    this.selectedSepcialistId = null;
    this.filterText = '';
  }

  mount() {
    this.messagingService.subscribe(EVENTS.TAVERN_EDIT_GROUP, this.openGroup);
    this.messagingService.subscribe(EVENTS.TAVERN_GROUP_SENT, this.render);
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
    const filterFn = exp => exp.type.name.toLowerCase().startsWith(this.filterText);
    this.filteredExplorers = this.filterText ? explorers.filter(filterFn) : explorers;
    const items = this.filteredExplorers.map(explorer => {
      const assignedTaskId = group.members[explorer.id];

      const data = {
        id: explorer.id,
        title: '',
        disabled: explorer.startedAt,
        name: explorer.type.name, 
        icon: explorer.type.iconUrl,
        selected: this.selectedSepcialistId === explorer.id,
        leftIcon: '',
        rightIcon: '',
        leftIconTitle: '',
        rightIconTitle: '',
      };
      if (assignedTaskId) {
        const assignedTask = explorerSearchInfoIdMap[assignedTaskId];
        data.leftIcon = assignedTask.iconButtonUrl;
        data.rightIcon = assignedTask.iconUrl;
        data.leftIconTitle = `${assignedTask.category} search`;
        data.rightIconTitle = assignedTask.name;
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
      // if the user selected a specialist then this is a single assignment
      if (this.selectedSepcialistId) {
        updateGroupTasks(this.groupId, [this.selectedSepcialistId], taskId);
      // if no selection then this is a bulk selection
      } else {
        const { group, explorers, explorerSearchInfoIdMap } = loadGroupData(this.groupId);
        const filteredExplorersId = this.filteredExplorers.map(exp => exp.id);
        updateGroupTasks(this.groupId, filteredExplorersId, taskId);
      }
      this.messagingService.publish(EVENTS.TAVERN_GROUP_UPDATED);
    
      this.render();
    } else if (action === "send-group") {
      this.messagingService.publish(EVENTS.TAVERN_SEND_GROUP, { groupId: this.groupId })
    } else if (action === "select-explorer") {
      // need additional atribute: specialist type for the geologist
      const { explorersIdMap } = loadGroupData(this.groupId);
      // the html attribute always string, but the dictionary key/id is int in the dictionary
      const specialistId = parseInt(target.getAttribute("data-specialist-id"));
      // in our case it is explorer
      const specialist = explorersIdMap[specialistId];
      if (!specialist) { throw new Error('Explorer not found'); }
      if (specialist.startedAt && specialist.currentTask) {
        // no point to select a busy specialist
        return;
      }

      if (this.selectedSepcialistId === specialistId) {
        // remove the selection if the same specialist was selected again
        this.selectedSepcialistId = null;
      } else {
        this.selectedSepcialistId = specialistId;
        console.log(specialistId);
      }
      this.render();
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