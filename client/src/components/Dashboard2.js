import { Typography } from '@material-ui/core';
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard2 = () => {
    const data = [
        {
            name: '2019',
            studentPlaced: 4000,
            amt: 2400,
        },
        {
            name: '2020',
            studentPlaced: 3000,
     
            amt: 2210,
        },
        {
            name: '2021',
            studentPlaced: 2000,
           
            amt: 2290,
        },
        {
            name: '2022',
            studentPlaced: 2780,
            
            amt: 2000,
        },
        {
            name: '2023',
            studentPlaced: 1890,
           
            amt: 2181,
        },
       
    ];
    return (
        <>
            <Typography variant='h4' className='text-center'>Comparision of year wise total placed</Typography>
            <ResponsiveContainer className={'area-chart'}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="student placed" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </>

    )
}

export default Dashboard2