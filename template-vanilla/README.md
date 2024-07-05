# Setting Up the husky

You have to set up the husky event though modules have been installed.

## Command

Execute the following command:

```zsh
npx husky init
```

## pre-commit file

Create a pre-commit file within .husky directory and add the following content:

```zsh
npm run lintstaged
```

## commit-msg file

Create a commit-msg file within .husky directory and add the following content:

```zsh
npm run commitlint -- ${1}
```
