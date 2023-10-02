// const input = <HTMLInputElement>document.getElementById("input");

// input.value;

// function format(value: number | string): string {
//   return (value as number).toFixed(2);
// }

function format(value: object): string {
  return (value as unknown as number).toFixed(2);
}

format({});