const explorerSkillPanelTemplate = `
  <div class="calculator-layer">

    <section
      class="calculator-card"
      role="dialog"
      aria-modal="true"
      aria-labelledby="title"
    >
      <header class="panel-titlebar">
        <h2 id="title">Explorer's skill</h2>
        <button
          class="panel-close-button"
          data-panel="close-window"
          type="button"
        >
          ×
        </button>
      </header>

      <div class="panel-body">
        <header class="page-header">
          <p class="eyebrow">Explorer management</p>
          <h3>Search calculator and skill tree</h3>
        </header>

        <form id="calculator-form">
          <div class="flex gap-3">
            <div class="current-explorer-icon-container">
              <img src="" id="current-explorer-icon" alt="explorer" />
            </div>
            <label>
              <span>Explorer</span>
              <select id="explorer"></select>
            </label>

            <label>
              <span>Search</span>
              <select id="search-type"></select>
            </label>
          </div>

          <section class="skill-panel" aria-labelledby="skills-heading">
            <div class="skill-panel-header">
              <strong id="skills-heading">
                Skills: <output id="skill-total">0</output>/<output id="skill-max">21</output>
              </strong>

              <button
                id="reset-skills"
                class="reset-button"
                type="button"
                title="Reset skills"
                aria-label="Reset skills"
              >
                ↻
              </button>
            </div>

            <div id="skills" class="skill-grid"></div>
            <p class="skill-hint">Click to increase. Right-click to decrease.</p>
          </section>

          <section class="buff-panel" aria-labelledby="buff-heading">
            <div>
              <strong id="buff-heading">Search speed buff</strong>
              <small>Prestigious Friend Buff: searches take 20% less time.</small>
            </div>

            <button
              id="prestigious-friend-buff"
              class="buff-toggle"
              type="button"
              aria-pressed="false"
              data-tooltip="Prestigious Friend Buff\nTreasure and adventure searches take 20% less time."
            >
              <img
                src="./assets/buffs/prestigious-friend-buff.png"
                alt="Prestigious Friend Buff"
                width="44"
                height="44"
              >
            </button>
          </section>
        </form>

        <output id="result" class="result" aria-live="polite"></output>
      </div>
    </section>
  </div>
`;

export default explorerSkillPanelTemplate;
