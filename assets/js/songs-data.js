// UUMF Songs & Hymns — edit this file to add or update songs.
// Both handbook.html and booklet.html render from this array automatically.
//
// TO ADD A SONG — copy a song block and paste before the closing ];
// stanzas: each stanza is a string. Lines within a stanza separated by \n
// Verse labels go at the start of the stanza: "Verse 1:\nFirst line..."
// note: optional italic note shown below lyrics (leave "" if none)

const songs = [
  {
    hymnNum: "Hymn #1064",
    title: "Blue Boat Home",
    author: "Words: Peter Mayer · Music: Rowland H. Prichard",
    note: "",
    stanzas: [
      "Though below me, I feel no motion\nstanding on these mountains and plains\nFar away from the rolling ocean\nstill my dry land heart can say:",
      "I've been sailing all my life now,\nnever harbor or port have I known\nThe wide universe is the ocean I travel\nand the earth is my blue boat home",
      "Sun my sail and moon my rudder\nas I ply the starry sea,\nleaning over the edge in wonder,\ncasting questions into the deep",
      "Drifting here with my ship's companions,\nall we kindred pilgrim souls,\nmaking our way by the lights of the heavens\nin our beautiful blue boat home",
      "I give thanks to the waves upholding me,\nhail the great winds urging me on,\ngreet the infinite sea before me,\nsing the sky my sailor's song:",
      "I was born up on the fathoms,\nnever harbor or port have I known\nThe wide universe is the ocean I travel,\nand the earth is my blue boat home"
    ]
  },
  {
    hymnNum: "Hymn #1055",
    title: "How Sweet the Darkness",
    author: "Words: Rachel Bates · Music: Jason Shelton, © 2002",
    note: "",
    stanzas: [
      "Verse 1:\nWhen windows that are black and cold\nare lit anew with fires of gold;\nWhen dusk in quiet shall descend\nand darkness come once more a friend.",
      "Verse 2:\nWhen wings pursue their proper flight\nand bring not terror but delight;\nWhen clouds are innocent again\nand hide no storms of deadly rain;",
      "Verse 3:\nAnd when the sky is swept of wars\nand keeps but gentle moon and stars,\nthat peaceful sky, that harmless air,\nhow sweet, how sweet the darkness there."
    ]
  },
  {
    hymnNum: "Hymn #1066",
    title: "O Brother Sun",
    author: "Adapted from St. Francis of Assisi by Sharon Anway, © 2004 · Music: Traditional Scottish",
    note: "",
    stanzas: [
      "Verse 1:\nO Brother Sun, you bring us light,\nall shining 'round in fiery might.\nO Sister Moon, you heal and bless,\nyour beauty shines in tenderness.",
      "Verse 2:\nO Brother Fire, you warm our night\nwith all your dancing colored light.\nO Sister Earth, you feed all things,\nall birds, all creatures, all scales and wings.",
      "O Brother Wind, you sweep the hills,\nyour mighty breath both freshens and fills.\nO Sister Water, you cleanse and flow\nthrough rivers and streams, in ice and snow.",
      "O Sister Death, you meet us here\nand take us to our God so near.\nO God of Life, we give you praise\nfor all your creatures, for all your ways."
    ]
  },
  {
    hymnNum: "First UU Church Hymn",
    title: "From All Who Dwell Below the Skies",
    author: "Bilingual: English & Spanish",
    note: "",
    stanzas: [
      "From all who dwell below the skies,\nLet faith and hope with love arise,\nLet beauty, truth, and good be sung\nThrough every land, by every tongue",
      "En Español:\nDe todos bajo el gran sol\nSurja esperanza, fe, amor\nVerdad y belleza cantando,\nDe cada tierra, cada voz"
    ]
  },
  {
    hymnNum: "Welcoming Hymn",
    title: "You Are Welcome Here",
    author: "Words: Marty Parks · Used at First UU San Diego services",
    note: "",
    stanzas: [
      "Come, you wounded, weakened, and weary, you are welcome here.\nCome, discouraged, come, brokenhearted, you are welcome here.\nThis is a refuge for grace; this is a harbor of mercy.\nSo come, you wounded, weakened, and weary, you are welcome here, you are welcome here.",
      "Come, you wanderer, spent from the journey. Come with every burden you carry, you are welcome here.\nThis is a refuge for grace; this is a harbor for mercy.\nSo come you wanderer, spent from the journey, you are welcome here, you are welcome here.",
      "Come, enter love's embrace; receive amazing grace here in this place.",
      "Come, you hungry; come, all you thirsty, you are welcome here.\nCome for healing, strength, and forgiveness, you are welcome here. You are welcome here."
    ]
  },
  {
    hymnNum: "Classic",
    title: "Stand By Me",
    author: "Ben E. King · Brotherhood version used at closings",
    note: "",
    stanzas: [
      "When the night has come\nAnd the land is dark\nAnd the moon is the only light we'll see\nNo, I won't be afraid\nNo, I won't be afraid\nJust as long as you stand, stand by me",
      "So Brother, Brother, stand by me\nOh, stand by me\n... Oh, stand\nStand by me (stand by me)",
      "If the sky that we look upon\nShould tumble and fall\nOr the mountains should crumble to the sea\nI won't cry, I won't cry\nNo, I won't shed a tear\nJust as long as you stand, Stand by me",
      "Whenever you're in trouble,\nWon't you stand by me\nOh, stand by me\nOh, just stand now\nOh, stand, stand by me"
    ]
  },
  {
    hymnNum: "Classic",
    title: "Daydream",
    author: "The Lovin' Spoonful · Used at lighter gatherings",
    note: "",
    stanzas: [
      "What a day for a daydream\nWhat a day for a daydreamin' boy\nAnd now I'm lost in a daydream\nDreamin' 'bout my bundle of joy",
      "I've been havin' a sweet dream\nI've been dreamin' since I woke up today\nIt's starrin' me and my sweet thing\n'Cause he's the one makes me feel this way",
      "And you can be sure that if you're feelin' allright\nA daydream will last 'til long into the night\nTomorrow at breakfast, you may prick up your ears\nOr you may be dreamin' for a thousand years",
      "What a day for a daydream\nCustom-made for a daydreamin' boy\nNow I'm lost in a daydream\nDreamin' 'bout my bundle of joy"
    ]
  },
  {
    hymnNum: "UUMF Chant Song",
    title: "Unitarian Universalism",
    author: "Presented by Laila Ibrahim · de Benneville Summer Break Workshop",
    note: "Not yet an official UUMF chant — introduced at a de Benneville Summer Break workshop.",
    stanzas: [
      "It's a blessing each of us was born\nIt matters what we do with our lives\nWhat each of us knows about God is a piece of the truth\nWe don't have to do it alone\nUnitarian Universalism"
    ]
  },
  {
    hymnNum: "Service Song",
    title: "Mae-e (\"Forward\")",
    author: "Words: Kentaro Sato · English translation used at First UU San Diego services",
    note: "",
    stanzas: [
      "I remember your warm hand. I remember your kind voice. I remember your honest eyes & quiet prayer.",
      "When I close my eyes I recall the time we spent together & the time we sang together. The end of music . . . is not our farewell.",
      "As music lives again, so will you live again & again in my memory.",
      "Ah! I remember . . . A dream you cherished. I remember . . . A smile you beamed at tomorrow. With memories of you in my heart, one step at a time, I walk forward. Embracing every day's happiness . . . & sadness . . .",
      "One step at a time, One step at a time, I walk forward, I walk forward."
    ]
  },
];
