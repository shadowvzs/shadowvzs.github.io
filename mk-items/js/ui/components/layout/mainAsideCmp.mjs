import { tagGroupCmp } from "../tags/tagGroupCmp.mjs";

const svgExpandMoreIcon = `
    <svg viewBox="0 0 24 24" width="28" height="28">
        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
`;

const svgExpandLessIcon = `
    <svg viewBox="0 0 24 24" width="28" height="28">
        <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
    </svg>
`;

export const mainAsideCmp = (app) => {

    const isCollapsed = app.asideCollapsed;
    const icon = isCollapsed ? svgExpandMoreIcon : svgExpandLessIcon;

    return { 
        tagName: 'aside', 
        attributes: { className: 'main-aside' }, 
        children: [
            {
                tagName: 'div',
                attributes: { className: ['filter-toggle', isCollapsed && 'collapsed'] },
                children: [
                    {
                        tagName: 'p',
                        attributes: { className: '' },
                        children: [ 'Filters' ]
                    },
                    {
                        tagName: 'span',
                        attributes: { 
                            innerHTML: icon,
                            onClick: () => app.toggleAsideCollapsible()
                        },
                        children: []
                    }
                ]
            }, 
            !app.asideCollapsed &&  ({
                tagName: 'div',
                children: app.store.tagGroups.map(tagGroup => tagGroupCmp({ app, tagGroup })),
            })
        ].filter(Boolean)
    };
};
