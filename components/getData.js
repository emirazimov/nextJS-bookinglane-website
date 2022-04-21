const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJVNlZADRFgybWQ5WGhHVkI2Q0xuYWRscXpiTnNUNzNnWGd1WDJscjFlbXV2SlJwa3JDYURuRWQtSVIxd2RtTFpBZA29oQ3lJbDk2YXFLa2lQNTFBQVU1WTZAQM3dtSzZAmWFV2UjhGQ0dYMWJzaVBudgZDZD`

function getData() {
  return fetch(url).then((res) => res.json())
}

export default getData
