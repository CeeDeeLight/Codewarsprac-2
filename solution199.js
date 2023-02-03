/* Create a function which answers the question "Are you playing guitar?".
If your name starts with the letter "D" or lower case "d", you are playing guitar! */

function areYouPlayingGuitar(name) {
    if (name[0].toLowerCase() === 'd') {
      return name + ' plays guitar';
    } else {
      return name + ' does not play guitar';
    }
  }