import React from "react";
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Media,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Transaction Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Transaction</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">User</th>
                    <th scope="col">Date</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Transaction Type</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Data */}
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <span className="mb-0 text-sm">#TXN1234567</span>
                      </Media>
                    </th>
                    <td>$2,500 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                    </td>
                    <td>John Doe</td>
                    <td>2024-01-15 14:30</td>
                    <td>Bank Transfer/UPI</td>
                    <td>Purchase</td>
                    <td>
                      <button type="button" className="btn btn-success">
                        View
                      </button>
                    </td>
                  </tr>
                  {/* Additional Rows as needed */}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>

        {/* User Status Table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">User Status</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Number of Vehicles</th>
                    <th scope="col">Status</th>
                    <th scope="col">Role</th>
                    <th scope="col">Last Order</th>
                    <th scope="col">Last Active</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Data */}
                  <tr>
                    <td>#USR001</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>3</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Active
                      </Badge>
                    </td>
                    <td>Admin</td>
                    <td>Order #ORD123456</td>
                    <td>2024-01-15 14:30</td>
                    <td>
                      <button type="button" className="btn btn-success">
                        View
                      </button>
                    </td>
                  </tr>
                  {/* Additional Rows as needed */}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>

        {/* Vehicle Documents Table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Vehicle Documents</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Document ID</th>
                    <th scope="col">Vehicle ID</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Document Type</th>
                    <th scope="col">Expiry Date</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Data */}
                  <tr>
                    <td>#DOC001</td>
                    <td>#VH001</td>
                    <td>John Doe</td>
                    <td>Registration</td>
                    <td>2025-12-31</td>
                    <td>
                      <button type="button" className="btn btn-success">
                        View
                      </button>
                    </td>
                  </tr>
                  {/* Additional Rows as needed */}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>

        {/* Drivers Table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Drivers</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Driver ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">License Number</th>
                    <th scope="col">License Expiry</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Data */}
                  <tr>
                    <td>#DRV001</td>
                    <td>Michael Brown</td>
                    <td>+1-234-567-890</td>
                    <td>LIC123456789</td>
                    <td>2026-05-15</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Active
                      </Badge>
                    </td>
                    <td>
                      <button type="button" className="btn btn-success">
                        View
                      </button>
                    </td>
                  </tr>
                  {/* Additional Rows as needed */}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
