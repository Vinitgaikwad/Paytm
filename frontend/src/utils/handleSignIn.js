import useAlertStore from "../store/alertStore";
import sendRequest from "../utils/sendRequest";

const handleSignIn = async (inputFields, navigate) => {
    const changeAlert = useAlertStore.getState().setAlertMsg;

    const response = await sendRequest("http://localhost:4444/api/v1/user/sign-in", 'POST', inputFields);

    console.log(response.data);

    const { msg, success } = response.data;

    changeAlert({ msg, success, viewOn: true });

    if (success === true) {
        // Send a request to get account details
        navigate('/dashboard');
    }
}

export default handleSignIn;