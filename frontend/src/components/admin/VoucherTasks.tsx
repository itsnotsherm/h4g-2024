import React from 'react';
import { Tabs, Tab, Container, Card, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

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

export default VoucherTasks;