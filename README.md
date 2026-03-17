<p align="center">Todd Stewart &bull; 16 MARCH 2026</p> 

# IMGD 5010 &bull; Assignment 06: Automata

### [Sketch & Edit](https://editor.p5js.org/GitAlongLittleCodies/sketches/MwYHESs0-) -or- [Sketch Only](https://editor.p5js.org/GitAlongLittleCodies/full/MwYHESs0-)

I tried a couple approaches to make an interesting Game of Life submission. 

One, I would draw layers of generations thus making a comet tail of history. I anticipated that it was already done. But usually enough time passes that a new approach can build on evolving processes. The solution was [posted March 2, 2026](https://news.ycombinator.com/item?id=47197218). Too fresh to freshen up. Add insult to injury: top comment reads, "This is the kind of visualisation that obvious in retrospect, but I don't think anybody's done this before. Very nice."

Idea two, I would make automata blackholes... or interstellar objects. Objects being the keyword. My code approach made rule making too difficult. I scrapped it and started fresh using Dan Schiffman's [Coding Train video on the Game of Life](https://www.youtube.com/watch?v=FWSR_7kZuYg) as inspiration and code base. The idea was to start with what works and scale it in a way that I could easily try new rules. 

During this attempt, while just preparing the file structure to try more and more rules, my first rule change resulted in a stable'ish system with zig-zagging gliders and variations of pulsars. I intended to try other rule sets however I was distracted by fine-tuning Folder B rules. The sweet spot appears to be increasing the birthrate every 30 frames. Cell and grid size and weighing the randomized outcome of the first generation also contribute to the overall success of the run. 

There are more layers to this that would be fun to explore. The rule change in Folder B is small yet the results look dramatic. More granular tuning would be great but a new system of counting neighbors would be needed. First, though, I would fix the ever-growing load of arrays the program generates. 

![PulsarOfSomeSort](https://github.com/user-attachments/assets/c7fb7ec0-a595-49d6-ad92-ea5218b491bd)

![Zlider](https://github.com/user-attachments/assets/bc9965f7-f0f3-4de4-950e-e49a821b4992)
