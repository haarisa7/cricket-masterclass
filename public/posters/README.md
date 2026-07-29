# Poster artwork

Drop the current campaign poster here and point `summerCamp.posterSrc` in
`src/data/events.ts` at it.

Expected file: `summer-camp-2026.jpg`

- Keep it under ~400KB. This image renders on the homepage, and a multi-megabyte
  poster is the single easiest way to wreck mobile load time.
- `.webp` is smaller than `.jpg` at the same quality if you can export it.
- The alt text lives beside `posterSrc` in the data file — update it too, so the
  poster's key facts (ages, times, location) reach screen readers and anyone on a
  slow connection who never sees the image.

If the file is missing the homepage block hides the image and falls back to the
text details, so a missing poster degrades quietly rather than showing a broken
image icon.
