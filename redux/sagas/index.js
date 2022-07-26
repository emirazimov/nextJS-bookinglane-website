import {
  call,
  put,
  take,
  takeEvery,
  fork,
  spawn,
  all,
  takeLatest,
} from "redux-saga/effects"
import { getCountries } from "../../pages/api/api"
import {
  loadUserPaymentDetailsInfo,
  setUserPaymentBillingInformation,
} from "./paymentFormSaga"
import { setSpecials } from "./specialsSaga"

function* getInstaImages() {
  // const request = yield call(
  //   fetch,
  //   "https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJYYVdFaS1fckdxNUtMVmlka3FUSnBENXZALUjBXaFFKbnhlaDdVb2hOcmtQYlE1WGF0ekE2eFMxS29LaXVVYWNueDFKalk3S3JtQTlubHlCTGN4UUxCb0h6c0E4eVJKLXF5em5CMjdPMkJacko2ZAQZDZD"
  // )
  // const data = yield call([request, request.json])
  // yield put({ type: "SET_INSTA_IMAGES", payload: data.data })
}

function* setRequestDemo(flag) {
  yield put({ type: "SET_REQUEST_DEMO", payload: flag })
}
function* setContuctUs(flag) {
  yield put({ type: "SET_CONTUCT_US", payload: flag })
}

export function* setCountries() {
  let response = yield getCountries()
  // console.log(response)
  yield put({ type: "SET_COUNTRIES", payload: response })
}

export function* loadInitialInfoWatcherSaga() {
  // yield all([
  //   fork(setRequestDemo),
  //   fork(setContuctUs),
  //   fork(setCountries),
  //   fork(loadUserPaymentDetailsInfo),
  //   fork(setUserPaymentBillingInformation),
  // ])
  yield all([
    takeEvery("GET_PAYMENT_DETAILS_INFO", loadUserPaymentDetailsInfo),
    takeEvery("SET_PAYMENT_DETAILS_INFO", setUserPaymentBillingInformation),
    takeEvery("SET_SPECIALS", setSpecials),
  ])
}

export default function* rootSaga() {
  const sagas = [loadInitialInfoWatcherSaga]
  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  })
  yield all(retrySagas)
}
