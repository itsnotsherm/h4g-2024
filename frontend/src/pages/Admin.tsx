import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, Container, Card, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const users = [
    { id: "1", name: "Sherman", email: "sherman@catchthemall.com", isAdmin: true },
    { id: "2", name: "Isabel", email: "isabel@catchemall.com", isAdmin: true},
    { id: "3", name: "Nathan", email: "nathan@catchthemall.com", isAdmin: true},
    { id: "4", name: "Timmy", email: "timmy@gmail.com", isAdmin: false},
];

const voucherTasks = [
    { user: "Timmy", task: "Catch 10 Pokemon", value: 2 },
];

const productRequests = [
    { user: "Timmy", product: "Charmander", quantity: 1, totalPrice: 10 },
];

const inventory = [
    { product: "Bulbasaur", quantity: 5 },
    { product: "Charmander", quantity: 0 },
    { product: "Squirtle", quantity: 3 },
];

const ManageUsers: React.FC<{ data: any }> = ({ data }) => {
    const handleSuspendUser = (userId: string) => {
        console.log("Suspend User", userId);
    };

    const handleResetPassword = (userId: string) => {
        console.log("Reset Password", userId);
    };

    return (
        <div>
            <TableContainer component={Paper} sx={{ backgroundColor: '#333333' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.length > 0 ? (
                            data.map((user: any) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        {user.name} {user.isAdmin && <span style={{ color: '#FFD770', fontWeight: 'bold' }}> [Admin]</span>}
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleSuspendUser(user.id)}
                                            sx={{ marginRight: 1 }}
                                        >
                                            Suspend
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="info"
                                            onClick={() => handleResetPassword(user.id)}
                                        >
                                            Reset Password
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} align="center">
                                    No users available.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

const VoucherTasks: React.FC<{ data: any }> = ({ data }) => {
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: '#333333' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Task Completed</TableCell>
                        <TableCell>Voucher Value ($)</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((task: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{task.user}</TableCell>
                            <TableCell>{task.task}</TableCell>
                            <TableCell>{task.value}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="success">Approve</Button>
                                <Button variant="contained" color="error" sx={{ marginLeft: 1 }}>Reject</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const ProductRequests: React.FC<{ data: any }> = ({ data }) => {
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: '#333333' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Product Requested</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total Price ($)</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((request: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{request.user}</TableCell>
                            <TableCell>{request.product}</TableCell>
                            <TableCell>{request.quantity}</TableCell>
                            <TableCell>{request.totalPrice}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="success">Approve</Button>
                                <Button variant="contained" color="error" sx={{ marginLeft: 1 }}>Reject</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const InventoryManagement: React.FC<{ data: any }> = ({ data }) => {
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: '#333333' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Available Quantity</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{item.product}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary">Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const Reports: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div style={{ marginLeft: '1rem' }}>
            <p><strong>Weekly Requests:</strong> {data.weeklyRequests}</p>
            <Button variant="contained" color="secondary">Generate Report</Button>
            <br /><br />
        </div>
    );
};

const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.isAdmin;
};

const getAdminData = async () => {
    return {
        users: users,
        voucherTasks: voucherTasks,
        productRequests: productRequests,
        inventory: inventory,
        reports: []
    };
};

const Admin: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [adminData, setAdminData] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin") === "true";

        if (!isAdmin) {
            navigate('/'); // Redirect non-admins
            return;
        }

        async function fetchData() {
            try {
                const data = await getAdminData();
                setAdminData(data);
            } catch (error) {
                console.error("Error fetching admin data", error);
            }
        }
        fetchData();
    }, [navigate]);

    const handleChange = (_event: React.SyntheticEvent, newIndex: number) => {
        setTabIndex(newIndex);
    };

    return (
        <Container>
            <h1>Dashboard</h1>
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                aria-label="Admin Dashboard Tabs"
                sx={{
                    '& .MuiTab-root': { color: '#FFD700' }, 
                    '& .Mui-selected': { color: '#FFFFFF' },
                }}
            >
                <Tab label="Manage Users" />
                <Tab label="Voucher Tasks" />
                <Tab label="Product Requests" />
                <Tab label="Inventory Management" />
                <Tab label="Reports" />
            </Tabs>
            <Card sx={{ marginTop: 2, backgroundColor: '#333333' }}>
                {tabIndex === 0 && <ManageUsers data={adminData?.users} />}
                {tabIndex === 1 && <VoucherTasks data={adminData?.voucherTasks} />}
                {tabIndex === 2 && <ProductRequests data={adminData?.productRequests} />}
                {tabIndex === 3 && <InventoryManagement data={adminData?.inventory} />}
                {tabIndex === 4 && <Reports data={adminData?.reports} />}
            </Card>
        </Container>
    );
};

export default Admin;
