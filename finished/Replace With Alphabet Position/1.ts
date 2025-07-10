export function alphabetPosition(text: string): string {
    let regex = /[a-zA-Z]/g;
    let match = text.match(regex);
    // console.log("*** match:", match, "***");
    if (!match) return "";
    const alphabetArr = match.map((item) => {
        let code = item.toLowerCase().charCodeAt(0) - 96;
        return code;
    });
    let alphabetText = alphabetArr.join(" ");
    console.log("*** alphabetText:", alphabetText, "***");
    return alphabetText;
}

alphabetPosition("The sunset sets at twelve o' clock.");
