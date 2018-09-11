const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.render('maintenance.hbs');
    
})

app.listen(3000);

app.get('/', (req, res) => {
    res.send({
        name: 'shantnu',
        likes: ['TT', 'fishing']
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About',
        welcomeMessage: 'welcome to my happy place',
        currentYear: new Date().getFullYear()
    });
});
