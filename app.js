//image-charts.com/chart
// ?cht=<chart_type>
// &chd=<chart_data>
// &chs=<chart_size>
// &...additional_parameters...
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let url;
app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
	value = req.body.value;
	url = `https://image-charts.com/chart?chs=150x150&cht=qr&chl=${value}&choe=UTF-8`;
	res.redirect(url);
});

app.listen(3000, () => {
	console.log(`App running on port 3000`);
});
