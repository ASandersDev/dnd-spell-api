import axios from 'axios'

const getSpell = async () => {
    try {
        let url = 'https://www.dnd5eapi.co/api/spells'
    
        // Make call to general DnD spell API and return random spell index name
        let spellIndex = await axios.get(url).then( res => {
            const randomSpell = Math.floor(Math.random()*(res.data.count));
    
            return res.data.results[randomSpell].index
        });
    
        //Reassign url to include the spell index name
        url = (url + '/' + spellIndex)
    
        //Make call to specific DnD spell API
        return axios.get(url).then(res => res.data)
        
    }catch(error) {
        console.log(error)
    }
}

export default getSpell