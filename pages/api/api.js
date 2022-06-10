// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export async function getCountries() {
  // try {
  //   const response = await fetch(
  //     "https://apidev.bookinglane.com/api/country?page=1&pageSize=300"
  //   )
  //   var data = await response.json()
  // } catch (error) {
  //   console.log(error)
  // }
  // var items = [...data]
  // items.sort(function (a, b) {
  //   return a.name.localeCompare(b.name) //using String.prototype.localCompare()
  // })
  // return items
}
export async function getUsersPaymentDetails(paymentId) {
  try {
    const response = await fetch(
      `https://apidev.bookinglane.com/api/invoice/checkout/${paymentId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "App-Version": "1.2.36",
        },
      }
    )

    var data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }

  //   var items = [...data]
  //   items.sort(function (a, b) {
  //     return a.name.localeCompare(b.name) //using String.prototype.localCompare()
  //   })
}
export async function setUsersPaymentDetails(paymentId, body) {
  try {
    const response = await fetch(
      `https://apidev.bookinglane.com/api/invoice/checkout/${paymentId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "App-Version": "1.2.36",
        },
        body: JSON.stringify({
          ...body,
        }),
      }
    )
    console.log(response.status)
    return response.status
    // var data = await response.json()
    // return data
  } catch (error) {
    return error.response.status
    // console.log(error)
  }

  //   var items = [...data]
  //   items.sort(function (a, b) {
  //     return a.name.localeCompare(b.name) //using String.prototype.localCompare()
  //   })
}
