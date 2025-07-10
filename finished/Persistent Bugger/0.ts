export function persistence(num: number): number {
    let count = 0;
    while (num > 9) {
        num = String(num)
            .split("")
            .map((d) => +d)
            .reduce((prev, current) => (prev *= current));
        count++;
    }
    return count;
}

console.log(persistence(9999999999999));
