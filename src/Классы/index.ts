class Student {
  get description(): string {
    return `Студент ${this.name} (${this.age}) учиться на курсе ${this.program}`;
  }

  age!: number;
  name: string;
  program: string;

  constructor(name: string, age: number, program: string) {
    this.name = name;
    this.program = program;
    this.age = age;
  }
}

const student: Student = new Student('Alex', 19, 'TypeScript');

student.age = 19;

console.log(student.name);
console.log(student.program);
console.log(student.description);
console.log(student.age);