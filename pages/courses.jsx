import Layout from "../components/Layout";
import axios from "axios";
import AllCourses from "../components/AllCourses";
import { FETCH_COURSES_API } from "../constants/api";

const Courses = (props) => (
  <Layout>
    <>
      {props.courses && props.courses.length ? (
        <AllCourses courses={props.courses} />
      ) : (
        <div className="error-alert">
          <p>Nothing to see here :(</p>
        </div>
      )}
    </>
  </Layout>
);

Courses.getInitialProps = async () => {
  let courses;
  try {
    const res = await axios.get(FETCH_COURSES_API);
    courses = res.data.data.courses;
  } catch (err) {
    console.log(err);
  }
  return courses;
};

export default Courses;
