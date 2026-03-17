<p align="center">Todd Stewart &bull; 16 MARCH 2026</p> 

# IMGD 5010 &bull; Assignment 06: Automata

### [Sketch & Edit](https://editor.p5js.org/GitAlongLittleCodies/sketches/MwYHESs0-) -or- [Sketch Only](https://editor.p5js.org/GitAlongLittleCodies/full/MwYHESs0-)

I tried a couple approaches to make an interesting Game of Life submission. 

One, I would draw layers of generations thus making a comet tail of history. I anticipated that it was already done. But usually enough time passes that a new approach is okay. The solution was [posted March 2, 2026](https://news.ycombinator.com/item?id=47197218). Hardly enough time to consider another run. Insult to injury: top comment reads, "This is the kind of visualisation that obvious in retrospect, but I don't think anybody's done this before. Very nice."

Idea two, I would make automata blackholes... or interstellar objects. Objects being the keyword. My code approach made rule making too difficult. I scrapped it and started fresh using Dan Schiffman's [Coding Train video on the Game of Life](https://www.youtube.com/watch?v=FWSR_7kZuYg) as inspiration and code base. The idea was to start with what works and scale it in a way that I could easily try new rules. 

During this attempt, while just preparing the file structure to try more and more rules, my first rule change resulted in a stable'ish system with zig-zagging Gliders and variations of pulsars. Still intending to try other rules, I was distracted into fine tuning Folder B rules. As it is, every 30th frame, the birthrate for cells goes up. More or less frequent and the sweet spot is lost. Then cell size, grid size, even adjusting a weighted random result for the cell state all factor in to the success of the run. 

There are more layers to this that would be fun to explore. The rule change in Folder B is small yet the results look dramatic. More granular tuning would be great but a new system of counting neighbors would be needed. 

![PulsarOfSomeSort](https://github.com/user-attachments/assets/c7fb7ec0-a595-49d6-ad92-ea5218b491bd)

![Zlider](https://github.com/user-attachments/assets/bc9965f7-f0f3-4de4-950e-e49a821b4992)
