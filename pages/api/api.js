// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export async function getCountries() {
  try {
    const response = await fetch(
      "https://apidev.bookinglane.com/api/country?page=1&pageSize=300"
    )

    var data = await response.json()
  } catch (error) {
    console.log(error)
  }
  var items = [...data]
  items.sort(function (a, b) {
    return a.name.localeCompare(b.name) //using String.prototype.localCompare()
  })
  return items
}
