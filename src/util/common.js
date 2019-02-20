import React from "react";

export const connectConsumer = Consumer => cb => Component =>
  Object.assign(
    props => (
      <Consumer>
        {context => <Component {...props} {...cb(context, props)} />}
      </Consumer>
    ),
    {
      displayName: `ConnectConsumer(${Consumer.displayName ||
        Consumer.name ||
        "Component"})`
    }
  );

// Copied straight from: https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js
export const compose = (...funcs) =>
  funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg);

// Copied from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};
