export function convertToScratchProject(json) {
  const spriteBlocks = {};

  // example: { move: 10 }
  if (json.move) {
    const id = randomId();

    spriteBlocks[id] = {
      id,
      opcode: "motion_movesteps",
      next: null,
      parent: null,
      inputs: {
        STEPS: [1, [4, json.move]]
      },
      fields: {},
      topLevel: true,
      x: 100,
      y: 100
    };
  }

  const sprite = {
    isStage: false,
    name: "Sprite1",
    variables: {},
    lists: {},
    broadcasts: {},
    blocks: spriteBlocks,
    comments: {},
    currentCostume: 0,
    costumes: [
      {
        assetId: "cd21514d0531fdffb22204e0ec5ed84a",
        name: "costume1",
        md5ext: "cd21514d0531fdffb22204e0ec5ed84a.svg",
        dataFormat: "svg",
        rotationCenterX: 240,
        rotationCenterY: 180
      }
    ],
    sounds: [],
    volume: 100,
    layerOrder: 1,
    x: 0,
    y: 0,
    size: 100,
    direction: 90,
    draggable: false,
    visible: true,
  };

  const stage = {
    isStage: true,
    name: "Stage",
    variables: {},
    lists: {},
    broadcasts: {},
    blocks: {},
    comments: {},
    currentCostume: 0,
    costumes: [
      {
        assetId: "cd21514d0531fdffb22204e0ec5ed84a",
        name: "backdrop1",
        md5ext: "cd21514d0531fdffb22204e0ec5ed84a.svg",
        dataFormat: "svg",
        rotationCenterX: 240,
        rotationCenterY: 180
      }
    ],
    sounds: [],
    volume: 100,
    layerOrder: 0,
    tempo: 60,
    videoTransparency: 50,
    videoState: "on"
  };

  return {
    targets: [stage, sprite],
    meta: {
      semver: "3.0.0",
      vm: "0.2.0",
      agent: "jsonToScratch"
    }
  };
}

function randomId() {
  return Math.random().toString(36).substring(2, 15);
}
