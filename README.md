# Is Today a Lights-Off Day?

## About

This simple Node app runs an Express server to provide an answer to the question: "Should the lights stay off today?"

The logic is as follows:

1. If today is a Friday, the answer is "Yes."
  * **Unless** it is too dark outside (as determined by [Dark Sky](https://darksky.net)), then
    the answer is "Maybe, but it looks kinda cloudy. You should consult your co-workers."
1. Otherwise, the answer is "No."

You may optionally set a date to check by providing a query string parameter `date` formatted as `YYYYMMDD`. Example:

```
http://localhost:3000/?date=20160916
```

## Setup

### Environment Variables

The app utilizes a few environment variables to adjust its behavior:

* `DARKSKY_API_KEY` (*required*) - the API key you obtain from the
  [Dark Sky Developer Center](https://darksky.net/dev/).
* `DARKSKY_LATITUDE` (*optional*) - your desired latitude to apply to the Dark Sky API query.
* `DARKSKY_LONGITUDE` (*optional*) - your desired longitude to apply to the Dark Sky API query.
* `TIMEZONE` (*optional*) - your desired time zone for understanding and manipulating dates.
* `PORT` (*optional*) - a port the app should listen to.

### Getting Started

After cloning the repository and setting any necessary environment variables, simply run the following to get going:

```
npm install
npm run watch
```

Open your browser to [http://localhost:3000/](http://localhost:3000/) to view the app.
