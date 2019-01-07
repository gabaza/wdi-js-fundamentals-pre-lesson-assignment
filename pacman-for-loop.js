// Often loops in JavaScript will follow a more conventional approach:
//
// for (<<initializer>>; <<condition>>; <<post iteration>>) {
//   <<statement>>
// }
const ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-Man eats ' + ghosts[index]);
}
