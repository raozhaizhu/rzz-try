export class Challenge {
    static solution(number: number) {
        let multiplierResult: Record<string, number> = {
            multiplierOf3: 0,
            multiplierOf5: 0,
            multiplierOf15: 0,
        };

        const theNumbers: number[] = [3, 5, 15];

        for (let num of theNumbers) {
            let remainder = number % num;
            let multiplier: number;

            remainder === 0 ? (multiplier = Math.floor(number / num) - 1) : (multiplier = Math.floor(number / num));

            multiplierResult[`multiplierOf${num}`] = multiplier;
        }
        console.log(multiplierResult);

        let addingResult = 0;

        for (let num of theNumbers) {
            let valueOfKey = multiplierResult[`multiplierOf${num}`];
            if (valueOfKey === 0) continue;
            if (num === 15) {
                for (let i = 1; i <= valueOfKey; i++) {
                    let result = num * i;
                    addingResult -= result;
                }
            } else {
                for (let i = 1; i <= valueOfKey; i++) {
                    let result = num * i;
                    addingResult += result;
                }
            }
        }

        console.log(addingResult);

        return addingResult;
    }
}
