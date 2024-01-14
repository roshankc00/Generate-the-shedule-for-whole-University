"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {
  params: {
    instituteId: string;
    routineId: string;
  };
};

const SuccessPage = ({ params }: Props) => {
  const [isLoading, setisLoading] = useState(false);
  const [allData, setallData] = useState<any>([]);

  const getData = async () => {
    try {
      const response = await axios.get(`/api/routineinfo/${params.routineId}`);
      setallData(response?.data?.data?.routinedata?.routineLayout);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-10">
      <div className="">
        {allData &&
          allData.map((data, index) => (
            <div key={index}>
              {data.map((sectiondata, sectionIndex) => (
                <div className="mb-32" key={sectiondata[0]?.period?.section_id}>
                  <h1 className="text-2xl font-semibold capitalize ms-[40%] my-3">
                    {sectiondata[index][index]?.period.class}
                  </h1>
                  <table className="table-fixed w-full border-collapse border">
                    <thead>
                      <tr>
                        {/* Add more columns as needed */}
                        <th>10:00-10:45</th>
                        <th>10:45-11:30</th>
                        <th>11:30-12:15</th>
                        <th>12:15-1:00</th>
                        {/*  */}
                        <th>1:00-1:35</th>
                        <th>1:35-2:20</th>
                        <th>2:20-3:05</th>
                        <th>3:05-3:50</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sectiondata.map((per, rowIndex) => {
                        const uniqueTeacherNames = new Set<string>();
                        const uniqueSubjectNames = new Set<string>();

                        return (
                          <tr key={rowIndex}>
                            {per.map((innermost, colIndex) => {
                              const currentTeacherName =
                                innermost.period.teacher_name;
                              const currentSubjectName =
                                innermost.period.subject;

                              // Check if the teacher name is already displayed in this row
                              const shouldSpanTeacher =
                                !uniqueTeacherNames.has(currentTeacherName);
                              // Check if the subject is already displayed in this row
                              const shouldSpanSubject =
                                !uniqueSubjectNames.has(currentSubjectName);

                              // Add the current teacher name and subject to the unique sets
                              uniqueTeacherNames.add(currentTeacherName);
                              uniqueSubjectNames.add(currentSubjectName);

                              return (
                                <>
                                  <td
                                    key={colIndex}
                                    className={`border ${
                                      shouldSpanTeacher || shouldSpanSubject
                                        ? "col-span-2"
                                        : ""
                                    }`}
                                  >
                                    <div className="capitalize text-center p-3">
                                      <h1>{currentTeacherName}</h1>
                                      <h1>{currentSubjectName}</h1>
                                      {/* Other data you want to display */}
                                    </div>
                                  </td>
                                  {colIndex === 3 && (
                                    <td
                                      key={colIndex}
                                      className={`border ${
                                        shouldSpanTeacher || shouldSpanSubject
                                          ? "col-span-2"
                                          : ""
                                      }`}
                                    >
                                      <div className="capitalize text-center p-3">
                                        Break
                                      </div>
                                    </td>
                                  )}
                                </>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SuccessPage;
