import { Button, Form, FormControl, FormSelect, ListGroup } from "react-bootstrap";

export default function AssignmentEditor() {
     return (
          <div id="wd-assignments-editor" className="bring-over">
               <h3>
                    <label htmlFor="wd-name">Assignment Name</label></h3>

               <FormControl type="text" placeholder="A1 - ENV + HTML" /> <br />
               <FormControl as="textarea"  rows={14} placeholder="The assignment is available online. Submit a link to the landing page of the landing page should be the Kambaz application with a link to the Lab exercises.
Lab 1 should be the landing page of the Lab exercises and should include the following: Your full name and section. Links to each of the lab assignments. Link to the Kambaz application. Links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page."/>
               <table>
                    <br />
                    <br /><tr><td valign="top" align="right" >
                         <label htmlFor="wd-points">Points</label></td>
                         <td><FormControl type="text" className="center-box" value={100} />
                         </td>
                    </tr><br /><tr>
                         <td align="right" valign="top"><label htmlFor="wd-group">Assignment Group</label>
                         </td>

                         <td><FormSelect className="center-box" >
                              <option selected>ASSIGNMENTS</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                         </FormSelect>
                         </td>
                    </tr>
                    <br />
                    <tr>
                         <td align="right" valign="top">
                              <label htmlFor="wd-display-grade-as">Display Grade as</label>
                         </td>
                         <td><FormSelect className="center-box" >
                              <option selected>Percentage</option>
                              <option value="1">Letter</option>
                              <option value="2">Number</option>
                         </FormSelect>
                         </td>
                    </tr>
                    <br />


                    <tr>
                         <td align="right" valign="top" >
                              <label htmlFor="wd-submission-type" >Submission Type</label>
                         </td>
                         <div className="card move-card h-100">
                              <div className="center-container"> <FormSelect  className="small-dropdown">
                                   <option selected>Online</option>
                                   <option value="1">Paper</option>
                                   <option value="2">InPerson</option>
                              </FormSelect></div>

                         <br />
                                   <div className="center-box-next">
                                        <td align="left" valign="top">
                                             <label htmlFor="wd-text-entry">Online Entry Options</label><br /><br />

                                             <Form>
                                                  <Form.Check
                                                       type="checkbox"
                                                       label="Text Entry"
                                                       id="wd-text-entry"
                                                  /><br />
                                                  <Form.Check
                                                       type="checkbox"
                                                       label="Website URL"
                                                       id="wd-website-url"
                                                  /><br />
                                                  <Form.Check
                                                       type="checkbox"
                                                       label="Media Recordings"
                                                       id="wd-media-recordings"
                                                  /><br />
                                                  <Form.Check
                                                       type="checkbox"
                                                       label="Student Annotation"
                                                       id="wd-student-annotation"
                                                  /><br />
                                                  <Form.Check
                                                       type="checkbox"
                                                       label="File Uploads"
                                                       id="wd-file-upload"
                                                  /><br/>
                                             </Form>
                                        </td>
                                   </div>
                              

                         </div>

                    </tr>


                    <br />


                    <tr>
                         <td align="right" valign="top">
                              <label htmlFor="wd-assign-to">Assign</label>
                         </td>
                    </tr>
                    <div className="card move-card-2 h-100"> <br />
                         <td className="center-box-next">
                              <label htmlFor="wd-assign-to">Assign To</label><br />
                              <td className="small-dropdown-2"><FormControl className="small-dropdown-2" type="text" value="Everyone" />
                              </td>

                         </td>
                         <tr>
                              {/* <td className="center-box-next"></td> */}
                              <td className="center-box-next"><br />
                                   <label htmlFor="wd-due-date">Due</label><br />
                                   <div className="small-dropdown-2"><FormControl className="small-dropdown-2" type="date" value="2024-05-13" id="wd-due-date" /></div>
                                   <br />
                              </td>

                         </tr>
                         <tr>

                              <td className="center-box-next">
                                   <label htmlFor="wd-available-from">Available from</label> <br />
                                   <div className="half-size"> <FormControl type="date" value="2024-05-06" id="wd-available-from" /><br /> </div>


                              </td >
                              <td className="center-box-next">
                                   <label htmlFor="wd-available-until">Until</label> <br />
                                   <div className="half-size"> <FormControl type="date" value="2024-05-20" id="wd-available-until" /><br /></div>

                              </td>
                         </tr>

                    </div>







               </table>

               <hr />
               <table width="100%" ><tr>
                    <td align="right">
                         <Button variant="secondary" size="sm" id="wd-add-module-btn">

                              Cancel
                         </Button> &nbsp;
                         <Button variant="danger" size="sm" id="wd-add-module-btn">

                              Save
                         </Button>
                    </td>
               </tr></table>

          </div>

     );
}

