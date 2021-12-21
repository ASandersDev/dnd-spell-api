import axios from 'axios'

const url = 'https://www.dnd5eapi.co/api/spells'

const retrieveSpell = () => {
    
    axios.get(url)
    .then(res => {
        const randomSpell = Math.floor(Math.random()*220)
        const spell = res.data.results[randomSpell]

        return spell;
    }).catch(err => {
        console.log(err)
    })
}





export default retrieveSpell