export default (req, res, service) => {
    const now = new Date()
    service(req)
        .then((response) => {
            response.success = true
            res.status(200).json(response)
        })
        .catch((error) => {
            error.success = false
            res.status(400).json(error)
        })
        .finally(() => {
            console.log(`request : ${req.path} - ${req.method} - ${now.toISOString()} - ${res.statusCode}`)
        })
}