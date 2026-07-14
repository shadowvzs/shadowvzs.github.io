export const editGroupPanelTemplate = `
  <div class="edit-group-layer">

    <section
      class="edit-group-card"
      role="dialog"
      aria-modal="true"
      aria-labelledby="title"
    >

       <img class="panel-bg" src="./assets/windows/edit-group-window.png" />
       <div class="panel-close-button" data-panel="close-window"> </div>
       <div class="panel-title" data-panel="close-window"> </div>
       <div class="search-container">
        <input type="text" name="search" />
       </div>
       <div class="panel-content" data-panel="close-window">
            <div class="list-container-bg"></div>
            <div class="list-container"></div>
            <div class="bulk-action-container flex space-between">
              <main class="flex-col gap-4">
                <div> Select task for the visible specialists </div>
                <div class="flex-col gap-1">
                  <div class="flex gap-1 items-center"><img src="./assets/searches/button/treasure-search.png" title="Teasure searches" />  </div>
                  <div class="flex gap-2 flex-wrap treasure-search-options">
                    <img src="./assets/searches/icon/treasure-short.png" data-action="select-bulk-task" data-task-id="treasure-short" />
                    <img src="./assets/searches/icon/treasure-medium.png" data-action="select-bulk-task" data-task-id="treasure-medium" />
                    <img src="./assets/searches/icon/treasure-long.png" data-action="select-bulk-task" data-task-id="treasure-long" />
                    <img src="./assets/searches/icon/treasure-very-long.png" data-action="select-bulk-task" data-task-id="treasure-very-long" />
                    <img src="./assets/searches/icon/treasure-prolonged.png" data-action="select-bulk-task" data-task-id="treasure-prolonged" />
                  </div>
                </div>
                <div class="flex-col gap-1">
                  <div class="flex gap-1 items-center"><img src="./assets/searches/button/adventure-search.png" title="Adventure searches" />  </div>
                  <div class="flex gap-2 flex-wrap adventure-search-options">
                    <img src="./assets/searches/icon/treasure-short.png" data-action="select-bulk-task" data-task-id="adventure-short" />
                    <img src="./assets/searches/icon/treasure-medium.png" data-action="select-bulk-task" data-task-id="adventure-medium" />
                    <img src="./assets/searches/icon/treasure-long.png" data-action="select-bulk-task" data-task-id="adventure-long" />
                    <img src="./assets/searches/icon/treasure-very-long.png" data-action="select-bulk-task" data-task-id="adventure-very-long" />
                  </div>
                </div>
                <div class="flex-col gap-1">
                  <div class="flex gap-1 items-center"><img src="./assets/searches/button/cancel.png" title="No search" data-action="select-bulk-task" data-task-id="none" />  </div>
                </div>

              </main>
              <footer class="flex gap-1 items-center justify-center">
                <img src="./assets/searches/button/send.png" title="No search" data-action="send-group" class="cursor-pointer" />
              </div>
            </div>
       </div>
    </section>
  </div>
`;

export const listItemTemplate = (info) => {
    const {
        id,
        type,
        title,
        disabled,
        name,
        icon,
        leftIcon,
        rightIcon,
        leftIconTitle,
        rightIconTitle,
        selected
    } = info;

    const htmlId = `item-${id}`;
    const leftIconStr = leftIcon ? `<img src=${leftIcon} class="left-icon" title="${leftIconTitle}" class="${disabled ? 'grayscale-100' : ''}" />` : '';
    const rightIconStr = rightIcon ? `<img src=${rightIcon} class="right-icon" title="${rightIconTitle}" class="${disabled ? 'grayscale-100' : ''}" />` : '';
    const imageTitle = disabled ? "Busy" : title;

    return `
       <div class="relative group-list-item ${selected ? 'selected' : ''}" title="${title}">
            <div class="item-bg">
                <img src="./assets/windows/frame.png" class="${disabled ? 'grayscale-100' : ''}" title="${imageTitle}" />
            </div>
            <label for="${htmlId}" class="absolute">
               <img src="${icon}" class="${disabled ? 'grayscale-100' : ''}" title="${imageTitle}" data-action="select-explorer" data-specialist-id="${id}" />
            </label>
            
            ${leftIconStr}
            ${rightIconStr}
       </div>
    
    `;
}