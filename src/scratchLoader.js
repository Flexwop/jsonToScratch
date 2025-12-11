import VM from "scratch-vm";
import Renderer from "scratch-render";
import Storage from "scratch-storage";

let vmInstance = null;

export async function loadProjectInScratch(project) {
  const container = document.getElementById("scratchContainer");
  container.innerHTML = "";

  const canvas = document.createElement("canvas");
  canvas.width = 480;
  canvas.height = 360;
  canvas.style.border = "1px solid #ccc";
  container.appendChild(canvas);

  const vm = new VM();
  vmInstance = vm;

  const renderer = new Renderer(canvas);
  const storage = new Storage();

  vm.attachRenderer(renderer);
  vm.attachStorage(storage);

  vm.start();

  const projectBuffer = new TextEncoder().encode(JSON.stringify(project));
  await vm.loadProject(projectBuffer);

  vm.greenFlag();
}
