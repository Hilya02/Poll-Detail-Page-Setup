
import React from 'react';
import { Poll } from '../types';
import Button from './Button';

interface PollVotingProps {
    poll: Poll;
    selectedOptionId: number | null;
    onOptionChange: (optionId: number) => void;
    onSubmit: () => void;
}

const PollVoting: React.FC<PollVotingProps> = ({ poll, selectedOptionId, onOptionChange, onSubmit }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">{poll.question}</h1>
            <p className="text-slate-500 mb-8">Select an option and cast your vote.</p>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                <div className="space-y-4 mb-8">
                    {poll.options.map(option => (
                        <label
                            key={option.id}
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                                selectedOptionId === option.id
                                    ? 'border-brand-primary bg-indigo-50 ring-2 ring-brand-primary'
                                    : 'border-slate-300 hover:border-brand-primary'
                            }`}
                        >
                            <input
                                type="radio"
                                name={`poll-${poll.id}`}
                                value={option.id}
                                checked={selectedOptionId === option.id}
                                onChange={() => onOptionChange(option.id)}
                                className="h-5 w-5 text-brand-primary focus:ring-brand-primary border-slate-400"
                            />
                            <span className="ml-4 text-lg text-slate-700">{option.text}</span>
                        </label>
                    ))}
                </div>
                <div className="flex justify-end">
                    <Button type="submit" disabled={!selectedOptionId}>
                        Submit Vote
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default PollVoting;
