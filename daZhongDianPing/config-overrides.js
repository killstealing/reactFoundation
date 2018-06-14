/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireDefinePlugin = require('react-app-rewire-define-plugin');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1890ff" },
    })(config, env);
    config = rewireDefinePlugin(config, env, {
        __DEV__: true,
        test:'test'
    });
    return config;
};