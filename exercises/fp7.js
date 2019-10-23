const studentGrades = [
  { name: 'Joe', grade: 88 },
  { name: 'Jen', grade: 94 },
  { name: 'Steph', grade: 77 },
  { name: 'Allen', grade: 60 },
  { name: 'Gina', grade: 54 }
];

const prefixes = {
  A: 'Excellent job',
  B: 'Nice job',
  C: 'Well done',
  D: 'What happened',
  F: 'Not good'
};

const getGradeLetter = grade => {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

const feedback = prefixes => student => {
  const grade = getGradeLetter(student.grade);
  const message = prefixes[grade];
  return `${message}, ${student.name}, you got a ${student.grade}`;
};

const studentFeedbackArray = studentGrades.map(feedback(prefixes));

console.log(studentFeedbackArray);
