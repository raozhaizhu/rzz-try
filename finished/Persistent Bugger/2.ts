export function persistence(num: number): number {
    if (num < 10) return 0;

    let time: number = 0;

    function calculate(theNumber: number) {
        let multiplyResult = String(theNumber)
            .split("")
            .map((d) => +d)
            .reduce((prev, current) => (prev *= current));

        time++;

        if (multiplyResult < 10) return;
        else calculate(multiplyResult);
    }

    calculate(num);

    return time;
}

persistence(999);
