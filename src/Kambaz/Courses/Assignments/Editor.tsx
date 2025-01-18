export default function AssignmentEditor() {
     return (
          <div id="wd-assignments-editor">
               <h3>
                    <label htmlFor="wd-name">Assignment Name</label></h3>
               <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
               <textarea id="wd-description" cols={50} rows={10}>
                    The assignment is available online Submit a link to the landing page of the landing page should be the Kambaz application with a link to the Lab exercises.
                    Lab 1 should be the landing page of the Lab exercises and should include the following:
                    Your full name and section
                    Links to each of the lab assignments
                    Link to the Kambaz application
                    Links to all relevant source code repositories
                    The Kambaz application should include a link to navigate back to the landing page.
               </textarea>
               <br/>
               <br/><table><tr><td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label></td>
                    <td><input id="wd-points" value={100} />
                    </td>
                    </tr><br /><tr>
                         <td align="right" valign="top"><label htmlFor="wd-group">Assignment Group</label>
                         </td>
                         
                         <td><select id="wd-group"><option>  ASSIGNMENTS</option></select>
                         </td>
                    </tr>
                    <br/>
                    <tr>
                         <td align="right" valign="top">
                              <label htmlFor="wd-display-grade-as">Display Grade as</label>
                         </td>
                         <td>
                              <select id="wd-display-grade-as"><option> Percentage</option></select>
                         </td>
                    </tr>
                    <br/>
                    <tr>
                         <td align="right" valign="top">
                              <label htmlFor="wd-submission-type" >Submission Type</label>
                         </td>
                         <td>
                              <select id="wd-submission-type"><option > Online</option></select>
                         </td>
                         
                    </tr>
                    <tr><br/>
        <td align="left" valign="top"> <br/>
            <label  htmlFor="wd-text-entry">Online Entry Options</label><br/>
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />

            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label><br />

            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
    </tr>
    <br/>

{/* <table width="100%"> */}
    <tr>
        <td align="right" valign="top"> 
            <label htmlFor="wd-assign-to">Assign</label>
        </td>
        <td align="left" valign="top"> 
            <label htmlFor="wd-assign-to">Assign To</label><br/>
            <input type="text" id="wd-assign-to" value="Everyone" />
        </td>
    </tr>

    <tr>
        <td align="right" valign="top"></td>
        <td align="left" valign="top"> 
            <label htmlFor="wd-due-date">Due</label><br/>
            <input type="date" value="2024-05-13" id="wd-due-date" /><br/>
        </td>
    </tr>

    <tr>
        <td align="left" valign="top"></td>
        <td align="left" valign="top"> 
            <label htmlFor="wd-available-from">Available from</label> <br/>
            <input type="date" value="2024-05-06" id="wd-available-from" /> 
            
        </td>
        <label htmlFor="wd-available-until">Until</label> <br/>
            <input type="date" value="2024-05-20" id="wd-available-until" />
    </tr>


{/* </table> */}


    
    </table>
    <hr />
    <table width="100%" ><tr>
        <td align="right"> 
        <button>Cancel</button>
        <button>Save</button>
        </td>
    </tr></table>
          </div>
    
     );
}

