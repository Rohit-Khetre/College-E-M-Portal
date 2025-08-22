import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import SuperAdminNavbar from "../component/SuperAdminNavbar";
import SuperAdminSidebar from "../component/SuperAdminSidebar";
const ManageUsers = () => {
  return (
  <div className="d-flex flex-column flex-md-row">
{}
 <div className="d-none d-md-block"> <SuperAdminSidebar /> </div>
{}
 <div className="flex-grow-1"> <SuperAdminNavbar /> {}

    <Container fluid className="py-4">
      <h4 className="fw-bold mb-4">Manage Users</h4>
      
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ankita Shinde</td>
            <td>ankita@example.com</td>
            <td>Student</td>
            <td>
              <Button className="my-2" size="sm" variant="primary">Edit</Button> 
              <Button size="sm" variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </div>
    </div>
  );
};

export default ManageUsers;