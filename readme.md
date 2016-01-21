# rsr2-bug
Demo reproducing a redux-simple-router 2 bug.

Track [issue](https://github.com/rackt/redux-simple-router/issues/207).

## Preview
![gif preview](preview.gif)

## Behavior
The `state.routing.location` key loses its value when the `state` is reset.

## Running
```bash
npm install
npm start
```
