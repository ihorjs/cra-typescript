export default {
  BASE_URL: Cypress.config().baseUrl,
  // Pass in by setting environment variables CYPRESS_USERNAME and CYPRESS_PASSWORD
  USERNAME: Cypress.env('USERNAME') || '',
  PASSWORD: Cypress.env('PASSWORD') || ''
}
