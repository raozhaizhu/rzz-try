function toCamelCase(str: string) {
    let dividedArr = str.split(/[_-]/);
    const camelCaseArr = dividedArr.map((item, index) => {
        if (index === 0) return item;
        item = `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`;
        return item;
    });
    let camelCaseWord = camelCaseArr.join("");

    console.log(camelCaseArr);
    console.log("*** camelCaseWord:", camelCaseWord, "***");

    return camelCaseWord;
}

toCamelCase("the-stealth_warrior");
