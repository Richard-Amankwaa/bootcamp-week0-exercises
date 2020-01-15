export const deleteFromObj = (obj, id) => {
    let newObj = {}
    Object.keys(obj).forEach(key => {if (key !== id){
        newObj = {...newObj, [key]:{...obj[key]}}
    }})
    return newObj

}