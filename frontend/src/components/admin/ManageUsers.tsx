import React from 'react';
import { Tabs, Tab, Container, Card, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

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

export default ManageUsers;