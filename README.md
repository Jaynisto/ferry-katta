# Testing Typescript With Mocha

Make sure to have Typescript installed using the bellow command:

```command
npm install -g typescript
```

Now set a new Typescript project with mocha support.

Create a new project folder, you can call it whatever you like.


```command
mkdir ts-mocha-go
cd ts-mocha-go
```

After completing the above tasks, Initialize both NodeJS and Typescript.

```command
npm init --y
tsc --init
```

You can now open the project to any code aditor, I'll open mine in VSCode.

## Configure Typescript

Open the generated ```tsconfig.json``` file and make these changes.

Change the ```outDir``` where JavaScript files will be generated to .```/dist```. The ```outDir``` property is commented out by default.

It should look like this:

```"outDir": "./dist"```,

Change your target language to ES6

```"target": "es6"```

## Create a test

Create a ```test``` folder in your project root folder. In that folder create a file called ```test.ts```.

```command
mkdir test
cd test
touch test.ts
```

Copy this code into your ```test.ts``` file:

```javascript
import assert from 'assert';

describe('My function', function() {
    it('should test', function() {
        assert.equal(1, 2);
    });
});
```

Now notice if you open the test in VSCode you will see some errors.

TypeScript don't know what mocha is and it can't import the ```assert``` node module.

## Test Setup


To fix all of the above type errors install these dependencies:

```command
npm install --save-dev mocha typescript ts-mocha
```
Ann install these TypeScript types:

```command
npm install --save-dev @types/mocha
npm install --save-dev @types/node
```
Once you installed the above there should be no errors in your test.ts file.

## Configure ts-mocha

Add an entry to your ```package.json``` file to configure your mocha test written in TypeScript to run using ```ts-mocha```.

```javascript
"scripts": {
    "test": "ts-mocha -r ts-node/register test/**/*.test.ts"
  }
```
Then you can run your mocha test using the following command:
```command
npm test
```


### Status Badge

[![Mocha With Typescript Tests](https://github.com/Jaynisto/ferry-katta/actions/workflows/npm-publish-github-packages.yml/badge.svg)](https://github.com/Jaynisto/ferry-katta/actions/workflows/npm-publish-github-packages.yml)