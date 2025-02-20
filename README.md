# Unhandled Asynchronous Errors in Express.js

This repository demonstrates a common error in Express.js applications: unhandled asynchronous errors.  Asynchronous operations (database queries, API calls, etc.) can throw errors, and if not properly handled, they can lead to crashes or unexpected behavior.

The `bug.js` file shows an example of an Express.js application with an asynchronous operation that might fail. The error handling is incomplete, which can lead to problems.

The `bugSolution.js` file provides a corrected version with improved error handling. Proper error handling prevents application crashes and gracefully informs clients of errors.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js` to observe the unhandled error.
4. Run `node bugSolution.js` to see the improved error handling.