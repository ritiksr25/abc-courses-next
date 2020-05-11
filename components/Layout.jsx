import Head from "next/head";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>ABC COURSES</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="ritiksr25" />
      <meta name="description" content="A Simple course website" />
      <meta name="keywords" content="ritiksr25, courses, abc courses" />
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:500"
        rel="stylesheet"
      />
    </Head>

    <Nav />
    <div className="container">
      <Header />
      {props.children}
    </div>
    <Footer />
    <style jsx global>{`
      body {
        overflow-x: hidden;
        font-family: "Montserrat";
      }

      .title {
        font-weight: 700;
        color: #a7a7a7;
      }

      .highlight {
        color: #4285f4;
      }

      .description {
        color: #838383;
        margin-top: 16px;
        font-size: 18px;
      }

      a,
      a:hover {
        transition: 0.3s all ease;
        color: #000000;
      }

      .sec_btn:hover,
      .custom_btn:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16),
          0px 4px 8px rgba(0, 0, 0, 0.23);
      }

      .sec_btn {
        font-size: 14px;
        font-weight: 600;
        padding: 8px 16px;
        border: 0;
        margin-left: 16px;
        transition: 0.3s all ease;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
          0px 2px 4px rgba(0, 0, 0, 0.23);
      }

      .sub_btn {
        font-size: 14px;
        font-weight: 600;
        padding: 8px 16px;
        border: 0;
        transition: 0.3s all ease;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
          0px 2px 4px rgba(0, 0, 0, 0.23);
      }

      .card {
        border: 0;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
          0px 2px 4px rgba(0, 0, 0, 0.23);
        padding: 16px;
        margin-bottom: 16px;
        color: #000000;
      }

      .custom_btn {
        color: #fff;
        border-color: #fff;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
          0px 2px 4px rgba(0, 0, 0, 0.23);
        padding: 8px 16px;
        background: #eb5757;
        background: -webkit-linear-gradient(to right, #000000, #eb5757);
        background: linear-gradient(to right, #000000, #eb5757);
      }

      .platform {
        top: 25px;
        right: -15px;
        font-size: 15px;
        border-radius: 2px;
        color: #fff;
        background: #eb5757;
        background: -webkit-linear-gradient(to right, #000000, #eb5757);
        background: linear-gradient(to right, #000000, #eb5757);
        text-align: center;
        position: absolute;
        box-shadow: 0px 2px 4px #707070;
        padding: 2px 12px;
      }

      li {
        list-style: none;
        font-size: 15px;
        color: #000000;
      }

      .custom_nav li a,
      .custom_nav li {
        font-size: 14px !important;
        transition: 0.3s all ease;
        color: #444444;
      }

      .custom_nav li:hover {
        border-radius: 4px;
        background: #f1f1f1;
      }

      .nav-item .active {
        border-radius: 4px;
        background: #f1f1f1;
      }

      .navbar-toggler {
        border: 0;
      }

      .error-alert {
        color: red;
        font-weight: 800;
        font-size: 20px;
      }

      @media (max-width: 424px) {
        .main__title {
          font-size: 24px;
        }
      }
    `}</style>
  </>
);

export default Layout;
