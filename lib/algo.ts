export const getAlgo = (argumentsa) => {
  // const argumentsa = {
  //   Orgination_name: "Pulchowk campus",
  //   duration: 12, //in months
  //   working_days: 6, //in days
  //   class_starts: "1970-01-01T10:00:00",
  //   class_ends: "1970-01-01T16:00:00",
  //   period_intervals: 45, //minutes

  //   //subject credit_hours:periods/week
  //   subjects: [
  //     { name: "Maths", creditHr: 10, isLab: false },
  //     { name: "Chemistry", creditHr: 8, isLab: false },
  //     { name: "Numerical Methods", creditHr: 8, isLab: false },
  //     { name: "Electrical Machines", creditHr: 8, isLab: false },
  //     { name: "Discrete Structure", creditHr: 6, isLab: false },
  //     { name: "Microprocessors", creditHr: 8, isLab: false },
  //     { name: "DSA", creditHr: 6, isLab: false },
  //     { name: "Instrumentation", creditHr: 8, isLab: false },
  //     { name: "Applied Mathematics", creditHr: 8, isLab: false },
  //     { name: "Artificial Intelligence", creditHr: 8, isLab: false },
  //     { name: "Operating System", creditHr: 8, isLab: false },
  //     { name: "Engineering Economics", creditHr: 8, isLab: false },
  //     { name: "Basic Electronics", creditHr: 8, isLab: false },
  //     { name: "Workshop Technology", creditHr: 2, isLab: false },
  //     { name: "Thermodynamics", creditHr: 10, isLab: false },
  //     { name: "Object Oriented Analysis", creditHr: 4, isLab: false },
  //     { name: "Database Management System", creditHr: 8, isLab: false },
  //     { name: "Embedded System", creditHr: 4, isLab: false },
  //     { name: "conversation", creditHr: 8, isLab: true },
  //     { name: "ECM", creditHr: 8, isLab: true },
  //     { name: "EDC", creditHr: 8, isLab: true },
  //     { name: "Social", creditHr: 8, isLab: true },
  //     { name: "Nepali", creditHr: 6, isLab: true },
  //     { name: "General Knowledge", creditHr: 8, isLab: true },
  //     { name: "Population", creditHr: 8, isLab: true },
  //     { name: "Business", creditHr: 2, isLab: true },
  //     { name: "Account", creditHr: 10, isLab: true },
  //     { name: "english", creditHr: 4, isLab: true },
  //     { name: "ECT", creditHr: 8, isLab: true },
  //     { name: "Electromagnetics", creditHr: 8, isLab: true },
  //     { name: "physics", creditHr: 4, isLab: true },
  //   ],
  //   classrooms: [
  //     {
  //       name: "class1",
  //       id: 1,
  //       subjects: [
  //         "Basic Electronics",
  //         "conversation",
  //         "Account",
  //         "Business",
  //         "Population",
  //         "Chemistry",
  //         "Maths",
  //         "Thermodynamics",
  //         "Workshop Technology",
  //       ],
  //       sections: 1,
  //       subSections: 2,
  //     },
  //     {
  //       name: "class2",
  //       id: 2,
  //       subjects: [
  //         "Basic Electronics",
  //         "conversation",
  //         "Account",
  //         "Business",
  //         "Population",
  //         "Chemistry",
  //         "Maths",
  //         "Thermodynamics",
  //         "Workshop Technology",
  //       ],
  //       sections: 1,
  //       subSections: 2,
  //     },
  //     {
  //       name: "class3",
  //       id: 3,
  //       subjects: [
  //         "Applied Mathematics",
  //         "ECM",
  //         "Nepali",
  //         "EDC",
  //         "Social",
  //         "General Knowledge",
  //         "Discrete Structure",
  //         "DSA",
  //         "Electrical Machines",
  //         "Instrumentation",
  //         "Microprocessors",
  //         "Numerical Methods",
  //       ],
  //       sections: 1,
  //       subSections: 2,
  //     },
  //     {
  //       name: "class4",
  //       id: 4,
  //       subjects: [
  //         "Applied Mathematics",
  //         "ECM",
  //         "Nepali",
  //         "EDC",
  //         "Social",
  //         "General Knowledge",
  //         "Discrete Structure",
  //         "DSA",
  //         "Electrical Machines",
  //         "Instrumentation",
  //         "Microprocessors",
  //         "Numerical Methods",
  //       ],
  //       sections: 1,
  //       subSections: 2,
  //     },
  //     {
  //       name: "class5",
  //       id: 5,
  //       subjects: [
  //         "Artificial Intelligence",
  //         "Engineering Economics",
  //         "Operating System",
  //         "Object Oriented Analysis",
  //         "english",
  //         "Embedded System",
  //         "physics",
  //         "Database Management System",
  //         "Electromagnetics",
  //         "ECT",
  //       ],
  //       sections: 1,
  //       subSections: 2,
  //     },
  //   ],
  //   teachers: [
  //     {
  //       name: "teacher1",
  //       subjects: [
  //         {
  //           subject: "Thermodynamics",
  //           class: "class1",
  //           credit: 8,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },

  //     {
  //       name: "teacher2",
  //       subjects: [
  //         { subject: "Maths", class: "class1", credit: 5, isLab: false },
  //         { subject: "Maths", class: "class2", credit: 5, isLab: false },
  //       ],
  //       max_period: 5,
  //     },

  //     {
  //       name: "teacher3",
  //       subjects: [
  //         {
  //           subject: "Basic Electronics",
  //           class: "class1",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Basic Electronics",
  //           class: "class2",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Population",
  //           class: "class2",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher4",
  //       subjects: [
  //         { subject: "Chemistry", class: "class1", credit: 2, isLab: false },
  //         {
  //           subject: "Engineering Economics",
  //           class: "class5",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher5",
  //       subjects: [
  //         { subject: "Maths", class: "class2", credit: 5, isLab: false },
  //         { subject: "Maths", class: "class1", credit: 5, isLab: false },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher6",
  //       subjects: [
  //         {
  //           subject: "Artificial Intelligence",
  //           class: "class5",
  //           credit: 4,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Electromagnetics",
  //           class: "class5",
  //           credit: 5,
  //           isLab: false,
  //         },

  //         { subject: "Maths", class: "class2", credit: 5, isLab: false },
  //         { subject: "Maths", class: "class1", credit: 5, isLab: false },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher7",
  //       subjects: [
  //         { subject: "Chemistry", class: "class1", credit: 5, isLab: false },

  //         {
  //           subject: "Database Management System",
  //           class: "class5",
  //           credit: 4,
  //           isLab: false,
  //         },
  //         {
  //           subject: "ECT",
  //           class: "class5",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher8",
  //       subjects: [
  //         {
  //           subject: "Population",
  //           class: "class1",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Basic Electronics",
  //           class: "class1",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Basic Electronics",
  //           class: "class2",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher9",
  //       subjects: [
  //         {
  //           subject: "Business",
  //           class: "class1",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Business",
  //           class: "class2",
  //           credit: 4,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Workshop Technology",
  //           class: "class1",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Workshop Technology",
  //           class: "class2",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },

  //     {
  //       name: "teacher11",
  //       subjects: [
  //         {
  //           subject: "Account",
  //           class: "class1",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Account",
  //           class: "class2",
  //           credit: 4,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher12",
  //       subjects: [
  //         { subject: "conversation", class: "class1", credit: 5, isLab: false },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher13",
  //       subjects: [
  //         { subject: "conversation", class: "class2", credit: 5, isLab: false },
  //         { subject: "Chemistry", class: "class2", credit: 5, isLab: false },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher14",
  //       subjects: [
  //         { subject: "Maths", class: "class2", credit: 5, isLab: false },

  //         {
  //           subject: "Object Oriented Analysis",
  //           class: "class5",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher15",
  //       subjects: [
  //         { subject: "Chemistry", class: "class2", credit: 5, isLab: false },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher16",
  //       subjects: [
  //         {
  //           subject: "Embedded System",
  //           class: "class5",
  //           credit: 5,
  //           isLab: false,
  //         },

  //         {
  //           subject: "physics",
  //           class: "class5",
  //           credit: 5,
  //           isLab: false,
  //         },

  //         {
  //           subject: "Thermodynamics",
  //           class: "class2",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher17",
  //       subjects: [
  //         {
  //           subject: "Applied Mathematics",
  //           class: "class1",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Applied Mathematics",
  //           class: "class2",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher18",
  //       subjects: [
  //         {
  //           subject: "General Knowledge",
  //           class: "class3",
  //           credit: 6,
  //           isLab: false,
  //         },
  //         {
  //           subject: "General Knowledge",
  //           class: "class4",
  //           credit: 6,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Instrumentation",
  //           class: "class3",
  //           credit: 6,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Instrumentation",
  //           class: "class4",
  //           credit: 6,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher19",
  //       subjects: [
  //         {
  //           subject: "Applied Mathematics",
  //           class: "class3",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Applied Mathematics",
  //           class: "class4",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher20",
  //       subjects: [
  //         {
  //           subject: "english",
  //           class: "class5",
  //           credit: 5,
  //           isLab: false,
  //         },

  //         {
  //           subject: "Numerical Methods",
  //           class: "class3",
  //           credit: 8,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Numerical Methods",
  //           class: "class4",
  //           credit: 8,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Operating System",
  //           class: "class5",
  //           credit: 8,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher21",
  //       subjects: [
  //         {
  //           subject: "Social",
  //           class: "class4",
  //           credit: 8,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Social",
  //           class: "class5",
  //           credit: 8,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Microprocessors",
  //           class: "class5",
  //           credit: 9,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher22",
  //       subjects: [
  //         {
  //           subject: "ECM",
  //           class: "class4",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "ECM",
  //           class: "class5",
  //           credit: 4,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Numerical Methods",
  //           class: "class5",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher23",
  //       subjects: [
  //         { subject: "Nepali", class: "class4", credit: 5, isLab: false },
  //         { subject: "Nepali", class: "class3", credit: 5, isLab: false },
  //         { subject: "DSA", class: "class3", credit: 5, isLab: false },
  //         { subject: "DSA", class: "class4", credit: 5, isLab: false },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher24",
  //       subjects: [
  //         {
  //           subject: "Discrete Structure",
  //           class: "class3",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Discrete Structure",
  //           class: "class4",
  //           credit: 5,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //     {
  //       name: "teacher25",
  //       subjects: [
  //         {
  //           subject: "EDC",
  //           class: "class4",
  //           credit: 5,
  //           isLab: false,
  //         },
  //         {
  //           subject: "EDC",
  //           class: "class3",
  //           credit: 4,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Electrical Machines",
  //           class: "class3",
  //           credit: 4,
  //           isLab: false,
  //         },
  //         {
  //           subject: "Electrical Machines",
  //           class: "class4",
  //           credit: 4,
  //           isLab: false,
  //         },
  //       ],
  //       max_period: 5,
  //     },
  //   ],
  // };

  const calcTotalHoursPerDay = (start, end) => {
    let date1 = new Date(start).getTime();
    let date2 = new Date(end).getTime();
    let date = (date2 - date1) / (1000 * 60 * 60);
    return date;
  };
  const totalHoursPerDay = calcTotalHoursPerDay(
    argumentsa.class_starts,
    argumentsa.class_ends
  );

  //caclulation of no of periods of a class per day
  const calculatePeriodsPerDayPerClass = (
    totalTime,
    period_intervals,
    breakTime
  ) => {
    return Math.floor((totalTime * 60 - breakTime) / period_intervals);
  };
  const periodsPerDay = calculatePeriodsPerDayPerClass(
    totalHoursPerDay,
    argumentsa.period_intervals,
    45
  );

  //calculation of total classrooms in organization
  const totalClassrooms = function (classes) {
    return classes?.reduce((acc, cur) => {
      return acc + cur.sections;
    }, 0);
  };
  const totalclasses = totalClassrooms(argumentsa.classrooms);

  //Generation of routine Layout-> [[class1][class2][class3]...] classi->[[section1][section2]...]
  const generateRoutineLayout = (periodsPerDays, working_days, classes) => {
    let routinesArray = [];
    for (let h = 0; h < classes.length; h++) {
      let classno = [];
      for (let i = 0; i < classes[h].sections; i++) {
        let routine = [];
        for (let j = 0; j < working_days; j++) {
          let routineRow = [];
          for (let k = 0; k < periodsPerDays; k++) {
            routineRow.push({ periodNo: k, period: 0 });
          }
          routine.push(routineRow);
        }
        classno.push(routine);
      }

      routinesArray.push(classno);
    }
    return routinesArray;
  };
  const routineLayout = generateRoutineLayout(
    periodsPerDay,
    argumentsa.working_days,
    argumentsa.classrooms
  );
  console.log(routineLayout);

  //Generation of all possible routine cell combination->[[teacherName,className,subject,classId]]
  function createAllPossibleCombination(teachers) {
    let allPossible = [];
    teachers.forEach((teacher) => {
      teacher.subjects.forEach((sub) => {
        let classId;
        for (let i = 0; i < argumentsa.classrooms.length; i++) {
          if (argumentsa.classrooms[i].name == sub.class) {
            classId = argumentsa.classrooms[i].id;
          }
        }
        if (sub.isLab) {
          allPossible.push({
            teacher_name: teacher.name,
            class: sub.class,
            subject: sub.subject,
            classId,
            isLab: true,
            isDone: false,
            teacherCrd: teacher.max_period,
          });
        }
        allPossible.push({
          teacher_name: teacher.name,
          class: sub.class,
          subject: sub.subject,
          classId,
          subjectCrd: sub.credit,
          teacherCrd: teacher.max_period,
          isLab: false,
        });
      });
    });
    return allPossible;
  }
  const allPossiblecomb = createAllPossibleCombination(argumentsa.teachers);
  console.log("all combn", allPossiblecomb);

  // function to check validity of input to routine layout
  const isValid = (routineLayout, classno, section, days, periods, val) => {
    if (val.classId == classno + 1) {
      //checking if teacher is repeated at same time in different classes
      for (let i = 0; i < argumentsa.classrooms.length; i++) {
        for (let j = 0; j < argumentsa.classrooms[i].sections; j++) {
          if (
            routineLayout[i][j][days][periods].period.teacher_name ==
            val.teacher_name
          )
            return false;
        }
      }

      //checking if subject is repeated more than 2 times in a class in same day
      let count = 0;
      for (let i = 0; i < periodsPerDay; i++) {
        if (
          routineLayout[classno][section][days][i].period.teacher_name ==
          val.teacher_name
        )
          count++;
        if (count == 2) return false;
      }

      if (val.isLab) {
        if (val.isDone == true || periods != 0 || periods != periodsPerDay - 3)
          return false;
      } else {
        if (val.subjectCrd <= 0) return false;
        if (val.teacherCrd <= 0) return false;
      }

      return true;
    }

    return false;
  };

  const lastClass = argumentsa.classrooms.length;
  const lastSection = argumentsa.classrooms[lastClass - 1].sections;

  //Main function for backtrack
  const backtrack = (
    routineLayout,
    classno,
    section,
    days,
    periods,
    argumentsa,
    allPossiblecomb
  ) => {
    //checking if routine layout is completed
    if (
      routineLayout[lastClass - 1][lastSection - 1][
        argumentsa.working_days - 1
      ][periodsPerDay - 1].period !== 0
    ) {
      return true;
    }

    //calculation of new input to recursive function
    let nclassno, nsection, ndays, nperiods; // n implies new
    nsection = section + 1;
    nclassno = classno;
    ndays = days;
    nperiods = periods;
    if (nsection == argumentsa.classrooms[classno].sections) {
      nsection = 0;
      nclassno += 1;
      ndays = days;
      nperiods = periods;
    }
    if (nclassno == argumentsa.classrooms.length) {
      nclassno = 0;
      nperiods += 1;
    }
    if (nperiods == periodsPerDay) {
      nperiods = 0;
      ndays = days + 1;
      for (let i = 0; i < allPossiblecomb.length; i++) {
        allPossiblecomb[i].teacherCrd = 5;
      }
    }
    if (routineLayout[classno][section][days][periods].period == 0) {
      for (let i = 0; i < allPossiblecomb.length; i++) {
        //calling for validating input
        if (
          isValid(
            routineLayout,
            classno,
            section,
            days,
            periods,
            allPossiblecomb[i]
          )
        ) {
          console.log("Valid");
          if (allPossiblecomb[i].isLab) {
            console.log("lalla", periods);
            // allPossiblecomb[i].teacherCrd -= 3;
            // allPossiblecomb[i].isDone = true;
            for (let j = 0; j < 3; j++) {
              routineLayout[classno][section][days][periods + j].period =
                allPossiblecomb[i];
            }
          } else {
            allPossiblecomb[i].subjectCrd--;
            allPossiblecomb[i].teacherCrd--;
            //If all conditions of isValid functions are fulfilled following code is executed
            routineLayout[classno][section][days][periods].period =
              allPossiblecomb[i];
          }

          let res = backtrack(
            routineLayout,
            nclassno,
            nsection,
            ndays,
            nperiods,
            argumentsa,
            allPossiblecomb
          );
          return res;
        }
      }
    } else {
      backtrack(
        routineLayout,
        nclassno,
        nsection,
        ndays,
        nperiods,
        argumentsa,
        allPossiblecomb
      );
    }
    return false;
  };

  const res = backtrack(routineLayout, 0, 0, 0, 0, argumentsa, allPossiblecomb);
  console.log("is Possible->", res);

  return { res, routineLayout };
};
