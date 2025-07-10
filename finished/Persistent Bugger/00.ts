export function persistence(num: number): number {
    return num < 10 ? 0 : 1 + persistence([...num.toString()].reduce((a, c) => a * +c, 1));
}
console.log(persistence(99999));
