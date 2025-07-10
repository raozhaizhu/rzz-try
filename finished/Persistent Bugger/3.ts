export function persistence(num: number): number {
    let count = 0;
    while (num > 9) {
        num = String(num)
            .split("")
            .map((d) => {
                console.log("*** d:", d, "***");
                return +d;
            })
            .reduce((prev, current) => (prev *= current));

        console.log("*** num:", num, "***");

        count++;
    }

    console.log("*** count:", count, "***");

    return count;
}

persistence(999);
