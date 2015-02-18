(function() {
    "use strict";

    var requireDir = require("require-dir");

    // require all tasks in gulp/tasks, including sub-folders
    requireDir("./tools/gulp/tasks", { recurse: true });
})();
