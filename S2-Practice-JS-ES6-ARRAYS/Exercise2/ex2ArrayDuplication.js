// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
export const STUDENTS_DATA = [
  { firstName: "An", lastName: "Felix", age: 20, batch: 1 },
  { firstName: "Bình", lastName: "Yen", age: 22, batch: 2 },
  { firstName: "Cẩm", lastName: "Bodia", age: 21, batch: 1 },
  { firstName: "An", lastName: "San", age: 19, batch: 3 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first nam
 * @param {age} newAge  - the student new age
 */
export function updateStudentAge(firstName, lastName, newAge, batch) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName && s.lastName === lastName && s.batch === batch);
  if (student) {
    student.age = newAge;
  }
}

