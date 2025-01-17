import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, Container, Card, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ManageUsers from '../components/admin/ManageUsers';
import VoucherTasks from '../components/admin/VoucherTasks';
import ProductRequests from '../components/admin/ProductRequests';
import InventoryManagement from '../components/admin/InventoryManagement';
import Reports from '../components/admin/Reports';

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
