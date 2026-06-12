import { useEffect, useState } from "react";
import BetCard from "../components/BetCard.jsx";
import { getLatestBet } from "../services/bets.js";
import { getLatestContest } from "../services/contests.js";

function HomePage() {
    const [bet, setBet] = useState(null);
    const [contest, setContest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function loadLatestBet() {
            try {
                const bet = await getLatestBet();
                const contest = await getLatestContest();
                setBet(bet);
                setContest(contest);
            } catch (error) {
                setErrorMessage('Error fetching latest bet: ' + error.message + '');
            } finally {
                setLoading(false);
            }
        }
        loadLatestBet();
    }, [])
    if (loading) {
        return <div>Loading...</div>;
    }
    if (errorMessage) {
        return <div>{errorMessage}</div>;
    }
    return (

        <main className='container p-1.5 max-w-5xl mx-auto overflow-y-auto flex flex-col items-center justify-center'>

            <div className='w-full flex items-start justify-start'>
                {bet && <BetCard bet={bet}/>}
            </div>

        </main>
    )

}


export default HomePage
