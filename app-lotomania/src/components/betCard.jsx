import TableNumbers from "./TableNumbers.jsx";



export default function BetCard({ bet }) {

    const date = new Date(bet.date);

    return (
        <div className='w-100 rounded-lg shadow-md p-4 bg-slate-800 text-white flex flex-col gap-2'>
            <div className='w-full px-2 py-2 flex justify-between items-center border-b-2 border-slate-600'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-4xl'>Aposta</h3>
                    <sup className='text-orange-400 font-bold'>{bet.id}</sup>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-[.70rem] text-orange-400'>{date.toLocaleDateString('pt-BR')}</div>
                    <div className='font-bold'>{bet.initial} - {bet.final}</div>
                </div>
            </div>
            <TableNumbers numbers={bet.numbers} />

        </div>
    )
}