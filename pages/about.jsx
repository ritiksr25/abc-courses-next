import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <p className="description" style={{ color: "#444444" }}>
        ABC Courses presents a huge collection of courses across multiple
        domains at lowest prices.
        <br />
        <br /> Features:
        <ul>
          <li>Variety of courses</li>
          <li>Variety of fields</li>
          <li>Lowest Prices</li>
          <li>One Time Purchase</li>
        </ul>
      </p>
    </Layout>
  );
}
