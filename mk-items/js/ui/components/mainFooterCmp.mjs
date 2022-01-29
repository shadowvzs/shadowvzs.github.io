export const mainFooterCmp = (app) => {
    return { 
        tagName: 'footer', 
        attributes: { className: 'main-footer' }, 
        children: [
            'footer'
            // { 
            //     tagName: 'button', 
            //     attributes: { onclick: () => alert('1') }, 
            //     children: ['+'] 
            // }
        ] 
    };
}