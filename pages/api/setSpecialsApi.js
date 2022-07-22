export async function setSpecialsApi(body) {
  try {
    const response = await fetch(
      `https://apidev.bookinglane.com/api/forms/special-offer`,
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
