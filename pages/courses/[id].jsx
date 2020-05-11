import Layout from "../../components/Layout";
import CourseCard from "../../components/CourseCard";
import axios from "axios";
import { FETCH_COURSE_API } from "../../constants/api";

const Course = (props) => {
  return (
    <Layout>
      <>
        <CourseCard course={props.course} />
      </>
    </Layout>
  );
};

Course.getInitialProps = async (context) => {
  const res = await axios.get(
    `${FETCH_COURSE_API}/${context.req.url.split("/")[2]}`
  );
  return {
    course: res.data.data.courses,
  };
};

export default Course;
