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
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/course")
  const course = await response.json()

  return {
    props: course
  }
}