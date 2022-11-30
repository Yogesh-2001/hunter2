import { Typography } from '@material-ui/core';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard1 = () => {
    const data = [
        {
            name: '2019',
            Computer_Engineering: 120,
            IT_Engineering: 138,
            Electronic_Engineering: 93,
            Electronics_and_Telecommunication_Engineering: 60,
            Biomedical_Engineering: 60,
            placed: 200
        },
        {
            name: '2020',
            Computer_Engineering: 135,
            IT_Engineering: 140,
            Electronic_Engineering: 104,
            Electronics_and_Telecommunication_Engineering: 80,
            Biomedical_Engineering: 50,
            placed: 200
        },
        {
            name: '2021',
            cmpn: 4000,
            it: 2400,
            placed: 130,
        },
        {
            name: '2022',
            cmpn: 4000,
            it: 2400,
            placed: 1,
        },
        {
            name: '2023',
            cmpn: 4000,
            it: 2400,
            placed: 45,
        },

    ];
    return (
        <>
            <Typography variant='h4' className='text-center'>Comparision of deptartment wise placement</Typography>
            <ResponsiveContainer className={'bar-graph'}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Computer_Engineering" fill="#ef476f" barSize={15} />
                    <Bar dataKey="IT_Engineering" fill="#ffd166" barSize={15} />
                    <Bar dataKey="Electronic_Engineering" fill="#06d6a0" barSize={15} />
                    <Bar dataKey="Electronics_and_Telecommunication_Engineering" fill="#118ab2" barSize={15} />
                    <Bar dataKey="Biomedical_Engineering" fill="#073b4c" barSize={15} />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default Dashboard1