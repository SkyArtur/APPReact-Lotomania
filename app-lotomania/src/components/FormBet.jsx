import {useState, useEffect, useCallback} from 'react'
import { FaDice, FaWindowClose, FaTrashAlt } from 'react-icons/fa'

import InputGeneric from "./elements/InputGeneric.jsx";
import ButtonGeneric from "./elements/ButtonGeneric.jsx";


const LOTOMANIA_NUMBERS_LIMIT = 5 // Valor de Teste


export default function FormBet({ numbers }) {

    const [isVisible, setIsVisible] = useState(false)
    const [selectedNumbers, setSelectedNumbers] = useState([])

    const handleChange = useCallback((value) => {
        setSelectedNumbers((prev) => {
            if (prev.includes(value)) {
                return  prev.filter((v) => v !== value);
            } else {
                return  [...prev, value];
            }
        })
    }, [setSelectedNumbers])

    const handleSubmit = useCallback((event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const betData = {
            dateBet: formData.get("dateBet"),
            valueBet: formData.get("valueBet"),
            initialContest: formData.get("initialContest"),
            finalContest: formData.get("finalContest"),
            numbers: selectedNumbers
        };
        console.log(betData);
    }, [selectedNumbers])
    
    const handleReset = useCallback(() => {
        setSelectedNumbers([])
    }, [setSelectedNumbers])
    
    const handleClose = useCallback(() => {
        setIsVisible(false);
        handleReset()
    }, [handleReset])

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                handleClose();
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [isVisible, handleClose]);

    return (
        <div className='w-full flex justify-between items-center'>

            <button type='button'
                    onClick={() => setIsVisible(!isVisible)}
                    className={'p-2 relative text-zinc-500 rounded-lg group ' +
                        'cursor-pointer select-none gap-2 flex items-center justify-center'}>
                <FaDice className={'group-hover:scale-[1.5] group-hover:text-orange-400 ' +
                    'transition-all duration-200 ease-in-out'} />
                <span className={'align-middle text-[.75rem] group-hover:text-[.75rem] group-hover:text-white ' +
                    'transition-all duration-200 ease-in-out'}>
                    Registrar Aposta
                </span>
            </button>

            {isVisible && (
                <div onClick={handleClose}
                    className={'fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 '}>
                    <form onClick={event => event.stopPropagation()}
                          onReset={handleReset}
                          onSubmit={handleSubmit}
                          className={'bg-slate-800 rounded-lg shadow-lg p-3 max-w-96 flex flex-col items-center justify-center'}>

                        <div className={'w-full flex py-2 items-center justify-between border-b-2 border-slate-700'}>
                            <h2>Formulário de Apostas</h2>
                            <button type={'button'} onClick={handleClose}
                                className={'text-slate-500 rounded cursor-pointer select-none hover:text-red-400'}>
                                <FaWindowClose />
                            </button>
                        </div>
                        <div className={'w-full flex flex-col items-center justify-start border-b-2 border-slate-700'}>
                            <div className="w-full p-0.5 flex items-center justify-start">
                                <h4 className={'text-xs text-slate-400'}>Dados</h4>
                            </div>
                            <div className={'flex items-center justify-start'}>
                                <InputGeneric
                                    id={'dateBet'}
                                    name={'dateBet'}
                                    type={'date'}
                                    label={'Data da aposta'}
                                />
                                <InputGeneric
                                    id={'valueBet'}
                                    name={'valueBet'}
                                    type={'number'}
                                    label={'Valor da aposta'}
                                    step={'0.01'}
                                    style={{width: '120px'}}
                                />
                            </div>
                        </div>
                        <div className={'w-full flex flex-col items-center justify-center border-b-2 border-slate-700'}>
                            <div className="w-full p-0.5 flex items-center justify-start">
                                <h4 className={'text-xs text-slate-400'}>Concursos válidos</h4>
                            </div>
                            <div className={'flex items-center justify-start'}>
                                <InputGeneric
                                    id={'initialContest'}
                                    name={'initialContest'}
                                    type={'number'}
                                    label={'Inicial'}
                                    step={'1'}
                                    style={{width: '80px'}}/>
                                <InputGeneric
                                    id={'finalContest'}
                                    name={'finalContest'}
                                    type={'number'}
                                    label={'Final'}
                                    step={'1'}
                                    style={{width: '80px'}}/>
                            </div>
                        </div>
                        <div className={'w-full flex flex-col items-center justify-center border-b-2 border-slate-700'}>
                            <div className="w-full p-0.5 flex items-center justify-start">
                                <h4 className={'text-xs text-slate-400'}>Números apostados</h4>
                            </div>
                            <div className={'w-full py-2 grid grid-cols-10 gap-1'}>
                                {numbers.map((value, index) => (
                                    <label key={index} className={'text-xs w-8 h-8 bg-linear-to-br from-slate-900 to-slate-800 ' +
                                        'rounded-full flex items-center justify-center text-center border border-slate-700 ' +
                                        'text-slate-400 hover:border-slate-400 focus:border-slate-400 cursor-pointer ' +
                                        'select-none transition-all duration-200 ease-in-out ' +
                                        'has-checked:border-3 has-checked:border-orange-400 has-checked:text-white' }>
                                        {value}
                                        <input type="checkbox"
                                           className="hidden"
                                           name="numbers"
                                           value={value}
                                           onChange={() => handleChange(value)}
                                           checked={selectedNumbers.includes(value)}
                                           disabled={!selectedNumbers.includes(value) && selectedNumbers.length >= LOTOMANIA_NUMBERS_LIMIT}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className={'w-full p-1 px-3 flex items-center justify-between border-b-2 border-slate-700'}>
                            <ButtonGeneric type={'reset'} text={<FaTrashAlt />} />
                            <ButtonGeneric type={'submit'} text={'Registrar'} />
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}
