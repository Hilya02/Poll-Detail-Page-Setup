
import React, { useState } from 'react';
import { Poll } from '../types';
import PollVoting from './PollVoting';
import PollResults from './PollResults';
import Card from './Card';

interface PollDetailPageProps {
    poll: Poll;
    onVote: (pollId: number, optionId: number) => void;
}

const PollDetailPage: React.FC<PollDetailPageProps> = ({ poll, onVote }) => {
    const [hasVoted, setHasVoted] = useState(false);
    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);

    const handleSubmitVote = () => {
        if (selectedOptionId) {
            onVote(poll.id, selectedOptionId);
            setHasVoted(true);
        }
    };

    return (
        <Card>
            {hasVoted ? (
                <PollResults poll={poll} />
            ) : (
                <PollVoting
                    poll={poll}
                    selectedOptionId={selectedOptionId}
                    onOptionChange={setSelectedOptionId}
                    onSubmit={handleSubmitVote}
                />
            )}
        </Card>
    );
};

export default PollDetailPage;
