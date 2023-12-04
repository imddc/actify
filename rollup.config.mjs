import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import preserveDirectives from 'rollup-plugin-preserve-directives'

const outputOptions = {
  sourcemap: false,
  preserveModules: true,
  preserveModulesRoot: 'packages/'
}

export default [
  {
    input: './packages/index.ts',
    output: {
      dir: 'lib',
      format: 'esm',
      exports: 'named',
      ...outputOptions
    },
    external: [
      'dayjs',
      'zustand',
      'react',
      'popmotion',
      'react-dom',
      'lucide-react',
      'usehooks-ts',
      '@babel/runtime',
      'framer-motion',
      'react-router-dom',
      'tailwind-merge',
      'tailwind-variants',
      '@floating-ui/react',
      'react-tailwindcss-select',
      'react-tailwindcss-datepicker'
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.rollup.json'
      }),
      typescriptPaths(),
      preserveDirectives(),
      terser({ compress: { directives: false } })
    ],
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning)
      }
    }
  }
]