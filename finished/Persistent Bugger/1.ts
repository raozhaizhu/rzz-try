export function persistence(num: number): number {
    if (num < 10) return 0;

    let time: number = 0;

    function calculate(theNumber: number) {
        let divided = String(theNumber).split("");
        let multiplyResult = divided.map((d) => +d).reduce((prev, current) => (prev *= current));
        console.log("*** divided:", divided, "***");
        console.log("*** multiplyResult:", multiplyResult, "***");
        time += 1;

        if (multiplyResult < 10) {
            return;
        } else {
            calculate(multiplyResult);
        }
    }

    calculate(num);

    return time;
}
console.log(persistence(99999999));
