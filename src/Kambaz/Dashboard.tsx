import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./Databases";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: {
            image: string | undefined; _id: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
}) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src={course.image} variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <Button variant="primary"> Go </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);}
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//       <div id="wd-dashboard-courses">

//       <Row xs={1} md={5} className="g-4">
//       <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//           <Link to="/Kambaz/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//             <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
//             <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//       <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//           <Link to="/Kambaz/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//             <Card.Img variant="top" src="/images/BA-Courses.jpg" width="100%" height={160}/>
//             <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">CS3000 OOD</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">Learning how to code</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//       <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//           <Link to="/Kambaz/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//             <Card.Img variant="top" src="/images/image2.jpg" width="100%" height={160}/>
//             <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">CS3500 Algorithms</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">Learning Algorithms</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//       <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//           <Link to="/Kambaz/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//             <Card.Img variant="top" src="/images/image3.jpg" width="100%" height={160}/>
//             <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">ARTF1234 Color Comp</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">Learn about color</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//       <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//           <Link to="/Kambaz/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark ">
//             <Card.Img variant="top" src="/images/image4.jpg" width="100%" height={160}/>
//             <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">ARTF1000 Abstract Art</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">Learn how to draw abstract</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//       <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//           <Link to="/Kambaz/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//             <Card.Img variant="top" src="/images/image5.jpg" width="100%" height={160}/>
//             <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">MATH2344 Stats</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">Statistics</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//       <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//           <Link to="/Kambaz/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//             <Card.Img variant="top" src="/images/image6.jpg" width="100%" height={160}/>
//             <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">MATH6762 Math Reason</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">Proofs and Math</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//       <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//         <Card>
//           <Link to="/Kambaz/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//             <Card.Img variant="top" src="/images/image7.jpg" width="100%" height={160}/>
//             <Card.Body>
//               <Card.Title className="wd-dashboard-course-title">ENG2344 Writing</Card.Title>
//               <Card.Text  className="wd-dashboard-course-description">Basics of Writing Essays</Card.Text>
//               <Button variant="primary">Go</Button>
//             </Card.Body>
//           </Link>
//         </Card>
//       </Col>
//        </Row>
     

//       </div>
//    </div>
// );}
