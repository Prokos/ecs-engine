const express = require('express');
const app = express();

app.use('/', express.static('dist'));

const PORT = 1337;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
