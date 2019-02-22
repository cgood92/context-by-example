# Context by Example

### The example

To see how we use `context`, in the "traditional" `react` way, see: [https://codesandbox.io/s/github/cgood92/context-by-example/tree/master](https://codesandbox.io/s/github/cgood92/context-by-example/tree/master).
To see how the same code can be simplified by using `react hooks`, see: [https://codesandbox.io/s/github/cgood92/context-by-example/tree/hooks](https://codesandbox.io/s/github/cgood92/context-by-example/tree/hooks).

### The Expirement
`redux` is great.  It offers a lot, and is an industry favorite.

We used `redux-observable` as middleware to make our API calls, and dispatch actions to store the data to the store.  But, when a component dispatched an action to make a network request, how do we know when the network request is done?  We would have to set a value in `redux`, subscribe to that value in `redux`, and react in our component accordingly.  The flag in `redux` may need to be "id" specific, so that we known when a specific network request by ID is done.

On top of that, we'll need to write a file for the reducer, a file for the action-creators, a file for the middleware network request, a file for the selector, and testing files.  It gets to be a lot!

And, frankly, the only thing we were really using `redux` for was for a central data store.  We weren't utilizing its other features (time-travel, undo, etc).

When the `context` api for `react` opened up, that offered a central data store.  And we jumped on.

### Pros

- Can make a context per data model, living independent of other contexts, and can be built in the way that makes sense for that context
- Co-location of data and network logic for it
- Can have direct access to network requests
- Don't have to create a bunch of files

### Cons

- Hard to test providers, outside of using `enzyme`
- Cannot easily rehydrate a full system of data
- No `redux` benefits
- Others things that aren't immediately coming to mind
