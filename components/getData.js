const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJYM19WajhLTDJ3Um4wbmJjQVZAXX3ppRFBCazU1NWExeEZAMa0Jic2dFbWlfdEFPaFVvV2hxT19wYzg0dloxZADNFQmg1WjhBYWUzTGsyOHpjQ2F6RFFpczJvcnhIUllJVTBoZAk5jUl9nX2xlUlpRWQZDZD`

function getData() {
  return fetch(url).then((res) => res.json())
}

export default getData
