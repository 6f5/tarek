import chalk from "chalk";

import sym from "log-symbols";

const { success, warning, info, error } = sym;

const symbols = {
  success,
  warning,
  info,
  error
};

const colorsFg = {
  success: chalk.green,
  warning: chalk.keyword("orange"),
  info: chalk.blue,
  error: chalk.red.bold
};

const colorsBg = {
  success: chalk.green.inverse,
  warning: chalk.keyword("orange").inverse,
  info: chalk.blue.inverse,
  error: chalk.red.bold.inverse
};

export default (options) => {
  const defaultOptions = {
    type: "success",
    message: "You didn't supply a message.",
    name: null
  };

  const opts = { ...defaultOptions, ...options };

  let { type, message, name } = opts;

  // Defaulting to success if there's a typo in alert type
  type = colorsBg[type] ? type : defaultOptions.type;

  name = name ? name.toUpperCase() : type.toUpperCase();

  console.log(
    `${symbols[type]} ${colorsBg[type](` ${name} `)} ${colorsFg[type](message)}`
  );
};
