export const mainFooterCmp = (store) => {
    return {
        tagName: 'footer',
        attributes: { className: 'main-footer' },
        children: [
            {
                tagName: 'p',
                children: [
                    'Source code on ',
                    {
                        tagName: 'a',
                        attributes: {
                            href: 'https://github.com/shadowvzs/mk-items',
                            rel: 'noopener noreferrer',
                            target: '_blank'
                        },
                        children: ['GitHub']
                    },
                ]
            }
        ]
    };
}