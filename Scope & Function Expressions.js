function printRecords(recordIds) {
    // TODO

    debugger;

    let sortedArr = [];
    recordIds.forEach((recordid) => {
        const find = studentRecords.find((record) => record.id == recordid);
        if (find !== undefined) {
            sortedArr.push(find);
        }
    });
    sortedArr.sort(function handler(a, b) {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            return 0;
        }
    });
    sortedArr.forEach((record) => {
        console.log(
            `${record.name} (${record.id}): ${
                record.paid ? "Paid" : "Not Paid"
            }`
        );
    });
}

function paidStudentsToEnroll() {
    // TODO
    let collectedArr = [];
    studentRecords.forEach((record) => {
        if (record.paid === true) {
            const found = currentEnrollment.find((id) => id == record.id);
            if (found == undefined) {
                collectedArr.push(record.id);
            }
        }
    });
    return [...collectedArr, ...currentEnrollment];
}

function remindUnpaid(recordIds) {
    // TODO
    debugger;
    let notPaidArr = [];
    studentRecords.forEach((record) => {
        const found = recordIds.includes(record.id);
        if (found == true && record.paid == false) {
            notPaidArr.push(record.id);
        }
    });
    printRecords(notPaidArr);
}

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
    { id: 313, name: "Frank", paid: true },
    { id: 410, name: "Suzy", paid: true },
    { id: 709, name: "Brian", paid: false },
    { id: 105, name: "Henry", paid: false },
    { id: 502, name: "Mary", paid: true },
    { id: 664, name: "Bob", paid: false },
    { id: 250, name: "Peter", paid: true },
    { id: 375, name: "Sarah", paid: true },
    { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log(`------------`);
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log(`------------`);
remindUnpaid(currentEnrollment);
