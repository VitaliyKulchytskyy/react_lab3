/**
 * Get an element of the jsonObject by the id field
 * @param {*} jsonObject input array to seek from
 * @param {*} id get element by the id
 * @param {*} idName name of the id field to seek by
 * @returns an element from the jsonObject or the first element if there is no element with a passed id
 */
export function getById(jsonObject, id, idName="id") {
    return jsonObject.filter(function (jsonObject) { return (jsonObject[idName] == id); })[0];
}