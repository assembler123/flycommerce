
module.exports = (app) => {
    app.get("/hello", (req, res) => {
        res.send("<h1>HELLO Flycomm!!</h1>");
    })
    app.get('/hellonw', (req, res) => {
        res.send(`<div style="color:red">
			THIS IS NEW HELLO
	</div>`)
    })
}