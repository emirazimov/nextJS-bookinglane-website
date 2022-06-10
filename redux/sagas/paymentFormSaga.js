import {
  call,
  put,
  take,
  takeEvery,
  fork,
  spawn,
  all,
} from "redux-saga/effects"
import {
  getCountries,
  getUsersPaymentDetails,
  setUsersPaymentDetails,
} from "../../pages/api/api"

import { setUsersPaymentDetailsActionCreator } from "../actions/getUsersPaymentDetailsAction"
import { setUserPaymentBillingInformationActionCreator } from "../actions/setUserPaymentBillingInformationActionCreator"

// export function* loadUserPaymentDetailsInfo() {}

export function* loadUserPaymentDetailsInfo(action) {
  const loadedInfo = yield call(getUsersPaymentDetails, action.payload)

  //   console.log(loadedInfo)

  yield put(setUsersPaymentDetailsActionCreator(loadedInfo))
}

export function* setUserPaymentBillingInformation(action) {
  //   console.log(data)
  //   yield console.log("ay yo im here")

  yield put({
    type: "SET_IS_SENDING_BILLING_INFORMATION",
    payload: true,
  })

  const result = yield call(
    setUsersPaymentDetails,
    action.payload.paymentId,
    action.payload.inputsValue
  )

  if (result == 200) {
    yield put({
      type: "SET_IS_SENDING_BILLING_INFORMATION",
      payload: false,
    })

    yield put({
      type: "SET_IS_SUCCESSFULLY_SENDED",
      payload: true,
    })
  } else {
    yield put({
      type: "SET_IS_SENDING_BILLING_INFORMATION",
      payload: false,
    })

    yield put({
      type: "SET_IS_FAILED_SENT",
      payload: true,
    })
  }

  //   yield put({
  //     type: "SET_USER_BILLING_INFORMATION",
  //     payload: action.inputsValue,
  //   })
}
