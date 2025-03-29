import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Define the Course type
interface Course {
  id: string;
  title: string;
  completed: boolean;
}

// Define the Zustand store type
interface CourseStore {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (courseId: string) => void;
  toggleCourse: (courseId: string) => void;
}

// Zustand store implementation
const useCourseStore = create<CourseStore>()(
  devtools(
    persist(
      (set) => ({
        courses: [],
        addCourse: (course) => {
          set((state) => ({
            courses: [course, ...state.courses],
          }));
        },
        removeCourse: (courseId) => {
          set((state) => ({
            courses: state.courses.filter((course) => course.id !== courseId),
          }));
        },
        toggleCourse: (courseId) => {
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === courseId ? { ...course, completed: !course.completed } : course
            ),
          }));
        },
      }),
      { name: 'courses' } // Key for persisting in localStorage
    )
  )
);

export default useCourseStore;
