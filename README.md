# @emgyrz/eslint-config

### Install
```shell
npm i @emgyrz/eslint-config
```

### Using 

Extends from all rules
```javascript
// .eslintrc.js
{
  // ...
  extends: [ '@emgyrz' ]
  // ...
}
```
---  
Extends from specific rules
```javascript
// .eslintrc.js
{
  // ...
  extends: [
    '@emgyrz/eslint-config/base',
    '@emgyrz/eslint-config/spacing'
  ],
  // ...
}
```
