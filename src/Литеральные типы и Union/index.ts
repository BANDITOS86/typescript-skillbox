type Language = 'ru-RU' | 'en-US';

function translate(language: Language, text: string): string {
  return text;
}

translate('ru-RU', '');
translate('en-US', '');
// translate('ch-ZN', ''); // ошибка

let language1: 'ru-RU' | 'en-US';

language1 = 'ru-RU';
language1 = 'en-US';
// language1 = 'ch-ZN'; // ошибка

type Direction = -1 | 0 | 1;

function reload(forse?: true) {};

reload(true);
// reload(farse); // ошибка