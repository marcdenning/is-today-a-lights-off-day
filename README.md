# Is Today a Lights-Off Day?

## About

This simple Node app runs an Express server to provide an answer to the question: "Should the lights stay off today?"

The logic is as follows:

1. If today is a Friday, the answer is "Yes."
  * **Unless** it is too dark outside (as determined by [Forecast.io](http://forecast.io)), then
    the answer is "Maybe, but it looks kinda cloudy. You should consult your co-workers."
1. Otherwise, the answer is "No."

You may optionally set a date to check by providing a query string parameter `date` formatted as `YYYYMMDD`. Example:

```
http://localhost:3000/?date=20160916
```

## Getting Started

After cloning the repository, simply run the following to get going:

```
npm install
npm run watch
```

Open your browser to http://localhost:3000/ to view the app.
