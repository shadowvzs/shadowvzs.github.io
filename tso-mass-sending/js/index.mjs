import AppComponent from "./components/app/index.mjs";
import ExplorerSkillPanelComponent from "./components/explorer-skill-panel/index.mjs";
import EditGroupPanelComponent from "./components/edit-group-panel/index.mjs";
import TavernPanelComponent from "./components/tavern-panel/index.mjs";
import MessagingService from "./engine/MessagingService.mjs";

const init = () => {
  const messagingService = new MessagingService();
  const app = new AppComponent(messagingService).create().mount();
  const { root } = app.elements;
  const explorerPanel = new ExplorerSkillPanelComponent(messagingService, root).create().mount();
  const tavernPanel = new TavernPanelComponent(messagingService, root).create().mount();
  const editGroupPanel = new EditGroupPanelComponent(messagingService, root).create().mount();

}

init();

export function openExplorerCalculator(explorerType, skills) {
  return app.openExplorerCalculator(explorerType, skills);
}
