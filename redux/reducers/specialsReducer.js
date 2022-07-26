const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  cardNumber: "",
  cardNickname: "",
  month: "",
  year: "",
  cvc: "",
  isSendingBillingInformation: false,
  successfullySended: false,
  failedSent: false,
  failMessage: "",
}

export const SpecialsReducer = (state = initial, action) => {
  switch (action.type) {
    // case "SET_USER_INPUTS_VALUES": {
    //   return { ...state, ...action.payload }
    // }
    // case "SET_USER_BILLING_INFORMATION": {
    //   //   console.log(...action.payload)
    //   return { ...state, ...action.payload }
    // }
    case "SET_IS_SENDING_BILLING_INFORMATION": {
      //   console.log(...action.payload)
      return { ...state, isSendingBillingInformation: action.payload }
    }
    case "SET_IS_SUCCESSFULLY_SENDED": {
      //   console.log(...action.payload)
      return { ...state, successfullySended: action.payload }
    }
    case "SET_IS_FAILED_SENT": {
      //   console.log(...action.payload)
      return { ...state, failedSent: action.payload }
    }
    case "SET_FAIL_MESSAGE": {
      //   console.log(...action.payload)
      return { ...state, failMessage: action.payload }
    }

    default:
      return state
  }
}
