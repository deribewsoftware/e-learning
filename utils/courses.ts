interface Course {
  title: string;
  subjects: string[];
}

const courses: Course[] = [

  {
    title: 'HighSchool',
    subjects: ['Biology', 'English', 'Civics','Mathematics','History','Geography','Chemistry','SAT','Physics'],
  },
  {
    title: 'Freshman',
    subjects: ['Ethiopian University',]
  },
  
  {
    title: 'Development',
    subjects: ['Web Development', 'Mobile App Development', 'Game Development']
  },
  {
    title: 'IT and Software Engineering',
    subjects: ['Computer Science Fundamentals', 'Algorithms and Data Structures', 'Software Design Patterns']
  },
  {
    title: 'Business Management',
    subjects: ['Marketing Strategies', 'Financial Accounting', 'Operations Management']
  },
  {
    title: 'Art and Design',
    subjects: ['Drawing and Illustration', 'Graphic Design', 'Digital Art']
  },
  {
    title: 'Personal Development',
    subjects: ['Goal Setting', 'Time Management', 'Communication Skills']
  },
  {
    title: 'Biology',
    subjects: ['Cell Biology', 'Genetics', 'Ecology']
  },
  {
    title: 'Finance and Investment',
    subjects: ['Financial Planning', 'Investment Analysis', 'Risk Management']
  },
  // Add more courses and subjects as needed
];

export default courses;
