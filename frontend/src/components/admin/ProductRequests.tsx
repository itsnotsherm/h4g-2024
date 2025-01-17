import React from 'react';
import { Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

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

export default ProductRequests;