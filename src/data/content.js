export const siteContent = {
  brand: {
    name: "Secret Box",
    tagline: "A private birthday memory book",
    recipient: "Annu",
    sender: "Secret Box",
  },

  ui: {
    nextLabel: "next",
    backLabel: "back",
    confettiLabel: "confetti",
  },

  music: {
    tracks: [
      {
        id: "annu",
        label: "Annu",
        srcs: ["/music/track-2-annu.mp3", "/music/annu.mp3"],
        volume: 0.9,
      },
      {
        id: "cake",
        label: "Celebration",
        srcs: ["/music/track-3-cake.mp3", "/music/cake.mp3"],
        volume: 0.9,
      },
      {
        id: "memories",
        label: "Memories",
        srcs: ["/music/track-4-memories.mp3", "/music/memories.mp3"],
        volume: 0.85,
      },
    ],
  },

  pages: [
    {
      id: "opening",
      label: "the wish",
      title: "Happy Birthday, Annu",
      subtitle: "Today is all about you.",
      cta: "Open your little surprise",
      musicTrack: null,
    },
    {
      id: "annu",
      label: "the birthday girl",
      title: "Annu",
      subtitle: "The birthday girl. My Annu.",
      musicTrack: "annu",
    },
    {
      id: "cake",
      label: "the cake",
      title: "Cake",
      subtitle: "Okayyy… birthday girl deserves a cake first.",
      musicTrack: "cake",
    },
    {
      id: "balloons",
      label: "ceremonial duties",
      title: "Balloons",
      subtitle: "pop them all — every one owes you a compliment.",
      musicTrack: "cake",
    },
    {
      id: "memories",
      label: "the memories",
      title: "The Memories",
      subtitle: "And somehow, there are so many more memories than pictures.",
      musicTrack: "memories",
    },
    {
      id: "receipt",
      label: "friendship, itemised",
      title: "Some people just make ordinary days better.",
      subtitle: "friendship, but make it official.",
      musicTrack: "memories",
    },
    {
      id: "letter",
      label: "a small letter",
      title: "The Letter",
      subtitle: "Read this slowly.",
      musicTrack: "memories",
    },
    {
      id: "finale",
      label: "the finale",
      title: "That’s all for you.",
      subtitle: "Just a little something from Secret Box.",
      musicTrack: "memories",
    },
  ],

  annu: {
    heading: "The birthday girl. My Annu.",
    note: "five frames of her.",
    images: [
      { id: "annu-1", src: "/images/annu/annu-1.jpg", alt: "Annu", ratio: "3:4" },
      { id: "annu-2", src: "/images/annu/annu-2.jpg", alt: "Annu", ratio: "3:4" },
      { id: "annu-3", src: "/images/annu/annu-3.jpg", alt: "Annu", ratio: "3:4" },
      { id: "annu-4", src: "/images/annu/annu-4.jpg", alt: "Annu", ratio: "3:4" },
      { id: "annu-5", src: "/images/annu/annu-5.jpg", alt: "Annu", ratio: "1:1" },
    ],
  },

  cake: {
    heading: "Okayyy… birthday girl deserves a cake first.",
    lightCta: "tap to light up the candles",
    wishCta: "make a wish",
    wishReceived: "wish received.",
    blowNote: "do not tell anyone what you wished.",
  },

  balloons: {
    heading: "pop them all — every one owes you a compliment.",
    allPopped: "all popped. okay, that was fun.",
    compliments: [
      "main character",
      "iconic laugh",
      "snack soulmate",
      "10/10 friend",
      "wish granted",
      "zero chill",
    ],
  },

  memories: {
    bottomLine: "And somehow, there are so many more memories than pictures.",
    captions: ["just us.", "another one.", "same chaos.", "one more memory.", "us, again."],
    images: [
      {
        id: "together-wide-1",
        src: "/images/together/together-wide-1.jpg",
        alt: "Annu and Secret Box",
        ratio: "16:9",
      },
      {
        id: "together-wide-2",
        src: "/images/together/together-wide-2.jpg",
        alt: "Annu and Secret Box",
        ratio: "16:9",
      },
      {
        id: "together-43",
        src: "/images/together/together-43.jpg",
        alt: "Annu and Secret Box",
        ratio: "4:3",
      },
      {
        id: "together-34-1",
        src: "/images/together/together-34-1.jpg",
        alt: "Annu and Secret Box",
        ratio: "3:4",
      },
      {
        id: "together-34-2",
        src: "/images/together/together-34-2.jpg",
        alt: "Annu and Secret Box",
        ratio: "3:4",
      },
    ],
  },

  receipt: {
    title: "Friendship Receipt",
    meta: "customer: Annu ✦ since childhood ✦ verified best friend",
    items: [
      { icon: "star", label: "unlimited hype", value: "∞" },
      { icon: "cup", label: "snacks, split 60/40 (your 60)", value: "priceless" },
      { icon: "note", label: "playlists traded, zero skips", value: "10/10" },
      { icon: "bell", label: "emergency snack response", value: "7 min avg" },
      { icon: "lock", label: "secret-keeping", value: "vault-grade" },
      { icon: "phone", label: "bad-day rescue line", value: "always picks up" },
    ],
    totalLabel: "TOTAL — one great friend",
    totalValue: "paid in full (in snacks)",
    footnote: "some names stay inside the box.",
  },

  letter: {
    toLabel: "to: Annu",
    greeting: "Dear Annu",
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
    ps: "P.S. this website never expires.",
    replayCta: "Replay the memories",
    photo: {
      id: "finale-34",
      src: "/images/finale/finale-34.jpg",
      alt: "Annu",
      ratio: "3:4",
    },
  },
};
