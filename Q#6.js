const student = {
    name: "John",
    age: 20,
    grades: [85, 92, 78, 90],

    calculateAverage: function() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        const average = sum / this.grades.length;
        return average;
    }
};

console.log("Average Grade:", student.calculateAverage());
