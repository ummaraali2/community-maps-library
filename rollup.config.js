import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled'
    }),
    commonjs()
  ],
  external: ['react', 'react-dom', 'lucide-react', 'react/jsx-runtime']
};