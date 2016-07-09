var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: "*.spiegel.de",
  contentScriptFile: self.data.url("unblock.js")
});
