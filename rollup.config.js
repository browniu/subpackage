import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'


let defaultConfig = [{
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ]
}]
let asyncConfig = [
  {
    input: 'src/async/index.js',
    output: [
      {
        file: 'dist/async/index.js',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      postcss({
        modules: true
      }),
      url(),
      svgr(),
      babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers']
      }),
      resolve(),
      commonjs()
    ]
  }, {
    input: 'src/async/components/handle_1.js',
    output: [
      {
        file: 'dist/async/components/handle_1.js',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      postcss({
        modules: true
      }),
      url(),
      svgr(),
      babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers']
      }),
      resolve(),
      commonjs()
    ]
  }, {
    input: 'src/async/components/handle_2.js',
    output: [
      {
        file: 'dist/async/components/handle_2.js',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      postcss({
        modules: true
      }),
      url(),
      svgr(),
      babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers']
      }),
      resolve(),
      commonjs()
    ]
  }, {
    input: 'src/async/components/handle_3.js',
    output: [
      {
        file: 'dist/async/components/handle_3.js',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      postcss({
        modules: true
      }),
      url(),
      svgr(),
      babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers']
      }),
      resolve(),
      commonjs()
    ]
  }]
let insiderConfig = [
  {
  input: 'src/insider/index.js',
  output: [
    {
      file: 'dist/insider/index.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ]
}]
let outsiderConfig = [
  {
  input: 'src/outsider/components/handle_1.js',
  output: [
    {
      file: 'dist/outsider/handle_1.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ]
}, {
  input: 'src/outsider/components/handle_2.js',
  output: [
    {
      file: 'dist/outsider/handle_2.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ]
}, {
  input: 'src/outsider/components/handle_3.js',
  output: [
    {
      file: 'dist/outsider/handle_3.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ]
}]

let config = [...defaultConfig, ...asyncConfig, ...insiderConfig, ...outsiderConfig]

export default config
