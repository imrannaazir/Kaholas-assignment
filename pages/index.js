import Course from "../components/Course";

const Home = (props) => {
  const course = props
  return (
    <>
      <Course course={course} />
    </>
  );
};

export default Home;
// Fetching data 
/* export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/course")
  const course = await response.json()

  return {
    props: course
  }
} */

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'course.json');
  const jsonData = await fsPromises.readFile(filePath);
  const course = JSON.parse(jsonData);

  return {
    props: course
  }
}