import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import NumberCircle from "./NumberCircle.jsx";


export default function TableBetNumbers({ numbers }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t-2 border-slate-600">

            <div className='flex items-center justify-between border-b-2 border-slate-600'>
                <div className='ps-2'>Números Apostados</div>
                <button type='button'
                        onClick={() => setIsOpen(!isOpen)}
                        className={'w-10 h-8 rounded outline-slate-600 flex items-center justify-center ' +
                            'cursor-pointer select-none text-sm text-slate-500 font-extralight rounded-md'}>
                    {isOpen ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
            { isOpen && (
                <div className='mt-1 p-2 table-numbers'>
                    <div className='grid grid-cols-10 gap-0.5'>
                        { numbers.map(value => (<NumberCircle key={value} number={value} />)) }
                    </div>
                </div>
            ) }
        </div>

    )
}
