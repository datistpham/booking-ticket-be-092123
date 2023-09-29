export const search_airport= (template, of)=> {
    of.map(item=> {
        const newtemplate= template.replace(/\(/, " ")

        if(item.location_airport.toString().match(newtemplate)) {
            return item
        }
        return undefined
    })
}