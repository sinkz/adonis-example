'use strict'

const Env = use('Env')
const Model = use('Model')

class Image extends Model {

    static get computed () {
        //Essa url é retornada a partir do método getUrl, o método tem que seguir o padrão get e depois o que deseja ser retornado
        return ['url']
    }

    getUrl ({ path }) {
        console.log(path);
        return `${Env.get('APP_URL')}/images/${path}`
    }
}

module.exports = Image
