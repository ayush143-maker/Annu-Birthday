export const siteContent = {
  brand: {
    name: "Secret Box",
    tagline: "A private birthday memory book",
    recipient: "Annu",
    sender: "Secret Box",
  },

  ui: {
    openingHint: "Everything here responds to a tap.",
    sectionShellReady: "Section shell ready",
  },

  music: {
    tracks: [
      {
        id: "track-1-opening",
        label: "Opening",
        src: "/music/track-1-opening.mp3",
        volume: 0.85,
      },
      {
        id: "track-2-annu",
        label: "Annu",
        src: "/music/track-2-annu.mp3",
        volume: 0.8,
      },
      {
        id: "track-3-cake",
        label: "Celebration",
        src: "/music/track-3-cake.mp3",
        volume: 0.88,
      },
    ],
  },

  pages: [
    {
      id: "opening",
      label: "01 · The Wish",
      title: "Happy Birthday, Annu",
      subtitle: "Today is all about you.",
      cta: "Open your little surprise",
      musicTrack: "track-1-opening",
    },
    {
      id: "annu",
      label: "02 · The Birthday Girl",
      title: "Annu",
      subtitle: "The birthday girl. My Annu.",
      musicTrack: "track-2-annu",
    },
    {
      id: "cake",
      label: "03 · The Cake",
      title: "Cake",
      subtitle: "Okayyy… birthday girl deserves a cake first.",
      cta: "Make a wish",
      musicTrack: "track-3-cake",
    },
    {
      id: "memories",
      label: "04 · The Memories",
      title: "The Memories",
      subtitle: "And somehow, there are so many more memories than pictures.",
      musicTrack: null,
    },
    {
      id: "secret-box",
      label: "05 · Secret Box",
      title: "Secret Box",
      subtitle: "Some things are better understood without being explained.",
      musicTrack: null,
    },
    {
      id: "letter",
      label: "06 · The Letter",
      title: "The Letter",
      subtitle: "Read this slowly.",
      musicTrack: null,
    },
    {
      id: "finale",
      label: "07 · The Finale",
      title: "That’s all for you.",
      subtitle: "Just a little something from Secret Box.",
      musicTrack: null,
    },
  ],

  annu: {
    heading: "The birthday girl. My Annu.",
    images: [
      {
        id: "annu-hero",
        src: "/images/annu/annu-hero.jpg",
        alt: "Annu",
        variant: "hero",
        aspect: "aspect-[4/5]",
      },
      {
        id: "annu-1",
        src: "/images/annu/annu-1.jpg",
        alt: "Annu",
        variant: "small",
        aspect: "aspect-[4/5]",
      },
      {
        id: "annu-2",
        src: "/images/annu/annu-2.jpg",
        alt: "Annu",
        variant: "small",
        aspect: "aspect-[4/5]",
      },
      {
        id: "annu-3",
        src: "/images/annu/annu-3.jpg",
        alt: "Annu",
        variant: "small",
        aspect: "aspect-[3/4]",
      },
      {
        id: "annu-4",
        src: "/images/annu/annu-4.jpg",
        alt: "Annu",
        variant: "small",
        aspect: "aspect-[3/4]",
      },
    ],
  },

  cake: {
    heading: "Okayyy… birthday girl deserves a cake first.",
    cta: "Make a wish",
    wishReceived: "Wish received.",
  },

  memories: {
    heading: "The Memories",
    bottomLine: "And somehow, there are so many more memories than pictures.",
    captions: ["just us.", "another one.", "same chaos.", "one more memory."],
    images: [
      {
        id: "together-hero",
        src: "/images/together/together-hero.jpg",
        alt: "Annu and Secret Box",
        variant: "hero",
        aspect: "aspect-[4/5]",
      },
      {
        id: "together-1",
        src: "/images/together/together-1.jpg",
        alt: "Annu and Secret Box",
        variant: "small",
        aspect: "aspect-[4/5]",
      },
      {
        id: "together-2",
        src: "/images/together/together-2.jpg",
        alt: "Annu and Secret Box",
        variant: "small",
        aspect: "aspect-[3/4]",
      },
      {
        id: "together-3",
        src: "/images/together/together-3.jpg",
        alt: "Annu and Secret Box",
        variant: "small",
        aspect: "aspect-[3/4]",
      },
      {
        id: "together-wide",
        src: "/images/together/together-wide.jpg",
        alt: "Annu and Secret Box",
        variant: "wide",
        aspect: "aspect-[16/10]",
      },
    ],
  },

  secretBox: {
    heading: "SECRET BOX",
    subtitle: "Some things are better understood without being explained.",
    finalLine: "Some names stay inside the box.",
    cards: [
      {
        id: "gossips",
        title: "Gossips",
        note: "Locked for us only.",
      },
      {
        id: "secrets",
        title: "Secrets",
        note: "Vault grade.",
      },
      {
        id: "random-conversations",
        title: "Random conversations",
        note: "Every bit of chaos.",
      },
      {
        id: "things-only-we-know",
        title: "Things only we know",
        note: "Better understood without explanation.",
      },
    ],
  },

  letter: {
    greeting: "Dear Annu",
    subtitle: "Read this slowly.",
    paragraphs: [
      "May God bless you and may you achieve great success in your life. I truly wish, bhai, that you become an IAS one day.",
      "It’s the first time in so many years that we’re not together on your birthday. I really miss having you around.",
      "Thank you for always supporting me, whether I’m right or wrong. I have a lot of friends here, but no one is like you, bhaiii.",
      "Our cities might be different, but being long-distance will never create any problem in our friendship, because no one in my life can ever replace Anushka Singh.",
      "I’m really missing all our gossips, the three of us, and all those little moments we shared.",
      "Loveee you so muchhh babyyyy.",
      "I really miss youuu babyyyy.",
      "No dear, you shared this letter.",
    ],
    signoff: "— Secret Box",
  },

  finale: {
    extraLine: "Happy Birthday once again, Annu.",
    replayCta: "Replay the memories",
  },
};
