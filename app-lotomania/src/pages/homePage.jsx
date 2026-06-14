import { useEffect, useState } from "react";
import BetCard from "../components/BetCard.jsx";
import { getLatestBet } from "../services/bets.js";
import { getNumbersAll } from "../services/numbers.js";


function HomePage() {

    const [bet, setBet] = useState(null);
    const [numbers, setNumbers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function loadDataPage() {
            try {
                const bet = await getLatestBet();
                const numbers = await getNumbersAll();
                setBet(bet);
                setNumbers(numbers);
            } catch (error) {
                setErrorMessage('Error load data: ' + error.message + '');
            } finally {
                setLoading(false);
            }
        }
        loadDataPage();
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
                {bet && <BetCard bet={bet} numbers={numbers} />}
            </div>
        </main>
    )
}


export default HomePage
