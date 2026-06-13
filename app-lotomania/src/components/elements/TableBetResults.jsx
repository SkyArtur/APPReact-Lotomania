import { useState } from "react";
import {FaAngleDoubleDown, FaAngleDoubleUp} from "react-icons/fa";
import Number from "./Number.jsx";


export default function TableBetResults({ results }) {

    const [show, setShow] = useState(false);

    const colorHits = (hits) => {
        if (hits < 15) {
            return 'text-slate-400 text-sm'
        } else if (hits <= 18) {
            return 'font-bold text-white'
        } else {
            return 'font-bold text-amber-500 text-lg'
        }
    }

    if (!results?.length) {
        return null
    }

    return (
        <div className='border-t-2 border-slate-600 select-none'>

            <div className='flex items-center justify-between border-b-2 border-slate-600'>
                <div className='ps-2'>Tabela de resultados</div>
                <button onClick={() => setShow(!show)}
                        className={'w-10 h-8 rounded outline-slate-600 flex items-center justify-center ' +
                            'cursor-pointer select-none text-sm text-slate-500 font-extralight rounded-md ' +
                            'hover:text-white'}>
                    {show ? <FaAngleDoubleUp className={'text-white'} />  : <FaAngleDoubleDown />}
                </button>
            </div>

            <div className='py-2 grid grid-cols-3 gap-0.5 text-sm'>
                <div>Concursos</div>
                <div>Acertos</div>
                <div>Espelhos</div>
            </div>

            <div className={`grid grid-cols-3 gap-0.5 transition-all duration-200 ease-in-out`} key={results[0].contest}>
                <div className={'font-bold text-orange-400'}>
                    {results[0].contest}
                </div>
                <div className={`${colorHits(results[0].hits)} flex justify-center items-center`}>
                    <Number number={results[0].hits} />
                </div>
                <div className={`${colorHits(results[0].mirror_hits)} flex justify-center items-center`}>
                    <Number number={results[0].mirror_hits} />
                </div>
            </div>

            {show && results.slice(1).map((item) => (
                <div className={'grid grid-cols-3 gap-0.5 transition-all duration-200 ease-in-out'} key={item.contest}>
                    <div className={'text-slate-400 font-light'}>
                        {item.contest}
                    </div>
                    <div className={`${colorHits(item.hits)} flex justify-center items-center`}>
                        <Number number={item.hits} />
                    </div>
                    <div className={`${colorHits(item.mirror_hits)} flex justify-center items-center`}>
                        <Number number={item.mirror_hits} />
                    </div>
                </div>
            ))}

        </div>
    )
}