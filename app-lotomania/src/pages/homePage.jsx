import { useEffect, useState } from "react";
import BetCard from "../components/BetCard.jsx";
import { getLatestBet } from "../services/bets.js";

function HomePage() {
    const [bet, setBet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function loadLatestBet() {
            try {
                const data = await getLatestBet();
                setBet(data);
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

        <main className='container p-1 max-w-5xl mx-auto overflow-y-auto flex items-start justify-start'>
            {bet && <BetCard bet={bet}/>}
        </main>
    )

}


export default HomePage
