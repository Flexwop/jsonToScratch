# jsonToScratch
A web-based application that translates JSON into a visual Scratch project.

---

## The way to the Idea.
Im sure everyone has used [Scratch](https://scratch.mit.edu) in School or at least once in their freetime just for fun. <br>
I have aswell, so I thought of the Idea of creating a web-based application that uses the [Scratch VM](https://github.com/scratchfoundation/scratch-vm) and [Scratch GUI](https://github.com/scratchfoundation/scratch-gui) libraries to translate JSON code structures into a visual already build Scratch project.

You may think for what kind of use does this have. <br> 
Everyone uses AI nowadays and Im sure has tried to ask an ai if they can program something for them but the AI just puts out this:

`when green flag clicked
go to x: 0 y: -150
forever
  if <key (right arrow) pressed> then
    change x by 10
  end
  if <key (left arrow) pressed> then
    change x by -10
  end
end`

Looks... hard and complex right? I thought so too. Of course you could ask the AI what does each idividual element means but that takes too long. So I came up with this easy to use JSON to a completed Scratch project application.

Just for a side note for my future self, I might want to integrate an AI function using OpenAI's API or deepseek.