import chalk from 'chalk';

export class Logger {
  static info(message: string): void {
    console.log(chalk.blue(message));
  }

  static success(message: string): void {
    console.log(chalk.green("✔ " + message));
  }
  static error(message: string): void {
    console.log(chalk.red("✘ " + message));
  }

  static marketValue(value: number): string {
    if (value <= 10) {
      return chalk.red(value.toString());
    } else if (value <= 50) {
      return chalk.yellow(value.toString());
    } else if (value <= 100) {
      return chalk.blue(value.toString());
    } else {
      return chalk.green(value.toString());
    }
  }
}