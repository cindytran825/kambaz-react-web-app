import { Button, FormControl, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoEllipsisVertical } from "react-icons/io5";
import * as db from "../../Databases";
import { useParams } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
     const assignments = db.assignments;
  return (
    <div >

      <div id="wd-assignments" className="p-2.5 position-relative mb-4 d-flex gap-2 align-items-center">
        <HiMagnifyingGlass
          className="position-absolute top-50 translate-middle-y ms-3"
        />
        <FormControl
          type="search"
          placeholder="Search..."
          className="ps-5"
        />
        <Button variant="danger" size="lg" className="me-1 d-flex align-items-center gap-1" id="wd-add-module-btn">
          <FaPlus className="fs-6" />
          Assignment
        </Button>

        <Button variant="secondary" size="lg" className="me-1 d-flex align-items-center gap-1" id="wd-add-module-btn">
          <FaPlus className="fs-6" />
          Group
        </Button>

      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        {/* <ListGroup.Item className="wd-module p-0 mb-5 fs-9 border-gray fs-5"> */}
          <div className="wd-title p-3 ps-2 bg-secondary fs-5"> <BsGripVertical className="me-2" /> ASSIGNMENTS
            <div className="float-end">
              <FaPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
         
          
          {assignments
  .filter((assignment: any) => assignment.course === cid)
  .map((assignment: any) => (
    <li key={assignment._id} className="wd-module list-group-item mb-0 fs-6 border-gray">
      <BsGripVertical className="fs-3 position-relative bring-down-first" />  
      <LiaClipboardListSolid className="me-3 text-success fs-2 position-relative bring-down" />
      <div className="position-absolute make-assignment-move translate-middle w-75">
        <a 
          className="wd-assignment-link text-black link-underline link-underline-opacity-0 " 
          href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
        >
          <br />
          <b>{assignment.title}</b>
        </a>
        <p>
          <text className="text-danger">Multiple Modules</text> | 
          <b> Not Available until </b> {assignment.availableDate} | 
          <b> Due </b> {assignment.dueDate} | 
          {assignment.points} pts
        </p>
      </div>
      <div className="bring-down-2">
        <LessonControlButtons /> 
      </div>
      <br /><br />
    </li>
  ))
}

      </ListGroup>





    </div>




  );
}