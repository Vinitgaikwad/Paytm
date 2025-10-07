import useAlertStore from "../store/alertStore";
import useUserStore from "../store/UserStore";
import sendRequest from "../utils/sendRequest";

const handleSignIn = async (inputFields, navigate) => {
    const changeAlert = useAlertStore.getState().setAlertMsg;
    const setUserInfo = useUserStore.getState().setUserInfo;
    const setBalance = useUserStore.getState().setBalance;

    const response = await sendRequest(`${import.meta.env.VITE_USER_LINK}/sign-in`, 'POST', inputFields);

    const { msg, success, authId } = response.data;

    if (success === false) {
        changeAlert({ msg, success, viewOn: true });
    }

    if (success === true) {
        const { _id, username, firstname } = response.data.userInfo.userObj;
        setUserInfo(_id, username, firstname);


        const accountResponse = await sendRequest(`${import.meta.env.VITE_ACCOUNT_LINK}/balance`, 'GET', {}, {
            authorization: authId
        });
        console.log(accountResponse.data);

        setBalance(accountResponse.data.account.balance);

        navigate('/dashboard');
        changeAlert({ msg, success, viewOn: true });
    }

    console.log(import.meta.env.VITE_USER_LINK);
}

export default handleSignIn;