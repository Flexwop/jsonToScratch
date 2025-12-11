import "./style.css";
import { loadProjectInScratch } from "./scratchLoader";
import { convertToScratchProject } from "./converter";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loadBtn").addEventListener("click", () => {
    const input = document.getElementById("jsonInput").value;

    let json;
    try {
      json = JSON.parse(input);
    } catch (e) {
      alert("Invalid JSON");
      return;
    }

    const project = convertToScratchProject(json);
    loadProjectInScratch(project);
  });
});
