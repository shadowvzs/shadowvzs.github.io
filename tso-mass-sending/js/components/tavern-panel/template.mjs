import { getGroupDetails } from '../../utils/groups.mjs';

export const tavernPanelTemplate = `
  <div class="tavern-layer">

    <section
      class="tavern-card"
      role="dialog"
      aria-modal="true"
      aria-labelledby="title"
    >
       <img class="panel-bg" src="./assets/windows/tavern.png" />
       <div class="panel-close-button" data-panel="close-window"> </div>
       <div class="panel-content" data-panel="close-window"> </div>
    </section>
  </div>
`;

const getExplorerInfoFromCounter = (explorerTypeCounter) => Object.entries(explorerTypeCounter)
  .map(([explorerType, count]) => `${explorerType}: ${count}`)
  .join("\n");


const getDetailRow = (searchInfos) => {
  const list = searchInfos.map(searchInfo => `
    <div class="flex">
      <img src="${searchInfo.iconUrl}" title="${searchInfo.name}" height="24" />
      <span>${searchInfo.count}
    </div>
  `);
  return `
    <div class="flex gap-3">
        <img src="${searchInfos[0].iconButtonUrl}" height="24" />
        ${list.join('')}
    </div>
  `;
};

const groupSearchRow = (searchData) => {
  const rows = [];
  if (searchData.adventure && searchData.adventure.length) {
    rows.push(getDetailRow(searchData.adventure));
  }

  if (searchData.treasure && searchData.treasure.length) {
    rows.push(getDetailRow(searchData.treasure));
  }

  return rows;
}

export const groupRowTemplate = (group, totalUnitCount) => {
  const { id, name, memberList, taskData, typeCounter } = group;
  const explorerInfo = getExplorerInfoFromCounter(typeCounter);
  console.log(group);
  const detailRows = groupSearchRow(taskData);
  console.log(group);

  return `
    <div class="tavern-group flex gap-2">
        <aside>
            <div class="flex relative">
                <img src="./assets/windows/frame.png" />
                <div id="send-group" class="absolute" data-group-id="${id}" data-action="send-group">►</div>
            </div>
        </aside>
        <section class="flex-col space-between h-full w-full">
            <header class="flex space-between w-full">
                <strong>${name}</strong>
                <img id="edit-group" src="./assets/windows/pencil.png" data-group-id="${id}" data-action="edit-group" />
            </header>
            <main>
              ${detailRows[1] || ''}
            </main>
            <footer class="flex space-between gap-1">
                <div>
                  ${detailRows[0] || ''}
                </div>
                <div class="flex space-between gap-1" title="${explorerInfo}">
                    <img src="./assets/windows/members.png" />
                    ${memberList.length}/${totalUnitCount}
                </div>
            </footer>
        </section>
    </div>
  `;
}
