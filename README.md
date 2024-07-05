<h3 align="center">
  <code>npm create @jynxio/app</code>
</h3>
<p align="center">
  <samp>Then create a project template in the CLI</samp>
</p>

<h2 align="center"><samp>Why?</samp></h2>
<p align="center">
  <samp>Because I'm tired of repeatedly configuring ESLint, Stylelint, Prettier, TypeScript, and other scaffolding tools for new projects.</samp>
</p>
<br />

<blockquote align="center">
  <samp>
    👀 Please do not use the <code>pnpm uo --latest</code> command
    <br />
    <samp>(ESLint is locked to v8 because most plugins have not yet been adapted to v9, such as
      <a href="https://github.com/typescript-eslint/typescript-eslint/issues/8211">typescript-eslint</a>
      and
      <a href="https://github.com/jsx-eslint/eslint-plugin-react/issues/3699">eslint-plugin-react</a>)
    </samp>
  </samp>
</blockquote>

<h2 align="center"><samp>How?</samp></h2>

```sharp
[init] - @jynxio/create-app -

[tmpl] Select a template:
         * vue
           next
           react
           solid
           astro
           vanilla

[name] Enter a file name: random-file-name

[done] - @jynxio/create-app -

[next] Run these command to start:
       1. cd ./random-file-name
       2. npm install
       3. npm dev
```

