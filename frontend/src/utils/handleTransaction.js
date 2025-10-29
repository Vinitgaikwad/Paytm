import useAlertStore from "../store/alertStore"
import useUserStore from "../store/userStore";
import sendRequest from '../utils/sendRequest';
import useTransactionStore from '../store/transactionStore'

export default async function handleTransaction(amount, navigate) {
    const setAlertMsg = useAlertStore.getState().setAlertMsg;
    const balance = useUserStore.getState().balance;
    const authorization = useUserStore.getState().authorization;
    const to = useTransactionStore.getState().to;


    if (!amount || amount > balance) {
        setAlertMsg({ msg: "Invaild Amount!", success: false, viewOn: true });
        return;
    }

    try {
        const response = await sendRequest(`${import.meta.env.VITE_ACCOUNT_LINK}/transaction`, 'POST', { to, amount }, { authorization });
        console.log(response.data);

        setAlertMsg({ msg: response.data.msg, success: response.data.success, viewOn: true });

        navigate('/dashboard');
    } catch (error) {
        setAlertMsg(error.message, false, true);
    }
}