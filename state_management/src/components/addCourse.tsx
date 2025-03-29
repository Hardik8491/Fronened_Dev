import React, { useState } from 'react';
import useCourseStore from '../courseStore';


const AddCourse: React.FC = () => {
  const [title, setTitle] = useState('');
  const addCourse = useCourseStore((state) => state.addCourse);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addCourse({ id: Date.now().toString(), title, completed: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter course title"
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourse;
