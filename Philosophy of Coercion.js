function isValidName(name) {
    if (typeof name === `string` && name != ``) {
        let wihteSpaceCount = 0;
        const splittedString = name.split(``);
        debugger;
        for (i = 0; i <= 3; i++) {
            if (splittedString[i] == ` `) {
                wihteSpaceCount++;
            }
        }

        if (wihteSpaceCount <= 0) {
            return true;
        }
    } else {
        return false;
    }
}

function hoursAttended(attended, length) {
    if (typeof attended == `string` || typeof attended == `number`) {
        if (typeof length == `string` || typeof length == `number`) {
            if (Number(length) >= 0 && Number(attended) >= 0) {
                if (Number(length) % 1 == 0 && Number(attended) % 1 == 0) {
                    if (Number(attended) <= Number(length)) {
                        return true;
                    }
                }
            }
        }
    } else {
        return false;
    }
}
