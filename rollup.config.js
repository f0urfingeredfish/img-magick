import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import pkg from "./package.json"
import copy from "rollup-plugin-copy"

export default [
  // browser-friendly UMD build
  {
    input: "img-magick.js",
    output: {
      name: "imgMagick",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
      resolve(),
      commonjs(),
      copy({
        targets: [
          {
            src: [
              "node_modules/wasm-imagemagick/dist/magick.js",
              "node_modules/wasm-imagemagick/dist/magick.wasm"
            ],
            dest: "dist"
          }
        ]
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "img-magick.js",
    external: ["lit-element", "wasm-imagemagick"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ]
  }
]
