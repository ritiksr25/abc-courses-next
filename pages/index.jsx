import Layout from "../components/Layout";
import axios from "axios";
import AllCourses from "../components/AllCourses";
import { FETCH_COURSES_API } from "../constants/api";

const Home = (props) => (
  <Layout>
    <>
      <AllCourses courses={props.courses} />
    </>
  </Layout>
);

Home.getInitialProps = async () => {
  const res = await axios.get(FETCH_COURSES_API);
  return {
    courses: res.data.data.courses,
  };
};
export default Home;
