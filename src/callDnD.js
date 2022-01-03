import axios from 'axios'

let url = 'https://www.dnd5eapi.co/api/spells'

const returnSpell = () => {

    let spell = getSpell()
    .then(res => res)

    return spell.then(res => res);
}

function getSpell(){

    let spellCall = axios.get(url);
    let spellIndex = spellCall.then(res => {
        const randomSpell = Math.floor(Math.random()*220);
        return res.data.results[randomSpell].index
    })

    let completeSpell = spellIndex.then(res => {
        let spellCall = axios.get(url + '/' + res)

       return spellCall.then(res => {
           return res.data
        })
    })

     return completeSpell.then(res => {
        return res
    }) 

}

export default returnSpell