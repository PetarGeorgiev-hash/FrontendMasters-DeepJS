// const button = document.querySelector(`button`);
// const reg = /^[А-Я][а-я]+$/;
// const regEmail = /^\w+@\w+\.\w+/;
// const kidsReg = /^\d+$/;

// button.addEventListener(`click`, function (e) {
//     const nameInp = document.getElementById(`nameInp`);
//     console.log(nameInp);
//     const valueArr = nameInp.value.split(` `);
//     let upperCaseCount = 0;
//     let validEmail = false;
//     let validMonth = false;
//     let validKids = false;
//     if (valueArr.length < 3 || valueArr.length > 3) {
//     } else {
//         valueArr.forEach((element) => {
//             if (reg.test(element)) {
//                 upperCaseCount++;
//             }
//         });
//     }

//     const emailInp = document.getElementById("e");
//     if (regEmail.test(emailInp.value)) {
//         validEmail = true;
//     }

//     const month = document.getElementsByName("month")[0];
//     const monthReg = `${new Date().getFullYear()}-${new Date().getDate()}`;
//     console.log(month);
//     if (month.value !== `` && month.value < monthReg) {
//         validMonth = true;
//     }
//     console.log(validMonth);

//     const kids = document.getElementById("kids");
//     if (Number(kids.value) < Number(kids.max)) {
//         console.log(kids.value);
//         console.log(kids.max);
//         validKids = true;
//     }

//     if (validEmail && upperCaseCount == 3 && validMonth && validKids) {
//         window.alert("Valid");
//         nameInp.value = ``;
//         emailInp.value = ``;
//         month.value = ``;
//         kids.value = 0;
//     } else {
//         console.log(`emial`, validEmail);
//         console.log(`validName`, upperCaseCount);
//         console.log(`month`, validMonth);
//         console.log(`Kids`, validKids);
//     }
// });

var deepJS = defineWorkshop();

console.log(deepJS);

deepJS.addStudent(311, "Frank", /*paid=*/ true);
deepJS.addStudent(410, "Suzy", /*paid=*/ true);
deepJS.addStudent(709, "Brian", /*paid=*/ false);
deepJS.addStudent(105, "Henry", /*paid=*/ false);
deepJS.addStudent(502, "Mary", /*paid=*/ true);
deepJS.addStudent(664, "Bob", /*paid=*/ false);
deepJS.addStudent(250, "Peter", /*paid=*/ true);
deepJS.addStudent(375, "Sarah", /*paid=*/ true);
deepJS.addStudent(867, "Greg", /*paid=*/ false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/

// ********************************

function defineWorkshop() {
    var currentEnrollment = [];
    var studentRecords = [];

    var publicAPI = {
        addStudent,
        enrollStudent,
        printCurrentEnrollment,
        enrollPaidStudents,
        remindUnpaidStudents,
    };
    return publicAPI;

    // ********************************

    function addStudent(id, name, paid) {
        studentRecords.push({ id, name, paid });
    }

    function enrollStudent(id) {
        if (!currentEnrollment.includes(id)) {
            currentEnrollment.push(id);
        }
    }

    function printCurrentEnrollment() {
        printRecords(currentEnrollment);
    }

    function enrollPaidStudents() {
        currentEnrollment = paidStudentsToEnroll();
        printCurrentEnrollment();
    }

    function remindUnpaidStudents() {
        remindUnpaid(currentEnrollment);
    }

    function getStudentFromId(studentId) {
        return studentRecords.find(matchId);

        // *************************

        function matchId(record) {
            return record.id == studentId;
        }
    }

    function printRecords(recordIds) {
        var records = recordIds.map(getStudentFromId);

        records.sort(sortByNameAsc);

        records.forEach(printRecord);
    }

    function sortByNameAsc(record1, record2) {
        if (record1.name < record2.name) return -1;
        else if (record1.name > record2.name) return 1;
        else return 0;
    }

    function printRecord(record) {
        console.log(
            `${record.name} (${record.id}): ${
                record.paid ? "Paid" : "Not Paid"
            }`
        );
    }

    function paidStudentsToEnroll() {
        var recordsToEnroll = studentRecords.filter(needToEnroll);

        var idsToEnroll = recordsToEnroll.map(getStudentId);

        return [...currentEnrollment, ...idsToEnroll];
    }

    function needToEnroll(record) {
        return record.paid && !currentEnrollment.includes(record.id);
    }

    function getStudentId(record) {
        return record.id;
    }

    function remindUnpaid(recordIds) {
        var unpaidIds = recordIds.filter(notYetPaid);

        printRecords(unpaidIds);
    }

    function notYetPaid(studentId) {
        var record = getStudentFromId(studentId);
        return !record.paid;
    }
}
