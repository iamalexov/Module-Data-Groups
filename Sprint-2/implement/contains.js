function contains(object, property) {
    if (typeof object !== "object" || object=== null){
        return false;
    }
    return object.hasOwnProperty(property)
}

module.exports = contains;
