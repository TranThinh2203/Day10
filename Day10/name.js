const students = [
    { name: "An", age: 20 },
    { name: "Bình", age: 21 },
    { name: "Châu", age: 20 },
    { name: "Dũng", age: 22 }
  ];
  
  let groupedByAge = {};
  
  students.forEach(student => {
    const exists = Object.keys(groupedByAge).some(age => age == student.age);
    if (!exists) {
      groupedByAge[student.age] = students
        .filter(s => s.age === student.age)
        .map(s => s.name);
    }
  });
  
  Object.keys(groupedByAge).forEach(age => {
    console.log(`Tuổi ${age}: ${groupedByAge[age].join(", ")}`);
  });
  