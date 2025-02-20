// THE CONTEXT
// In the provided code, there's an array named students, containing objects representing students with their IDs, names, and grades.
// There's a function named updateStudentGrade that takes three parameters:
//      studentsArray (the array of students)
//      idToUpdate (the ID of the student to update)
//       newGrade (the new grade to assign to the student).

// YOUR JOB
// Your task is to complete the updateStudentGrade function, following the  steps

let students = [
  { id: 1, name: "Trang", grade: "A" },
  { id: 2, name: "Hai", grade: "B" },
  { id: 3, name: "Linh", grade: "C" },
];

function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
  // Step 1 : Use the findIndex method to find the index of the student with the provided ID in the studentsArray.
  const indexToUpdate = studentsArray.findIndex((student) => student.id === idToUpdate);

  if (indexToUpdate !== -1) {
    // Step 2 : If the student with the provided ID is found , create a copy of the original array using the spread operator.
    let updatedStudents = [...studentsArray];
    // Step 3 : Update the grade of the student at the found index in the copied array.
    updatedStudents[indexToUpdate].grade = newGrade;
    return updatedStudents;
  } else {
    // Step 4 :  If the student with the provided ID is not found, log a message indicating that the student was not found and return the original array unchanged.
    console.log("Student was not found");
    return studentsArray;
  }
}

// Original array of students
console.log("Original students array:");
console.log(students);

// Update the grade of the student with ID 2 to "A"
let updatedStudents = updateStudentGrade(students, 2, "A");

// Updated array of students
console.log("\nUpdated students array:");
console.log(updatedStudents);
