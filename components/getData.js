const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJXaTZAfczRBQS1VeExmRlB1YWF0MDkySkJCMUNXNGJQa2pWN1RYeGZASWVpkWm5YRXVTdUFJZAkJvNXpyRmRHMzVleDV4RVVSQ21Ec0NJQ2JNV2lNeGx5bGpTYlBHRUZAEWWwtUDhaMDZAZATDBJQ2lVQQZDZD`

function getData() {
  return fetch(url).then((res) => res.json())
}

export default getData
