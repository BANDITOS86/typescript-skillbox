import { Locale } from "./locale";

declare function translate(Locale: Locale, text: string): string;

const ru: Locale = Locale.EN;

translate(Locale.RU, 'some text');
translate(Locale.EN, 'some text');
