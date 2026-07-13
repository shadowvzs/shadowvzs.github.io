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
            <div class="bulk-action-container">
              <section class="flex-col gap-4">
                <div> Select task for the visible specialists </div>
                <div class="flex-col gap-1">
                  <div class="flex gap-1 items-center"><img src="./assets/searches/button/treasure-search.png" title="Teasure searches" />  </div>
                  <div class="flex gap-2 flex-wrap treasure-search-options">
                    <img src="./assets/searches/icon/treasure-short.png" data-action="select-bulk-task" data-task-id="teasure-short" />
                    <img src="./assets/searches/icon/treasure-medium.png" data-action="select-bulk-task" data-task-id="teasure-medium" />
                    <img src="./assets/searches/icon/treasure-long.png" data-action="select-bulk-task" data-task-id="teasure-long" />
                    <img src="./assets/searches/icon/treasure-very-long.png" data-action="select-bulk-task" data-task-id="teasure-very-long" />
                    <img src="./assets/searches/icon/treasure-prolonged.png" data-action="select-bulk-task" data-task-id="teasure-prolonged" />
                  </div>
                </div>
                <div class="flex-col gap-1">
                  <div class="flex gap-1 items-center"><img src="./assets/searches/button/adventure-search.png" title="Adventure searches" />  </div>
                  <div class="flex gap-2 flex-wrap adventure-search-options">
                    <img src="./assets/searches/icon/treasure-short.png" data-action="select-bulk-task" data-task-id="teasure-short" />
                    <img src="./assets/searches/icon/treasure-medium.png" data-action="select-bulk-task" data-task-id="teasure-medium" />
                    <img src="./assets/searches/icon/treasure-long.png" data-action="select-bulk-task" data-task-id="teasure-long" />
                    <img src="./assets/searches/icon/treasure-very-long.png" data-action="select-bulk-task" data-task-id="teasure-very-long" />
                  </div>
                </div>
              </section>
              <div>

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
        checked
    } = info;

    const htmlId = `item-${id}`;
    const leftIconStr = leftIcon ? `<img src=${leftIcon} class="left-icon" title="${leftIconTitle}" class="${disabled ? 'grayscale-100' : ''}" />` : '';
    const rightIconStr = rightIcon ? `<img src=${rightIcon} class="right-icon" title="${rightIconTitle}" class="${disabled ? 'grayscale-100' : ''}" />` : '';

    return `
       <div class="relative group-list-item" title="${title}">
            <div class="item-bg">
                <img src="./assets/windows/frame.png" class="${disabled ? 'grayscale-100' : ''}" />
            </div>
            <label for="${htmlId}" class="absolute">
               <img src="${icon}" class="${disabled ? 'grayscale-100' : ''}" />
            </label>
            
            ${leftIconStr}
            ${rightIconStr}
       </div>
    
    `;
}