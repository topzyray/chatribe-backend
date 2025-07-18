export class Helpers {
  static firstLetterUppercase(str: string): string {
    const valueString = str.toLocaleLowerCase();
    return valueString
      .split(' ')
      .map((value: string) => `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`)
      .join(' ');
  }

  static lowerCase(string: string): string {
    return string.toLowerCase();
  }

  static generateRandomIntegers(integerLenght: number): number {
    const characters = '0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < integerLenght; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return parseInt(result, 10);
  }
}
