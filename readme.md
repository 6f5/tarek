> A better logger

## Install

```js
npm install tarek
```

## Usage

```js
import tarek from "tarek";

tarek({
  message: "Your message",
  name: "AUTH",
  type: "success"
});
```

## Options

|           | Default                         | Available
| --------- | ------------------------------- |---------------------------------- |
| `type`    | success                         | error, warning, success, info     |
| `message` | You didn't provide all options. |					  |
| `name`    | The log type                    |					  |
