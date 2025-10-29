import { useEffect } from 'react';
import BellAlert from '../assets/alert-app-bell-svgrepo-com.svg'
import AlertIcon from '../assets/alert-svgrepo-com.svg'
import useAlertStore from '../store/alertStore'

export default function Alert() {
    const success = useAlertStore((state) => state.success);
    const viewOn = useAlertStore((state) => state.viewOn);
    const msg = useAlertStore((state) => state.msg);
    const setAlertMsg = useAlertStore((state) => state.setAlertDefault);

    useEffect(() => {
        if (viewOn) {
            const timeoutId = setTimeout(() => {
                setAlertMsg();
            }, 2000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [viewOn, setAlertMsg]);

    const onClose = () => {
        setAlertMsg();
    }

    return (
        <>
            {viewOn ? (
                <div className="bg-white flex flex-row gap-2 fixed top-[20px] right-[4px] px-2 py-1 rounded-lg shadow-gray-700 shadow-lg">
                    {!success ? (
                        <img src={AlertIcon} alt='Error' className='self-center w-6 h-6 m-2' />
                    ) : (
                        <img src={BellAlert} alt="Bell" className='self-center w-6 h-6 m-2' />
                    )}
                    <p className="flex justify-center items-center text-gray-600">{msg}</p>
                    <button className="flex justify-center items-center text-red-600 p-2" onClick={onClose}>X</button>
                </div>
            ) : null}
        </>
    )
}