export default (req, res, service) => {
    service(req)
        .then((response) => {
            response.success = true
            res.status(200).json(response)
        })
        .catch((error) => {
            error.success = false
            res.status(400).json(error)
        })
}