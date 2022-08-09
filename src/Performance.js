import React from 'react';
import { Container } from "@material-ui/core";
import './Performance.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, NavbarBrand } from 'react-bootstrap';
import Form from './Form';
import PerformanceTable from './PerfomanceTable';
import ViewTable from './ViewTable'

export default function Performance() {

    const [showAttendanceTable, setShowAttendanceTable] = React.useState(false);
    return (
        <div className="main-div">
            <div class="second-div">
                <span>
                    Centre for Development of Advanced Computing -2022
                </span>
            </div>
            <div class="second-div-2">
                <div className="mb-3" />
                <div className="mb-3">
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Button onClick={(e) => setShowAttendanceTable(true)}>Take Attendance</Button>
                            <Button onClick={(e) => setShowAttendanceTable(false)}>View Attendance</Button>
                        </Container>
                    </Navbar>
                    <div class="card">
                        <div class="card-body"><Form showForm={true} /></div>
                    </div>
                </div>
            </div>
            <div class="second-div-2">
                {showAttendanceTable === true ?
                    <PerformanceTable
                        course="jo bhi h"
                        module="jo bhi h"
                    />
                    : <ViewTable
                        course="jo bhi h"
                        module="jo bhi h"
                    />
                }
            </div>
        </div>
    );
}
