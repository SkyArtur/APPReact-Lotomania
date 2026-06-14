import TableBetNumbers from "./elements/TableBetNumbers.jsx";
import TableBetResults from "./elements/TableBetResults.jsx";
import FormBet from "./FormBet.jsx";



export default function BetCard({ bet, numbers }) {

    const date = new Date(bet.date);

    return (
        <div className='w-100 rounded shadow p-4 bg-slate-800 text-white flex flex-col gap-2'>
            <div className='w-full px-2 py-2 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col items-center'>
                        <p className='ps-4 text-sm self-start text-slate-400'>Última</p>
                        <h3 className='text-4xl'>Aposta</h3>
                    </div>
                    <sup className='text-slate-400'>#<span className='text-orange-400 font-bold'>{bet.id}</span></sup>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-[.70rem] text-orange-400'>{date.toLocaleDateString('pt-BR')}</div>
                    <div className='font-bold'>{bet.initial} - {bet.final}</div>
                </div>
            </div>
            <TableBetResults results={bet.results} />
            <TableBetNumbers numbers={bet.numbers} />
            <FormBet numbers={numbers}  />
        </div>
    )
}