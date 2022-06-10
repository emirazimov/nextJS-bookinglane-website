const SET_USER_INPUTS_VALUES = "SET_USER_INPUTS_VALUES"

export const setUsersPaymentDetailsActionCreator = (paymentData) => {
  return {
    type: SET_USER_INPUTS_VALUES,
    payload: paymentData,
  }
}
