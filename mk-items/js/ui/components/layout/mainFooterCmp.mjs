export const mainFooterCmp = (app) => {
    return { 
        tagName: 'footer', 
        attributes: { className: 'main-footer' }, 
        children: [
            { 
                tagName: 'p', 
                children: ['Created in 2022, for testing purpose'] 
            }
        ] 
    };
}