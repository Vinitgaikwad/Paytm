import useAlertStore from "../store/alertStore";
import useUserStore from "../store/userStore";
import transactionStore from "../store/transactionStore";
import sendRequest from "../utils/sendRequest";

const handleSignIn = async (inputFields, navigate) => {
    const changeAlert = useAlertStore.getState().setAlertMsg;
    const setUserInfo = useUserStore.getState().setUserInfo;
    const setBalance = useUserStore.getState().setBalance;
    const setAuth = useUserStore.getState().setAuth;
    const setFrom = transactionStore.getState().setFrom;

    const response = await sendRequest(`${import.meta.env.VITE_USER_LINK}/sign-in`, 'POST', inputFields);

    const { msg, success, authId } = response.data;

    if (success === false) {
        changeAlert({ msg, success, viewOn: true });
    }

    if (success === true) {
        const { _id, username, firstname } = response.data.userInfo.userObj;
        setUserInfo(_id, username, firstname);
        setAuth(authId);
        setFrom(_id);

        const accountResponse = await sendRequest(`${import.meta.env.VITE_ACCOUNT_LINK}/balance`, 'GET', {}, {
            authorization: authId
        });
        console.log(accountResponse.data);

        setBalance(accountResponse.data.account.balance);

        navigate('/dashboard');
        changeAlert({ msg, success, viewOn: true });
    }
}

export default handleSignIn;