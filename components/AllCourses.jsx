import Link from "next/link";

const AllCourses = (props) => (
  <>
    <div className="container pt-4 pb-4">
      <div className="row">
        <div className="col-sm-8 offset-sm-2 text-center">
          <h2>All Courses</h2>
        </div>
      </div>
    </div>
    <div
      className="container pt-4 pb-4"
      style={{
        backgroundColor: "#f5f4f4",
      }}
    >
      <div className="row">
        {props.courses.map((item) => (
          <>
            <div className="col-lg-4 mt-4">
              <img
                className="card-img-top"
                src={item.image ? item.image.url : "/banner.jpg"}
                height="200px"
                width="200px"
                alt="img"
              />
              <Link className="card" href={`/courses/${item._id}`}>
                <h4 className="card-title mt-2" style={{ cursor: "pointer" }}>
                  {item.title}
                </h4>
              </Link>
              <span className="platform">{item.category}</span>
              <p
                className="card-block"
                style={{
                  fontSize: "25px",
                  textAlign: "right",
                }}
              >
                <i className="fas fa-rupee-sign"></i> {item.price}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  </>
);

export default AllCourses;
