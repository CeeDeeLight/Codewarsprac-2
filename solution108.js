//How many Kooka birds are there?
let kookaCounter = function(laughing) {
    return (laughing.match(/(Ha)+|(ha)+/g) || []).length;
}
