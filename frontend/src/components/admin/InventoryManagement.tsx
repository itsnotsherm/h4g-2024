import React from 'react';
import { Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

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

export default InventoryManagement