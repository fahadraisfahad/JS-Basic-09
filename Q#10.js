const students = [
    { name: "Ali", grades: [85, 90, 78] },
    { name: "Umer" },
    { name: "Huzaifa", grades: [92, 88, 95] }
];

for (const student of students) {
    const averageGrade = student.grades?.length
        ? student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length
        : "N/A";

    console.log(`${student.name}: Average Grade - ${averageGrade}`);
}
