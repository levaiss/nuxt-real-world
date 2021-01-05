export default function ({ $axios, redirect }, inject) {
  const api = $axios.create()

  api.setBaseURL('https://conduit.productionready.io/api')

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
