export default function ({ $axios, redirect }, inject) {
  const api = $axios.create()

  api.setBaseURL('https://jsonplaceholder.typicode.com')

  api.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  api.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  inject('api', api)
}
