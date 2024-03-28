import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, LabelList } from 'recharts';

const PagesToRead = () => {
    const [readListData, setReadListData] = useState([]);

    useEffect(() => {
        const readList = JSON.parse(localStorage.getItem('readList')) || [];
        setReadListData(readList);
    }, []);
    const generateStutteringPages = (totalPages) => {
        const stuttering = Math.floor(Math.random() * 11) - 5;
        return totalPages + stuttering;
    };
    const chartData = readListData.map(book => ({
        name: book.bookName,
        totalPages: generateStutteringPages(book.totalPages),
        originalTotalPages: book.totalPages 
    }));
    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00C49F'];

    const TriangleBar = (props) => {
        const { x, y, width, height, fill } = props;

        // Calculate triangle points
        const x1 = x + width / 2;
        const y1 = y;
        const x2 = x;
        const y2 = y + height;
        const x3 = x + width;
        const y3 = y + height;

        return (
            <path d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`} fill={fill} />
        );
    };

    return (
        <div className='mt-28'>
            <h2 className="text-2xl font-bold mb-4 text-center">Total Pages for Read List Books</h2>
            <BarChart width={800} height={600} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"   interval={0}  tick={{fontSize: 12}} />
                <YAxis label={{ value: 'Total Pages', angle: -90, position: 'insideLeft' }} />
                <Bar shape={<TriangleBar />} dataKey="totalPages">
                    <LabelList dataKey="originalTotalPages" position="top" />
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;
