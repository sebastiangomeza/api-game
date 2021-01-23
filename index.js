
const { app } = require('./configure');



app.listen(process.env.PORT || 3000, () =>
    console.log(`APP running on port 3000`)
);