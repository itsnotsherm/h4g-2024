import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Container, Card } from '@mui/material';

const ManageUsers: React.FC<{ data: any }> = ({ data }) => {
    return <div>Manage Users Section</div>;
};

const VoucherTasks: React.FC<{ data: any }> = ({ data }) => {
    return <div>Voucher Tasks Section</div>;
};

const ProductRequests: React.FC<{ data: any }> = ({ data }) => {
    return <div>Product Requests Section</div>;
};

const InventoryManagement: React.FC<{ data: any }> = ({ data }) => {
    return <div>Inventory Management Section</div>;
};

const Reports: React.FC<{ data: any }> = ({ data }) => {
    return <div>Reports Section</div>;
};

const getAdminData = async () => {
    // Replace with actual data fetching logic
    return {
        users: [],
        voucherTasks: [],
        productRequests: [],
        inventory: [],
        reports: []
    };
};

const Admin: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [adminData, setAdminData] = useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAdminData();
                setAdminData(data);
            } catch (error) {
                console.error("Error fetching admin data", error);
            }
        }
        fetchData();
    }, []);

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
                    '& .MuiTab-root': { color: '#FFD700' }, // Gold text for visibility
                    '& .Mui-selected': { color: '#FFFFFF' }, // Orange when selected
                }}
            >
                {/* change colours so it sticks out on black background */}
                <Tab label="Manage Users" />
                <Tab label="Voucher Tasks" />
                <Tab label="Product Requests" />
                <Tab label="Inventory Management" />
                <Tab label="Reports" />
            </Tabs>
            <Card sx={{ marginTop: 2, padding: 2 }}>
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
