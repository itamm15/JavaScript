//Delete from first array items from second array
function arrayDiff(a, b) {
    const arrayRemover = (arr, value) => {
      return arr.filter((element) => {
        return element != value;
      })
    }
    
    let result = arrayRemover(a, b);
    return result;
  }