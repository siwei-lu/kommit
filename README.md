# kommit

Format your git commit messages by a set of plugins.

## Usage

### Install Globally

```sh
npm install -g kommit
kommit
```

### Install Locally

#### install into dependencies

```sh
npm install --save-dev kommit
```

#### add a script into package.json

```json
{
  "script": {
    "kommit": "kommit"
  }
}
```

#### use in terminal

```sh
npm run kommit
```

## Customize

Thanks to the [middleware](https://github.com/IdanLoo/middleware) mechanism, `Kommit` is designed as highly customizable.

### Config File

First of all, to change the behaviour of `kommit`, you should create a folder called `.kommit` in the root of the project. And then add a `config.js` file into it. So the configuration file is placed on the path of `.kommit/config.js`.

### Config Object

The configuration object should be exported in Commonjs pattern.

```js
module.exports = {
  /* ... */
}
```

#### Fields

- members: String[]

  The members field should list all the members in your team. So it is able to choose one as your pair. That is for the Pair Programming.

  ```js
  module.exports = {
    members: [
      'Idan Loo <im@siwei.lu>',
      'Fake Name <fake@siwei.lu>',
      /* ... */
    ],
  }
  ```

- hooks: Object

  The hooks fields currently contain two hooks. The before hook is a middleware which will be executed before committing, whereas the after hook will be executed after committing.

  ```js
  module.exports = {
    hooks: {
      async before(ctx, next) {
        /* Do something using the ctx */

        // Call the next method to commit this change
        // Avoid calling next to cancel this committing
        await next()
      },
      async after(ctx, next) {
        /* Do something to handle the end of committing */

        // Calling next is essential as well
        await next()
      },
    },
  }
  ```

  To know more things about how to create middlewares, check [here](https://github.com/IdanLoo/middleware)

## Summary

Commit Message Format is playing a more and more important role on cooperating development. [Angular Commit Message Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-format), one of the most well known formats, helps us make git flows clearer and easier to generate documentations.

The Question is, however, this format is a bit complicated. You have to remember lots of concepts and make sure your cooperators know them as well. That does make newbies even some developers who know it well confused.

Anyway, we all know how helpful this format is, and we all are struggling to use it. So why don't we create a tool to make it easier to use?

[git-cz](https://github.com/streamich/git-cz) has done the same thing I want to do. To be honest, `Kommit` is inspired by `git-cz`.

There still are some things I can not handle using `git-cz`. Because my team chooses a variant of ACMF for our demands. But `git-cz` is not such customizable, so I write `Kommit`.
