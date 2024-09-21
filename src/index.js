const app = require('express')();

app.get('/', (req,res) => 
    res.json({ message: 'docker is easy'})
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});