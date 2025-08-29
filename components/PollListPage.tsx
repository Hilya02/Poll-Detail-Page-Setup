
import React from 'react';
import { Poll } from '../types';
import Card from './Card';

interface PollListPageProps {
    polls: Poll[];
}

const PollListPage: React.FC<PollListPageProps> = ({ polls }) => {
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center mb-10 text-slate-700">Available Polls</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {polls.map(poll => (
                    <a key={poll.id} href={`#/poll/${poll.id}`} className="block">
                        <Card className="h-full flex flex-col justify-between">
                           <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">{poll.question}</h2>
                            <p className="text-slate-500">{poll.options.length} options</p>
                            </div>
                            <div className="text-right mt-4 font-semibold text-brand-primary">
                                View & Vote &rarr;
                            </div>
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PollListPage;
