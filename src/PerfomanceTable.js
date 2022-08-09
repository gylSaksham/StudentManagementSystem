import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';

export default function PerformanceTable(props) {
    const [enrollmentNumber, setEnrollmentNumber] = React.useState("");
    const [studentName, setStudentName] = React.useState("");
    const [course, setCourse] = React.useState(props.course);
    const [module, setModule] = React.useState(props.module);
    const [present, setPresent] = React.useState("");


    return (
        <div>
            <table id="students">
                <thead>
                    <tr>
                        <th>
                            Enrollment Number
                        </th>
                        <th>
                            Student Name
                        </th>
                        <th>
                            Course
                        </th>
                        <th>
                            Module
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={enrollmentNumber}
                                onChange={(e) => setEnrollmentNumber(e)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={studentName}
                                onChange={(e) => setStudentName(e)}
                            />
                        </td>
                        <td>
                            {course}
                        </td>
                        <td>
                            {module}
                        </td>
                        <td>
                            <RadioGroup>
                                <FormControlLabel
                                    value="Absent"
                                    control={<Radio checked={!present} />}
                                    label="Is In Progress"
                                    onChange={() => {
                                        setPresent(false);
                                    }}
                                />
                                <FormControlLabel
                                    value="Present"
                                    control={<Radio checked={present} />}
                                    label="Done"
                                    onChange={() => {
                                        setPresent(true);
                                    }}
                                />
                            </RadioGroup>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />

        </div>
    );
}