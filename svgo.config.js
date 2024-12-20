const names = [
  "removeDimensions",
  "removeDoctype",
  "removeXMLProcInst",
  "removeComments",
  "removeMetadata",
  "removeEditorsNSData",
  "cleanupAttrs",
  "mergeStyles",
  "inlineStyles",
  "minifyStyles",
  "removeUselessDefs",
  "cleanupNumericValues",
  "convertColors",
  "removeUnknownsAndDefaults",
  "removeNonInheritableGroupAttrs",
  "removeUselessStrokeAndFill",
  "cleanupEnableBackground",
  "removeHiddenElems",
  "removeEmptyText",
  "convertShapeToPath",
  "convertEllipseToCircle",
  "moveElemsAttrsToGroup",
  "moveGroupAttrsToElems",
  "collapseGroups",
  "convertPathData",
  "convertTransform",
  "removeEmptyContainers",
  "removeUnusedNS",
  "sortDefsChildren",
  "removeTitle",
  "removeDesc",
];

/**
 * @type {import('svgo').Config}
 */
module.exports = {
  multipass: true, // Optimize SVG with multiple passes
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false, // Keep viewBox attribute
          sortAttrs: true,      // Better gzip compression
        },
      },
    },
    ...names.map((name) => ({
      name,
    })),
  ],
};
