const array = ["v", "b", "c"]

function identical(array) {
    var standard = array[1];
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== standard) {
        return false;
      }
    }
    return true;
  }