import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <img src="/images/BA-Courses.jpg" width={200} />
            <div>
              <h5> CS3000 Object Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Learning how to code  </p>
              <button> Go </button>
            </div>
        <div className="wd-dashboard-course"> ... </div>
        <img src="/images/image2.jpg" width={200} />
            <div>
              <h5> CS3500 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Learning Algorithms  </p>
              <button> Go </button>
            </div>
            <div className="wd-dashboard-course"> ... </div>
        <img src="/images/image3.jpg" width={200} />
            <div>
              <h5> ARTF1234 Color and Composition</h5>
              <p className="wd-dashboard-course-title">
                Learn about color  </p>
              <button> Go </button>
            </div>
            <div className="wd-dashboard-course"> ... </div>
        <img src="/images/image4.jpg" width={200} />
            <div>
              <h5> ARTF Abstract Art</h5>
              <p className="wd-dashboard-course-title">
                Learn how to draw abstract  </p>
              <button> Go </button>
            </div>
            <div className="wd-dashboard-course"> ... </div>
        <img src="/images/image5.jpg" width={200} />
            <div>
              <h5> MATH2344 Stats</h5>
              <p className="wd-dashboard-course-title">
                Statistics  </p>
              <button> Go </button>
            </div>
            <div className="wd-dashboard-course"> ... </div>
        <img src="/images/image6.jpg" width={200} />
            <div>
              <h5> MATH6762 Math Reasoning</h5>
              <p className="wd-dashboard-course-title">
                Proofs and Math  </p>
              <button> Go </button>
            </div>

            <div className="wd-dashboard-course"> ... </div>
        <img src="/images/image7.jpg" width={200} />
            <div>
              <h5> ENG2344 Writing 1</h5>
              <p className="wd-dashboard-course-title">
                Basics of Writing Essays  </p>
              <button> Go </button>
            </div>

      </div>
    </div>
);}
