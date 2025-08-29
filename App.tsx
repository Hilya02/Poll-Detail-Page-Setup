
import React, { useState, useEffect, useCallback } from 'react';
import { Poll } from './types';
import { MOCK_POLLS } from './constants';
import Header from './components/Header';
import PollListPage from './components/PollListPage';
import PollDetailPage from './components/PollDetailPage';

type Route = {
    path: 'home'
} | {
    path: 'poll';
    id: number;
};

const App: React.FC = () => {
    const [polls, setPolls] = useState<Poll[]>(MOCK_POLLS);
    const [route, setRoute] = useState<Route>({ path: 'home' });

    const handleHashChange = useCallback(() => {
        const hash = window.location.hash.slice(1); // remove '#'
        const parts = hash.split('/').filter(p => p); // e.g., ['poll', '1']

        if (parts.length === 2 && parts[0] === 'poll') {
            const id = parseInt(parts[1], 10);
            if (!isNaN(id)) {
                setRoute({ path: 'poll', id });
                return;
            }
        }
        setRoute({ path: 'home' });
    }, []);

    useEffect(() => {
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // initial check
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [handleHashChange]);


    const handleVote = (pollId: number, optionId: number) => {
        setPolls(prevPolls => {
            return prevPolls.map(poll => {
                if (poll.id === pollId) {
                    const updatedOptions = poll.options.map(option => {
                        if (option.id === optionId) {
                            return { ...option, votes: option.votes + 1 };
                        }
                        return option;
                    });
                    return { ...poll, options: updatedOptions };
                }
                return poll;
            });
        });
    };

    const renderContent = () => {
        if (route.path === 'poll') {
            const poll = polls.find(p => p.id === route.id);
            if (poll) {
                return <PollDetailPage poll={poll} onVote={handleVote} />;
            }
            return (
                 <div className="text-center p-8">
                    <h2 className="text-2xl font-bold text-red-500">Poll not found!</h2>
                    <a href="#" className="mt-4 inline-block text-brand-primary hover:underline">Return to Home</a>
                </div>
            )
        }
        return <PollListPage polls={polls} />;
    }

    return (
        <div className="min-h-screen font-sans">
            <Header />
            <main className="container mx-auto px-4 py-8">
                {renderContent()}
            </main>
        </div>
    );
};

export default App;
