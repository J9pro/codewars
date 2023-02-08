function alphabetPosition(text) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let position = [];

    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let index = letters.indexOf(text[i]);

        if (index === -1) {
            continue;
        } else {
            position.push(index + 1)
        }
    }
    return position.join(" ")

}