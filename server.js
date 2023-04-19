require('dotenv').config();

const express       = require('express');
const cors          = require('cors');
const app           = express();
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const jwtverify     = require('./middleware/jwtVerify');
const jwtRefresh    = require('./middleware/jwtRefresh') ;

/*
* Définition de fichiers static
*/ 

app.use('/static',express.static('public'));

/*
* Configuration des requêtes en dehors du domaine                                                      
*/     

const corsOptions = {
    origin:'',
    optionSuccessStatus:200
};
   
app.use(cors());
               
/*
* Configuration des paramètres express                                                      
*/                    

app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/*
* Initialisation des routes                                                 
*/  

app.use('/login',require('./routes/auth.route'));
// app.use('/logout',require('./routes/logout.route'));
// app.use('/refresh',require('./routes/refresh.route'));

/*
* Lancement du serveur                                                   
*/  

app.listen(process.env.APP_PORT || process.port,()=>{
    console.log('Application lancée');
});
