
app.set('view engine', 'pug');
app.set('index', './views');
app.get('/', (req,res) => {
	res.render('index')
});
app.listen(port, () => console.log(`Example app listening on 3005 port!`))