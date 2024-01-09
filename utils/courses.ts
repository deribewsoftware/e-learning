interface Course {
  id: string;
  title: string;
  subjects: string[];
}

const courses: Course[] = [
  {
    id: '1',
    title: 'HighSchool',
    subjects: ['Biology', 'English', 'Civics', 'Mathematics', 'History', 'Geography', 'Chemistry', 'SAT', 'Physics'],
  },
  {
    id: '2',
    title: 'Freshman',
    subjects: ['Ethiopian University'],
  },
  {
    id: '3',
    title: 'Development',
    subjects: ['Web Development', 'Mobile App Development', 'Game Development'],
  },
  {
    id: '4',
    title: 'IT and Software Engineering',
    subjects: ['Computer Science Fundamentals', 'Algorithms and Data Structures', 'Software Design Patterns'],
  },
  {
    id: '5',
    title: 'Business Management',
    subjects: ['Marketing Strategies', 'Financial Accounting', 'Operations Management'],
  },
  {
    id: '6',
    title: 'Art and Design',
    subjects: ['Drawing and Illustration', 'Graphic Design', 'Digital Art'],
  },
  {
    id: '7',
    title: 'Personal Development',
    subjects: ['Goal Setting', 'Time Management', 'Communication Skills'],
  },
  {
    id: '8',
    title: 'Biology',
    subjects: ['Cell Biology', 'Genetics', 'Ecology'],
  },
  {
    id: '9',
    title: 'Finance and Investment',
    subjects: ['Financial Planning', 'Investment Analysis', 'Risk Management'],
  },
  // Add more courses and subjects as needed
];

export default courses;
