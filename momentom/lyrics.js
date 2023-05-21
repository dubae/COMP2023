const lyrics = [
    {
        lyric: "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
        artist:"- Walt Disney",
    },
    {
        lyric: "Never say goodbye because goodbye means going away and going away means forgetting.",
        artist:"- Peter Pan",
    },
    {
        lyric: "Some people are worth melting for.",
        artist:"- Frozen(Olaf)",
    },
    {
        lyric: "If you focus on what you left behind, you will never see what lies ahead.",
        artist:"- Ratatouille",
    },
    {
        lyric: "The flower that blooms in adversity is the most rare and beautiful of all.",
        artist:"- Mulan",
    },
    {
        lyric: "The past can hurt. But from the way I see it, you can either run from it, or learn from it.",
        artist:"-  Lion King",
    },
    {
        lyric: "You cannot be happy every day. But there are happy things every day.",
        artist:"- Winnie the Pooh",
    },
];

const lyric = document.querySelector("#lyric span:first-child");
const artist = document.querySelector("#lyric span:last-child");

const todaysLyrics= lyrics[Math.floor(Math.random()*lyrics.length)];
lyric.innerText = todaysLyrics.lyric;
artist.innerText = todaysLyrics.artist;