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