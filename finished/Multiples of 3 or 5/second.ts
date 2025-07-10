export class Challenge {
    static solution(num: number) {
        let total = 0;
        for (let i = 0; i < num; i++) {
            total += i % 3 === 0 || i % 5 === 0 ? i : 0;
        }
        console.log("*** total:", total, "***");
        return total;
    }
}

Challenge.solution(10);
