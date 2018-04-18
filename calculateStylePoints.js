const calculateStylePoints = (styleNotes) => {
  var allPoints = styleNotes.reduce(add, 0);
    function add(a, b) {
      return a + b;
  }
  var maxPoint = Math.max.apply(null,styleNotes);
  var minPoint = Math.min.apply(null,styleNotes);
  
  return allPoints - maxPoint - minPoint;
};

module.exports = calculateStylePoints;
