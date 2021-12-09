module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [{
       source: '/',
       destination: '/books',
       permanent: true,
    }, ]
   },
}
