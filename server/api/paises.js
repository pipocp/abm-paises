const Pais = require('../entidades/pais');
const Sql = require('../sqlconfig');

module.exports = function(app) 
{
    app.get('/api/paises', function(req, res) {

        Sql.sql.connect(Sql.config, (err) => {
            if (err) {
                console.log(err);
                sql.close();
            }

            var request = new Sql.sql.Request();

            request.query('select * from GMPAIS', (err, recordset) => {
            
                if (err) {
                    console.log(err);
                    sql.close();
                }
    
            
                let paises = [];

                recordset.recordset.forEach(e => {
                    paises.push(new Pais(e.CodPais, e.Descrip.trim()).getJson());
                });

                Sql.sql.close();
                res.send(paises);
            });
        })
    });

}