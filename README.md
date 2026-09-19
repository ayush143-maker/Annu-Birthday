# Annu Secret Box Birthday

A private, premium, page-based birthday memory book for Annu.

## Stack

- React
- Vite
- Tailwind CSS
- GSAP (letter line reveal only)
- Custom SVG icons, doodles, cake, balloons, confetti

## Experience flow (8 pages, no long vertical scroll)

1. Opening — beating heart, doodle art, entry button
2. Annu — stacked card carousel (5 photos, light-blue card backs)
3. Cake — SVG cake, light candles, make a wish, blow, confetti
4. Balloons — tap to pop, each balloon owes a compliment, confetti
5. Memories — horizontal sliding tapped polaroid carousel
6. Receipt — friendship, itemised (points receipt)
7. Letter — handwritten letter on taped paper, "to: Annu"
8. Finale — message, 3:4 tilted taped polaroid, P.S. line, replay

## Navigation

- Top-left: back button
- Top-right: confetti button
- Bottom: capsule next button with page counter
- Swipe left / right on pages (disabled inside carousels)
- Keyboard arrows on desktop

## Music

Four looped tracks, switched automatically on page change:

- track-1-opening: opening
- track-2-annu: Annu page
- track-3-cake: cake + balloons
- track-4-memories: memories, receipt, letter, finale

Music starts only after the first tap (browser autoplay rule).

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Assets

Music:

```txt
public/music/track-1-opening.mp3
public/music/track-2-annu.mp3
public/music/track-3-cake.mp3
public/music/track-4-memories.mp3
```

Annu solo photos:

```txt
public/images/annu/annu-1.jpg   (3:4)
public/images/annu/annu-2.jpg   (3:4)
public/images/annu/annu-3.jpg   (3:4)
public/images/annu/annu-4.jpg   (3:4)
public/images/annu/annu-5.jpg   (1:1, cropped to portrait in UI)
```

Together photos:

```txt
public/images/together/together-wide-1.jpg  (16:9)
public/images/together/together-wide-2.jpg  (16:9)
public/images/together/together-43.jpg      (4:3)
public/images/together/together-34-1.jpg    (3:4)
public/images/together/together-34-2.jpg    (3:4)
```

Finale photo:

```txt
public/images/finale/finale-34.jpg  (3:4)
```

## Design rules

- No decorative emojis; SVG icons and doodle art only
- Warm ivory, cream, beige, cocoa, sage, gold, powder blue
- Page-based experience, mobile-first
- Sender identity is always Secret Box
- No private real names anywhere
- No fake childhood photos

## Vercel

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Config included in vercel.json
