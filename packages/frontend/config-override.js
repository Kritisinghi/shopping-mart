const rewireYarnWorkspace = require("react-app-rewire-yarn-workspaces");

module.exports = function override(config, env) {
  return rewireYarnWorkspace(config, env);
};
