import useAlertStore from "../store/alertStore";
import sendRequest from "./sendRequest";

const handleSignUp = async (signinFields) => {
    const { firstname, lastname, username, password } = signinFields;
    const changeAlert = useAlertStore.getState().setAlertMsg;

    if (!firstname || !lastname || !username || !password) {
        alert("Please fill all the fields");
        return;
    }

    const response = await sendRequest(`${import.meta.env.VITE_USER_LINK}/sign-up`, 'POST',
        {
            firstname,
            lastname,
            username,
            password
        });

    const { msg, success } = response.data;

    changeAlert({ msg, success, viewOn: true });
}

export default handleSignUp;