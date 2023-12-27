# Is Today a Lights-Off Day?

## About

This simple Node app runs an Express server to provide an answer to the question: "Should the lights stay off today?"

The logic is as follows:

1. If today is a Friday, the answer is "Yes."
  * **Unless** it is too dark outside (as determined by [OpenWeather](https://openweathermap.org/api)), then
    the answer is "Maybe, but it looks kinda cloudy. You should consult your co-workers."
1. Otherwise, the answer is "No."

## Setup

### Environment Variables

The app utilizes a few environment variables to adjust its behavior:

* `WEATHER_API_KEY` (*required*) - the API key you obtain from [OpenWeather](https://openweathermap.org/api).
* `LATITUDE` (*optional*) - your desired latitude to apply to the OpenWeather API query.
* `LONGITUDE` (*optional*) - your desired longitude to apply to the OpenWeather API query.
* `TZ` (*optional*) - your desired time zone for understanding and manipulating dates.
* `PORT` (*optional*) - a port the app should listen to.

### Getting Started

After cloning the repository and setting any necessary environment variables, simply run the following to get going:

```
npm install
npm run watch
```

Open your browser to [http://localhost:3000/](http://localhost:3000/) to view the app.
