Deployed with Netlify at: https://wa-tor-react.netlify.com

> "The planet Wa-Tor ... is shaped like a torus, or doughnut, and is entirely covered with water. The two dominant denizens of Wa-Tor are sharks and fish ..."

Wa-Tor is a population dynamics simulation devised by Alexander Keewatin Dewdney and presented in the December 1984 issue of Scientific American in a 5-page article entitled "Computer Recreations: Sharks and fish wage an ecological war on the toroidal planet Wa-Tor".
The planet of Wa-Tor

Wa-Tor is usually implemented as a two-dimensional grid with three colours, one for fish, one for sharks and one for empty water. If a creature moves past the edge of the grid, it reappears on the opposite side. The sharks are predatory and eat the fish. Both sharks and fish live, move, reproduce and die in Wa-Tor according to the following simple rules defined below:

### For the fish

- At each chronon, a fish moves randomly to one of the adjacent unoccupied squares. If there are no free squares, no movement takes place.
- Once a fish has survived a certain number of chronons it may reproduce. This is done as it moves to a neighbouring square, leaving behind a new fish in its old position. Its reproduction time is also reset to zero.

### For the sharks

- At each chronon, a shark moves randomly to an adjacent square occupied by a fish. If there is none, the shark moves to a random adjacent unoccupied square. If there are no free squares, no movement takes place.
- At each chronon, each shark is deprived of a unit of energy. Upon reaching zero energy, a shark dies.
- If a shark moves to a square occupied by a fish, it eats the fish and earns a certain amount of energy.
- Once a shark has survived a certain number of chronons it may reproduce in exactly the same way as the fish.
