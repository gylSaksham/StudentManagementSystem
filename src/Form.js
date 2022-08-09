import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./Performance.css";
import Select from 'react-select';


export default function Form(props) {
    const [module, setModule] = React.useState("");
    const [course, setCourse] = React.useState("");
    const [date, setDate] = React.useState("");
    const [success, setSuccess] = React.useState(false);

    const handleSave = (module, course, date) => {

        module.label != "" && course.label != "" && date != "" ?
            setSuccess(true) : setSuccess(false)
    }

    const courses =
        [
            {
                value: 1,
                label: "PG-DAC"
            },
            {
                value: 2,
                label: "PG-DBDA"
            },
            {
                value: 3,
                label: "PG-DAI"
            },
            {
                value: 4,
                label: "PG-DMC"
            },
            {
                value: 5,
                label: "PG-DITISS"
            },
            {
                value: 6,
                label: "PG-DIOT"
            },
            {
                value: 7,
                label: "PG-DASSD"
            },
            {
                value: 8,
                label: "PG-DHPCSA"
            },
            {
                value: 9,
                label: "PG-DFBD"
            },
            {
                value: 10,
                label: "PG-DCSF"
            },
            {
                value: 11,
                label: "PG-DGi"
            },
        ];

    const modules =
        [
            {
                value: 1,
                label: "Operating System"
            },
            {
                value: 2,
                label: "OOPS With Java"
            },
            {
                value: 3,
                label: "ADS using Java"
            },
            {
                value: 4,
                label: "Database Technologies"
            },
            {
                value: 5,
                label: "Web Programming Technology"
            },
            {
                value: 6,
                label: "Web-based Java Programming"
            },
            {
                value: 7,
                label: "MS.Net Technologies"
            },
            {
                value: 8,
                label: "Software Development Methodologies"
            },
            {
                value: 9,
                label: "General Aptitude & Communication"
            },
            {
                value: 10,
                label: "Effective Communication"
            },
            {
                value: 11,
                label: "PG-DGi"
            },
        ];
    return (
        <>
            {success === true ?
                <div class="alert alert-success alert-dismissible  fade show" role="alert">
                    <strong>Success! </strong>  Performance added successfully
                    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>
                : ""}
            <div style={{ fontWeight: "600" }}>PERFORMANCE</div>
            <span style={{ fontStyle: "italic", fontWeight: "300" }}>Select Module, Course and Date of Performance</span>
            <form>
                <div className="fields">
                    <div style={{ "width": "30vw", "marginRight": "0.5rem" }} >
                        <label for="exampleFormControlInput1" className="form-label">
                            Module
                        </label>
                        <Select
                            className="form-control"
                            aria-label="Default select example"
                            value={module}
                            options={modules}
                            onChange={(e) => { setModule(e) }}
                            required
                        >
                        </Select>
                    </div>
                    <div style={{ "width": "30vw", "marginRight": "0.5rem" }} >
                        <label for="exampleFormControlInput1" className="form-label">
                            Course
                        </label>
                        <Select
                            className="form-control"
                            aria-label="Default select example"
                            value={course}
                            options={courses}
                            onChange={(e) => setCourse(e)}
                            required
                        >
                        </Select>
                    </div>
                    <div style={{ "width": "30vw", "marginRight": "0.5rem" }} >
                        <label for="exampleFormControlInput1" className="form-label">
                            Date
                        </label>
                        <input
                            className="form-control"
                            id="datetime-local"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        ></input>
                    </div>
                </div>
                <Button
                    autoFocus
                    onClick={() =>
                        handleSave(module, course, date)
                    }
                    variant="contained"
                    color="primary"
                >
                    Add
                </Button>
            </form>
        </>
    );
}
