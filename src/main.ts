/* コンパイルする方法は
tsc コンパイルするファイル名（tscだけでも可）
保存先を別ファイルにするときはtscのみで実行 */

// 変数に型を与えて宣言。
export class Calories {
onigiri: string = 'onigiri' // String型
calories: number = 200;  // Number型

// 関数の仮引数にも受け入れる型を定義。
// {}の前にあるstringは関数の返す値の型を定義している。
todaysMeal(food: string, energy: number): string {
  return `My ${food} has ${energy} calories`
}

}


