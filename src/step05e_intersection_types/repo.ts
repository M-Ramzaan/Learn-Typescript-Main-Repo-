interface morningFaculty {
  mTeacherId: number;
  mTeacherName: string;
}

interface eveningFaculty {
  eTeacherId: number;
  eTeacherName: string;
}

type faculty = morningFaculty & eveningFaculty;

let teachers: faculty = {
  mTeacherId: 1,
  mTeacherName: "Zeeshan",
  eTeacherId: 2,
  eTeacherName: "Hassan",
};

console.log(teachers.mTeacherName);
console.log(teachers["mTeacherId"]);
console.log(teachers.eTeacherName);
console.log(teachers["eTeacherId"]);
