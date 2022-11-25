function sortFn(array) {
    let sortedArr = [];
    let itsDone = true;
    array.forEach((number) => {
        if (sortedArr.length == 0) {
            sortedArr.push(Number(number));
        } else {
            debugger;
            if (Number(number) < sortedArr[0]) {
                sortedArr.unshift(Number(number));
            } else {
                for (i = 0; i < sortedArr.length; i++) {
                    if (Number(number) < sortedArr[i]) {
                        sortedArr.splice(i, 0, Number(number));
                        itsDone = false;
                        break;
                    }
                }
                if (itsDone) {
                    sortedArr.push(Number(number));
                }
            }
            itsDone = true;
        }
    });
    return sortedArr;
}
