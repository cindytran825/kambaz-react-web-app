import  { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
export default function ArrayStateVariable() {
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((item, i) => i !== index));
 };
 return (
     <div id="wd-array-state-variables">
       <h2>Array State Variable</h2>
       <Button onClick={addElement} className="btn btn-success">
         Add Element
       </Button>
 
       <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
         {array.map((item, index) => (
           <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
               <FormControl
              as="div" // Using div instead of input
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
             {item} 
             <Button onClick={() => deleteElement(index)} className="btn btn-danger">
               Delete
             </Button> </FormControl>
           </li>
         ))}
       </ul>
       <hr />
     </div>
   )
 ;}

