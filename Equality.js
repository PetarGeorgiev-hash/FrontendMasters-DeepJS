//task1
function compareObj(object1, object2) {
    // return JSON.stringify(object1) === JSON.stringify(object2);
    // return OBject.is(object1,object2)
    for (const key1 in object1) {
        if (key1 !== key2 && object1[key1] !== object2[key2]) {
            return false;
        }
    }
    return true;
}
//task2

function biggestNum(array, kth) {
    const sortedArr = array.sort(function compareFn(a, b) {
        if (Number(a) > Number(b)) {
            return 1;
        } else if (Number(a) < Number(b)) {
            return -1;
        } else {
            return 0;
        }
    });

    console.log(sortedArr);
    return sortedArr[sortedArr.length - kth];
}

//task3
function max(array) {
    const sortedArr = array.sort(function compareFn(a, b) {
        if (Number(a) > Number(b)) {
            return 1;
        } else if (Number(a) < Number(b)) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(sortedArr);
    return sortedArr[sortedArr.length - 1] - sortedArr[0];
}

//FrontendMasters

function findAll(array, test) {
    array.forEach((element) => {
        if (typeof test == `number`) {
            if (element == test) {
                return [test, element];
            }
        } else if (typeof test == `string`) {
            if (element == test) {
                return [test, element];
            }
        } else if (typeof element == `boolean` && typeof test == `boolean`) {
            if (element == test) {
                return [test, element];
            }
        } else if (typeof test == `object`) {
            if (test == element) {
                return [test, element];
            } else {
                return Object.is(test, element);
            }
        }
    });
}
