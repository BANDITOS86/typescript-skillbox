class Student {
  constructor(public readonly name: string) {}

  getDescription(): string {
    return `Студента зовут ${this.name}`;
  }
}

const student: Student = new Student("Alex");

console.log(student.name);
console.log(student.getDescription());


