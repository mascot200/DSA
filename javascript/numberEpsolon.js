// Number.Epsilon returns the smallest interval between two representable numbers
function numberEquals(x, y){
    return Math.abs(x -y) < Number.EPSILON;
}
numberEquals(0.1 + 0.2, 0.3)