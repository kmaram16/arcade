# Flappy 🐤

A tiny Flappy Bird game built with React + TypeScript + Vite — part of the arcade.

## Play it

```bash
cd d:\Github\Flappy
npm install
npm run dev
```

Opens on **http://localhost:4177**.

> Or just run `npm run dev` in the **Dashboard** folder — it boots this game
> automatically along with the others.

## How to play

- **Click**, **tap**, or press **Space** to flap.
- Fly through the gaps in the green pipes.
- Don't hit a pipe or the ground!
- Each pipe you pass is **+1 point**. Your best score is saved.

## How the code works (the 5 rules)

All the game logic is in [`src/App.tsx`](src/App.tsx). Search for these comments:

1. **RULE 1: GRAVITY** — the bird always falls, faster and faster.
2. **RULE 2** — flapping gives an upward boost.
3. **RULE 3: PIPES** — pipes slide to the left, new ones appear.
4. **RULE 4: CRASH** — game over if the bird hits a pipe or the ground.
5. **RULE 5: SCORE** — +1 every time the bird passes a pipe.

Want to make it easier? At the top of `App.tsx`, try making `GAP` bigger,
or `GRAVITY` smaller. 🎮
