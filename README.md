### Plugins

Yarn
Browersify

VS Code

### Yarn

`yarn init`

### ESLint

`eslint --init`

0 - 
1 - warn
2 - error

Angular: 

https://github.com/Gillespie59/eslint-plugin-angular

### Factory vs Service vs Provider

All are singletons, once per app

#### Factory

Use it making `$http` request

#### Service

Use it for Util methods

#### Provider

Use it for set value for object and methods should act based on the value instead of sending value 
as Param for every method, more like configuration stuff. Value can accessed through `$get`