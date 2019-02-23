# Context Hooks by Example

### The example

See an example of using `context` with `react` `hooks`:

[https://codesandbox.io/s/github/cgood92/context-by-example/tree/hooks](https://codesandbox.io/s/github/cgood92/context-by-example/tree/hooks).

See an example of using `context`, in the "traditional" `react` way:

[https://codesandbox.io/s/github/cgood92/context-by-example/tree/master](https://codesandbox.io/s/github/cgood92/context-by-example/tree/master).

### Our departure from redux
`redux` is great.  It offers a lot, and is an industry favorite.

We used `redux-observable` as middleware to make our API calls, and dispatch actions to store the data to the store.  But, when a component dispatched an action to make a network request, how do we know when the network request is done?  We would have to set a value in `redux`, subscribe to that value in `redux`, and react in our component accordingly.  The flag in `redux` may need to be ID specific, so that we known when a specific network request by ID is done.

On top of that, we would need to write a file for the reducer, a file for the action-creators, a file for the middleware network request, a file for the selector, and related testing files.  It gets to be a lot!

And, frankly, the only thing we were really using `redux` for was for a central data store.  We weren't utilizing its other features (time-travel, undo, etc).

When the `context` api for `react` opened up, that offered a central data store in a `react` component, something we were very familiar with.  We began replacing storing stuff in redux, and starting storing data in `context` providers.  This has proved to be great for us, both in terms of being more fun to code in, as well as speed to code the feature.

### Pros of using `context` instead of `redux`

- Can make a `context` per data model, living independent of other contexts, and can be built in the way that makes sense for that context
- Co-location of data and network logic for a data model
- Can have direct access to network requests
- Don't have to create a bunch of files

### Cons of using `context` instead of `redux`

- Hard to test `context` providers, outside of using `enzyme`
- Cannot easily rehydrate a full system of data
- No `redux` benefits
- I'm sure there are more cons, just none coming to mind
