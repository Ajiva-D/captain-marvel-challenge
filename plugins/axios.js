
export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
	$axios.onRequest(config => {
    config.headers['apikey'] = `6740ae373da1c47cbdc80ee83dfc9158`
  })
}