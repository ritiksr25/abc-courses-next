import Layout from "../../components/Layout";
import CourseCard from "../../components/CourseCard";
import axios from "axios";
import { FETCH_COURSE_API } from "../../constants/api";

const Course = (props) => {
  return (
    <Layout>
      <>
        {props.course ? (
          <CourseCard course={props.course} />
        ) : (
          <div className="error-alert"><p>Oops! Something went wrong :(</p></div>
        )}
      </>
    </Layout>
  );
};

Course.getInitialProps = async (context) => {
  let course;
  try {
    const res = await axios.get(
      `${FETCH_COURSE_API}/${context.req.url.split("/")[2]}`
    );
    course = res.data.data.courses;
  } catch (err) {
    console.log(err);
  }
  return {
    course,
  };
};

export default Course;
