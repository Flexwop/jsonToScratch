function loadJSON() {
    const input = document.getElementById('jsonInput').value;
    let json;
  
    try {
      json = JSON.parse(input);
    } catch (e) {
      alert("Invalid JSON");
      return;
    }
  
    // Convert to Scratch format
    const project = convertToScratchProject(json);
  
    // Render in Scratch GUI
    showInScratch(project);
  }
  
  function convertToScratchProject(json) {
    // This is where you'd map your JSON into a Scratch project
    // For now, return a super simple project
  
    return {
      targets: [
        {
          isStage: true,
          name: "Stage",
          variables: {},
          lists: {},
          broadcasts: {},
          blocks: {},
          comments: {},
          currentCostume: 0,
          costumes: [{
            assetId: "cd21514d0531fdffb22204e0ec5ed84a",
            name: "backdrop1",
            md5ext: "cd21514d0531fdffb22204e0ec5ed84a.svg",
            dataFormat: "svg",
            rotationCenterX: 240,
            rotationCenterY: 180
          }],
          sounds: [],
          volume: 100,
          layerOrder: 0,
          tempo: 60,
          videoTransparency: 50,
          videoState: "on",
        }
      ],
      meta: {
        semver: "3.0.0",
        vm: "0.2.0",
        agent: "scratch-json-converter"
      }
    };
  }
  
  function showInScratch(project) {
    // You'd load the VM and render the project here.
    // Placeholder: just log for now
    console.log("Scratch project ready:", project);
  }
  