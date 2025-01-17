import React from 'react';
import { Button } from '@mui/material';

const Reports: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div style={{ marginLeft: '1rem' }}>
            <p><strong>Weekly Requests:</strong> {data.weeklyRequests}</p>
            <Button variant="contained" color="secondary">Generate Report</Button>
            <br /><br />
        </div>
    );
};

export default Reports;