const CourseCard = (props) => {
  let { course } = props;
  return (
    <div>
      <div
        className="container pt-4 pb-4"
        style={{
          backgroundColor: "#f5f4f4",
        }}
      >
        <div className="row">
          <div className="col-sm-8 offset-sm-2 text-center">
            <div className="card">
              <img
                className="card-img-top"
                src={course.image ? course.image.url : "/banner.jpg"}
                height="200px"
                width="200px"
                alt="img"
              />
              <h4 className="card-title mt-2">{course.title}</h4>
              <p className="card-block">
                <strong
                  className="description"
                  style={{
                    fontSize: "22px",
                    marginTop: "5px",
                  }}
                >
                  {" "}
                  {course.description}
                </strong>
              </p>
              <span className="platform">{course.category}</span>
              <p className="card-block">
                <i className="fas fa-cart-plus "></i> {course.sales} &nbsp;
                &nbsp;&nbsp; &nbsp;
                <i className="fas fa-plus-circle "></i>{" "}
                {course.createdAt.slice(0, 10)} <br />{" "}
              </p>
              <p
                className="card-block"
                style={{
                  fontSize: "25px",
                  textAlign: "right",
                }}
              >
                <i className="fas fa-rupee-sign"></i> {course.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
