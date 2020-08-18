Nova.booting((Vue, router) => {
    router.addRoutes([
        {
            name: 'file-manager',
            path: '/file-manager',
            component: require('./components/Tool'),
        },
    ]);
});
