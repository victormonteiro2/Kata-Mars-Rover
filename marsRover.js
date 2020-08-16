// Rover object goes here:

let rover = {
  direction: 'N',
  position: {
    x: 0,
    y: 0
  },
  travelLog: [],
  name: 'Curiosity Rover'
};

const obstacle1 = {
  positionObst: {
    x: 3,
    y: 0
  }
};

const obstacle2 = {
  position: {
    x: 2,
    y: 3
  }
};

function commands(rover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    switch (order) {
      case 'l':
        turnLeft(rover, order);
        break;
      case 'r':
        turnRight(rover, order);
        break;
      case 'f':
        moveForward(rover, order);
        break;
      case 'b':
        moveBackwards(rover, order);
        break;
      default:
        console.log('Error, type a valid command');
    }
  }
}
rover.travelLog.push([
  `
  Start position: x: ${rover.position.x}, y: ${rover.position.y}, Direction: ${rover.direction}`
]);

function moveForward(rover) {
  if (rover.direction == 'N') {
    console.log('Move Forward was called!');
    if (rover.position.y > 0 && rover.position.y <= 9) {
      if (
        rover.position.y - 1 == obstacle1.positionObst.y &&
        rover.position.x == obstacle1.positionObst.x
      ) {
        console.log("It's a trap! You can't go forward.");
      } else if (
        rover.position.y == obstacle2.position.y &&
        rover.position.x == obstacle2.position.x
      ) {
        console.log("It's a trap! You can't go forward.");
      } else {
        rover.position.y--;
        rover.travelLog.push([
          `
          x: ${rover.position.x}, y: ${rover.position.y}, Direction: ${rover.direction}`
        ]);
      }
      console.log(`${rover.name} keeps facing ${rover.direction}`);
    } else {
      console.log('404 - you are on the edge, watch your steps!');
      console.log(`${rover.name} is at the same place`);
    }
  } else if (rover.direction == 'S') {
    console.log('Move Forward was called!');
    if (rover.position.y >= 0 && rover.position.y < 9) {
      if (
        rover.position.y + 1 == obstacle1.positionObst.y &&
        rover.position.x == obstacle1.positionObst.x
      ) {
        console.log("It's a trap! You can't go forward.");
      } else if (
        rover.position.y + 1 == obstacle2.position.y &&
        rover.position.x == obstacle2.position.x
      ) {
        console.log("It's a trap! You can't go forward.");
      } else {
        rover.position.y++;
        rover.travelLog.push([
          `
          x: ${rover.position.x}, y: ${rover.position.y}, Direction: ${rover.direction}`
        ]);
      }
      console.log(`${rover.name} keeps facing ${rover.direction}`);
    } else {
      console.log('404 - you are on the edge, watch your steps!');
      console.log(`${rover.name} is at the same place`);
    }
  } else if (rover.direction == 'E') {
    console.log('Move Forward was called!');
    if (rover.position.x >= 0 && rover.position.x < 9) {
      if (
        rover.position.x + 1 == obstacle1.positionObst.x &&
        rover.position.y == obstacle1.positionObst.y
      ) {
        console.log("It's a trap! You can't go forward.");
      } else if (
        rover.position.y == obstacle2.position.y &&
        rover.position.x == obstacle2.position.x
      ) {
        console.log("It's a trap! You can't go forward.");
      } else {
        rover.position.x++;
        rover.travelLog.push([
          `
          x: ${rover.position.x}, y: ${rover.position.y}, Direction: ${rover.direction}`
        ]);
      }
      console.log(`${rover.name} keeps facing ${rover.direction}`);
    } else {
      console.log('404 - you are on the edge, watch your steps!');
      console.log(`${rover.name} is at the same place`);
    }
  } else if (rover.direction == 'W') {
    console.log('Move Forward was called!');
    if (rover.position.x > 0 && rover.position.x <= 9) {
      if (
        rover.position.x - 1 == obstacle1.positionObst.x &&
        rover.position.y == obstacle1.positionObst.y
      ) {
        console.log("It's a trap! You can't go forward.");
      } else if (
        rover.position.y == obstacle2.position.y &&
        rover.position.x == obstacle2.position.x
      ) {
        console.log("It's a trap! You can't go forward.");
      } else {
        rover.position.x--;
        rover.travelLog.push([
          `
          x: ${rover.position.x}, y: ${rover.position.y}, Direction: ${rover.direction}`
        ]);
      }
      console.log(`${rover.name} keeps facing ${rover.direction}`);
    } else {
      console.log('404 - you are on the edge, watch your steps!');
      console.log(`${rover.name} is at the same place`);
    }
  }
}

function moveBackwards(rover) {
  if (rover.direction == 'N') {
    console.log('Move Backward was called!');
    if (rover.position.y >= 0 && rover.position.y < 9) {
      if (
        rover.position.y + 1 == obstacle1.positionObst.y &&
        rover.position.x == obstacle1.positionObst.x
      ) {
        console.log("It's a trap! You can't go forward.");
      } else {
        rover.position.y++;
        rover.travelLog.push([
          `
          x: ${rover.position.x}, y: ${rover.position.y}, Direction: ${rover.direction}`
        ]);
      }
      console.log(`${rover.name} keeps facing ${rover.direction}`);
    } else {
      console.log('404 - you are on the edge, watch your steps!');
      console.log(`${rover.name} is at the same place`);
    }
  } else if (rover.direction == 'S') {
    console.log('Move Backwards was called!');
    if (rover.position.y > 0 && rover.position.y <= 9) {
      if (
        rover.position.y - 1 == obstacle1.positionObst.y &&
        rover.position.x == obstacle1.positionObst.x
      ) {
        console.log("It's a trap! You can't go backwards.");
      } else {
        rover.position.y--;
        rover.travelLog.push([
          `
          x: ${rover.position.x}, y: ${rover.position.y}, Direction: ${rover.direction}`
        ]);
      }
      console.log(`${rover.name} keeps facing ${rover.direction}`);
    } else {
      console.log('404 - you are on the edge, watch your steps!');
      console.log(`${rover.name} is at the same place`);
    }
  } else if (rover.direction == 'E') {
    console.log('Move Backwards was called!');
    if (rover.position.x > 0 && rover.position.x <= 9) {
      if (
        rover.position.x - 1 == obstacle1.positionObst.x &&
        rover.position.y == obstacle1.positionObst.y
      ) {
        console.log("It's a trap! You can't go backwards.");
      } else {
        rover.position.x--;
        rover.travelLog.push([
          `
          x: ${rover.position.x}, y: ${rover.position.y}, Direction: ${rover.direction}`
        ]);
      }
      console.log(`${rover.name} keeps facing ${rover.direction}`);
    } else {
      console.log('404 - you are on the edge, watch your steps!');
      console.log(`${rover.name} is at the same place`);
    }
  } else if (rover.direction == 'W') {
    console.log('Move Backwards was called!');
    if (rover.position.x >= 0 && rover.position.x < 9) {
      if (
        rover.position.x + 1 == obstacle1.positionObst.x &&
        rover.position.y == obstacle1.positionObst.y
      ) {
        console.log("It's a trap! You can't go backwards.");
      } else {
        rover.position.x++;
        rover.travelLog.push([
          `
          x: ${rover.position.x}, y: ${rover.position.y}, Direction: ${rover.direction}`
        ]);
      }
      console.log(`${rover.name} keeps facing ${rover.direction}`);
    } else {
      console.log('404 - you are on the edge, watch your steps!');
      console.log(`${rover.name} is at the same place`);
    }
  }
}

function turnRight(rover) {
  console.log('turnRight was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log(`${rover.name} is now facing to ${rover.direction}`);
      break;
    case 'S':
      rover.direction = 'W';
      console.log(`${rover.name} is now facing to ${rover.direction}`);
      break;
    case 'E':
      rover.direction = 'S';
      console.log(`${rover.name} is now facing to ${rover.direction}`);
      break;
    case 'W':
      rover.direction = 'N';
      console.log(`${rover.name} is now facing to ${rover.direction}`);
      break;
  }
}

function turnLeft(rover) {
  console.log('turnLeft was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log(`${rover.name} is now facing to ${rover.direction}`);
      break;
    case 'S':
      rover.direction = 'E';
      console.log(`${rover.name} is now facing to ${rover.direction}`);
      break;
    case 'E':
      rover.direction = 'N';
      console.log(`${rover.name} is now facing to ${rover.direction}`);
      break;
    case 'W':
      rover.direction = 'S';
      console.log(`${rover.name} is now facing to ${rover.direction}`);
      break;
  }
}

commands(rover, 'Zfrfffrfflffrffrffb');

console.log(`O log do ${rover.name} é ${rover.travelLog}`);
