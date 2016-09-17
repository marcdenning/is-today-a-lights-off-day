# Is Today a Lights-Off Day?

## About

This simple Node app runs an Express server to provide an answer to the question: "Should the lights stay off today?"

The logic is as follows:

1. If today is a Friday, the answer is "Yes."
  * **Unless** it is too dark outside (as determined by a TBD weather API), then
    the answer is "Maybe, you should consult your co-workers."
1. Otherwise, the answer is "No."

## Getting Started

After cloning the repository, simply run the following to get going:

```
npm install
npm start
```

Open your browser to http://localhost:3000/ to view the app.
