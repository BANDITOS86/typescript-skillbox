class TimeSpan {
  static ticksPerSeconds: number = 1000;
  static ticksPerMinutes: number = 1000 * 60;
  static ticksPerHours: number = 1000 * 60 * 60;
  static tickPerDays: number = 1000 * 60 * 60 * 24;

  static fromSeconds(seconds: number): TimeSpan {
    return new TimeSpan(seconds * TimeSpan.ticksPerSeconds);
  }

  static fromMinutes(minutes: number): TimeSpan {
    return new TimeSpan(minutes * TimeSpan.ticksPerMinutes);
  }

  static fromHours(hours: number): TimeSpan {
    return new TimeSpan(hours * TimeSpan.ticksPerHours);
  }

  static fromDays(days: number): TimeSpan {
    return new TimeSpan(days * TimeSpan.tickPerDays);
  }

  constructor(public readonly ticks: number) {}
}

const fiveSeconds: TimeSpan = TimeSpan.fromSeconds(5);
const oneSeconds: TimeSpan = TimeSpan.fromSeconds(1);

console.log(fiveSeconds);
console.log(oneSeconds);

