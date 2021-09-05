const path = require("path");
const { reactIconsGeneratorFromSVGDir } = require("easy-icons");

function resolve(...paths) {
  return path.resolve(__dirname, "../", ...paths);
}

reactIconsGeneratorFromSVGDir({
  entry: resolve("svg"),
  ASNFilepath: "@organize/asn/lib/asn",
  ASNOutputDir: resolve("packages/asn/src"),
  iconsOutputDir: resolve("packages/icons/src"),
  typescript: true,
});
