const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJXMnhDTW4yVjZA6X2hHaElHczdtY3VZARGhCckdaeF9YSDJ6UHB1RmpoRi1xM1VudXRIWTNEb1BNSm41NmhVeGVYdHJvcWh2TC1Ba1Q5Y2hHZAUNIalVmTmlabk1PMkJzemlpQTRaR0oxdmJFSGNVVwZDZD`

function getData() {
  return fetch(url).then((res) => res.json())
}

export default getData
