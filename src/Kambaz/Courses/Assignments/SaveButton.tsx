import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// {addAssignment}: {addAssignment:()=>void;}
export default function SaveButton({addAssignment}: {addAssignment:()=>void; } ){
     const { cid, aid } = useParams();
     const dispatch = useDispatch();
     // const assignments = db.assignments;
     const [assignmentTitle, setAssignmentTitle] = useState("");
     const [assignmentDes, setAssignmentDes] = useState("");
     const [assignmentPoints, setAssignmentPoints] = useState("");
     const [dueDate, setDueDate] = useState("");
     const [from, setFrom] = useState("");
     const [until, setUntil] = useState("");
     const { assignments } = useSelector((state: any) => state.assignmentReducer);
     const navigate = useNavigate();
     const handleSave = () => {
          const newAssignment = {
            _id: assignments?._id || uuidv4(),
            title: assignmentTitle,
            description: assignmentDes,
            points: assignmentPoints,
            dueDate: dueDate,
            getAvailableFrom: from,
            getAvailableUntil: until,
            course: cid,
            assignment: aid,
          };
          // if (assignments) {
          //      updateAssignment();
          //           // dispatch(addAssignment(newAssignment));
          //         } else {
          //           addAssignment();
          //         }
          addAssignment();
          navigate(`/Kambaz/Courses/${cid}/Assignments`); 
     }
     return (
     <div > 
   
   <Button className="btn btn-lg btn-danger" id="wd-add-module-btn" 
                             onClick={handleSave}>

                                   Save
                              </Button>
     
      </div>
     );}