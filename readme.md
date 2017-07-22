# Compass Development

## What exactly is this project?
This is an educational project made during [Evgeny Rodionov's course](http://kurskurskurs.erodionov.ru). It uses:
- HTML/CSS,
- [ReactJS](https://facebook.github.io/react/) for breaking layout into components,
- [React Router](https://reacttraining.com/react-router/) for linking pages,
- [styled-components](https://www.styled-components.com) for styling the layout, 
- [yarn](https://yarnpkg.com/lang/en/) for dependency management,
- [Eslint](http://eslint.org) (with Airbnb configuration)  for finding code errors,
- [flow](https://flow.org) and [flow-typed](https://github.com/flowtype/flow-typed) for checking data types.

## Cool, how does it work?

### Install application
```
$ git clone
$ yarn install
```

### Run application
```
$ yarn start
```

### Check with Eslint
```
$ yarn lint
```

### Check with Flow
```
$ yarn add flow-typed
$ flow-typed install
$ yarn flow
```

### Build application
```
$ yarn build
```

### Deploy to now.sh
```
$ yarn deploy
```

>**NB!** Don't forget to change the name in package.json!

## That simple?
Yeah, as simple as that.