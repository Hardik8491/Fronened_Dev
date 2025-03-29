import React, { useEffect } from 'react';
import useCourseStore from '../courseStore';


const CoursesList: React.FC = () => {
  const { courses, toggleCourse, removeCourse } = useCourseStore();
  

  return (
    <div>
      <h2>Courses List</h2>
      { courses.length>0?
        <ul>
        {courses.map((course) => (
          <li key={course.id} style={{ textDecoration: course.completed ? 'line-through' : 'none' }}>
            {course.title}
            <button onClick={() => toggleCourse(course.id)}>✅</button>
            <button onClick={() => removeCourse(course.id)}>❌</button>
          </li>
        ))}
      </ul>
      :
      <p>No Courses Found</p>
      }
    </div>
  );
};

export default CoursesList;
