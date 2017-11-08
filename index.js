// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return(block - 42)
  } else {
    return(42 - block)
  }
}

function distanceTravelledInFeet(start, end) {
  return((start - end)*264)
}

function distanceFromHqInFeet(block) {
  return(distanceFromHqInBlocks(block) * 264)
}

// function distanceTravelledInFeet() {
// 
// }

function calculatesFarePrice(start, destination){

}
