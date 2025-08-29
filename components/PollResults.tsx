
import React from 'react';
import { Poll } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface PollResultsProps {
    poll: Poll;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

const PollResults: React.FC<PollResultsProps> = ({ poll }) => {
    const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

    const data = poll.options.map(option => ({
        ...option,
        percentage: totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(1) : 0,
    })).sort((a, b) => b.votes - a.votes);
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">Results: {poll.question}</h1>
            <p className="text-slate-500 mb-8">Total Votes: {totalVotes}</p>
            <div className="w-full h-80 md:h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis type="number" hide />
                        <YAxis 
                            dataKey="text" 
                            type="category" 
                            width={150} 
                            tick={{ fill: '#475569', fontSize: 14 }} 
                            axisLine={false} 
                            tickLine={false} 
                        />
                        <Tooltip
                            cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }}
                            content={({ payload }) => {
                                if (payload && payload.length > 0) {
                                    return (
                                        <div className="bg-white p-2 border rounded shadow-lg">
                                            <p className="font-bold">{`${payload[0].payload.text}`}</p>
                                            <p>{`Votes: ${payload[0].value}`}</p>
                                            <p>{`Percentage: ${payload[0].payload.percentage}%`}</p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Bar dataKey="votes" barSize={30} radius={[0, 4, 4, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
             <div className="mt-8 text-center">
                <a href="#" className="text-brand-primary hover:underline font-semibold">
                    &larr; Back to all polls
                </a>
            </div>
        </div>
    );
};

export default PollResults;
