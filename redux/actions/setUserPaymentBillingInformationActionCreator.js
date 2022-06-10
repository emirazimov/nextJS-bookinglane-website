const SET_USER_BILLING_INFORMATION = "SET_USER_BILLING_INFORMATION"

export const setUserPaymentBillingInformationActionCreator = (paymentData) => {
  return {
    type: SET_USER_BILLING_INFORMATION,
    payload: paymentData,
  }
}
