// best

export class Challenge {
    static solution(num: number): number {
        let total: number = 0;
        for (let i: number = 0; i < num; i++) {
            total += i % 5 == 0 || i % 3 == 0 ? i : 0;
        }
        return total;
    }
}
