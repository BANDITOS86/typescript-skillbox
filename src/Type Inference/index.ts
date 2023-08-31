let language = 'ru-Ru';

// language = 123; // ошибка

let dates = [ '2021-01-01', new Date() ];

dates.push('');
dates.push(new Date());
// dates.push(123); // ошибка

document.addEventListener('click', (e) => {});
document.addEventListener('drag', (e) => {});

// describe('index.js', () => {

//   let language: string;

//   beforeEach(() => {
//     language = 'ru-Ru'
//   });

//   it('language should be ru-Ru', () => {
//     expect(language).toBe('ru-Ru');
//   });
// })