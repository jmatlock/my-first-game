// Static Star Trek trivia question bank. Add new records to this array; do not edit the game engine.
// References are for editorial fact checking, not fetched during gameplay.
const questionBank = [
  {
    "id": "ST-01-01",
    "film": "Star Trek: The Motion Picture",
    "prompt": "What is the name of the mysterious machine entity approaching Earth?",
    "choices": [
      "V’Ger",
      "The Borg Queen",
      "The Nexus"
    ],
    "correctIndex": 0,
    "explanation": "V’Ger is the massive machine entity searching for its creator.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-i-the-motion-picture"
  },
  {
    "id": "ST-01-02",
    "film": "Star Trek: The Motion Picture",
    "prompt": "Which officer was originally assigned to command the refitted Enterprise before Kirk took over?",
    "choices": [
      "Hikaru Sulu",
      "Will Decker",
      "Pavel Chekov"
    ],
    "correctIndex": 1,
    "explanation": "Will Decker was the Enterprise’s captain before Admiral Kirk assumed command.",
    "sourceUrl": "https://www.startrek.com/news/star-trek-and-the-motion-picture-new-fans"
  },
  {
    "id": "ST-01-03",
    "film": "Star Trek: The Motion Picture",
    "prompt": "Who composed the score for Star Trek: The Motion Picture?",
    "choices": [
      "Jerry Goldsmith",
      "James Horner",
      "Michael Giacchino"
    ],
    "correctIndex": 0,
    "explanation": "Jerry Goldsmith composed the film’s score.",
    "sourceUrl": "https://www.startrek.com/news/looking-back-at-music-of-the-motion-picture"
  },
  {
    "id": "ST-02-01",
    "film": "Star Trek II: The Wrath of Khan",
    "prompt": "Which character seeks revenge against Admiral Kirk?",
    "choices": [
      "General Chang",
      "Khan Noonien Singh",
      "Sybok"
    ],
    "correctIndex": 1,
    "explanation": "Khan Noonien Singh returns to exact revenge upon Kirk.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-ii-the-wrath-of-khan"
  },
  {
    "id": "ST-02-02",
    "film": "Star Trek II: The Wrath of Khan",
    "prompt": "Who portrayed Khan Noonien Singh in this film?",
    "choices": [
      "Ricardo Montalbán",
      "Christopher Lloyd",
      "Christopher Plummer"
    ],
    "correctIndex": 0,
    "explanation": "Ricardo Montalbán reprised his role as Khan.",
    "sourceUrl": "https://www.startrek.com/news/robin-curtis-search-for-spock-40th-anniversary"
  },
  {
    "id": "ST-02-03",
    "film": "Star Trek II: The Wrath of Khan",
    "prompt": "What scientific project is central to the conflict?",
    "choices": [
      "The Phoenix project",
      "Project Genesis",
      "The Omega Directive"
    ],
    "correctIndex": 1,
    "explanation": "Project Genesis was intended to transform lifeless worlds.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-ii-the-wrath-of-khan"
  },
  {
    "id": "ST-03-01",
    "film": "Star Trek III: The Search for Spock",
    "prompt": "Who directed Star Trek III: The Search for Spock?",
    "choices": [
      "William Shatner",
      "Nicholas Meyer",
      "Leonard Nimoy"
    ],
    "correctIndex": 2,
    "explanation": "Leonard Nimoy directed the third film.",
    "sourceUrl": "https://www.startrek.com/news/robin-curtis-search-for-spock-40th-anniversary"
  },
  {
    "id": "ST-03-02",
    "film": "Star Trek III: The Search for Spock",
    "prompt": "Which actor played the Klingon commander Kruge?",
    "choices": [
      "Christopher Lloyd",
      "David Warner",
      "John de Lancie"
    ],
    "correctIndex": 0,
    "explanation": "Christopher Lloyd portrayed Kruge.",
    "sourceUrl": "https://www.startrek.com/news/robin-curtis-search-for-spock-40th-anniversary"
  },
  {
    "id": "ST-03-03",
    "film": "Star Trek III: The Search for Spock",
    "prompt": "Who portrayed Lieutenant Saavik in this film?",
    "choices": [
      "Kirstie Alley",
      "Robin Curtis",
      "Gates McFadden"
    ],
    "correctIndex": 1,
    "explanation": "Robin Curtis took over the role of Saavik for Star Trek III.",
    "sourceUrl": "https://www.startrek.com/news/robin-curtis-search-for-spock-40th-anniversary"
  },
  {
    "id": "ST-04-01",
    "film": "Star Trek IV: The Voyage Home",
    "prompt": "Which animals does the crew retrieve from Earth’s past?",
    "choices": [
      "Orcas",
      "Humpback whales",
      "Dolphins"
    ],
    "correctIndex": 1,
    "explanation": "The crew brings back humpback whales to help answer the alien probe.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-iv-the-voyage-home"
  },
  {
    "id": "ST-04-02",
    "film": "Star Trek IV: The Voyage Home",
    "prompt": "To which century does the crew travel to retrieve the animals?",
    "choices": [
      "20th century",
      "19th century",
      "22nd century"
    ],
    "correctIndex": 0,
    "explanation": "The crew visits 1980s Earth, during the 20th century.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-iv-the-voyage-home"
  },
  {
    "id": "ST-04-03",
    "film": "Star Trek IV: The Voyage Home",
    "prompt": "What kind of captured vessel does Kirk’s crew use for the time-travel mission?",
    "choices": [
      "Romulan warbird",
      "Federation shuttle",
      "Klingon Bird-of-Prey"
    ],
    "correctIndex": 2,
    "explanation": "They travel aboard a captured Klingon Bird-of-Prey.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-iv-the-voyage-home"
  },
  {
    "id": "ST-05-01",
    "film": "Star Trek V: The Final Frontier",
    "prompt": "Who is Spock’s half-brother in The Final Frontier?",
    "choices": [
      "Sybok",
      "Sarek",
      "Tuvok"
    ],
    "correctIndex": 0,
    "explanation": "Sybok is Spock’s half-brother.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-v-the-final-frontier"
  },
  {
    "id": "ST-05-02",
    "film": "Star Trek V: The Final Frontier",
    "prompt": "What does Sybok hope to find beyond the Great Barrier?",
    "choices": [
      "The Nexus",
      "An entity he believes is God",
      "The Genesis planet"
    ],
    "correctIndex": 1,
    "explanation": "Sybok crosses the Great Barrier seeking an entity he believes is God.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-v-the-final-frontier"
  },
  {
    "id": "ST-05-03",
    "film": "Star Trek V: The Final Frontier",
    "prompt": "Who directed Star Trek V: The Final Frontier?",
    "choices": [
      "Leonard Nimoy",
      "Jonathan Frakes",
      "William Shatner"
    ],
    "correctIndex": 2,
    "explanation": "William Shatner directed the fifth Star Trek feature.",
    "sourceUrl": "https://www.startrek.com/news/looking-back-at-star-trek-v-the-final-frontier"
  },
  {
    "id": "ST-06-01",
    "film": "Star Trek VI: The Undiscovered Country",
    "prompt": "Which Klingon moon suffers a catastrophic explosion?",
    "choices": [
      "Praxis",
      "Qo’noS",
      "Rura Penthe"
    ],
    "correctIndex": 0,
    "explanation": "The Klingon moon Praxis explodes, threatening the Empire.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-vi-the-undiscovered-country"
  },
  {
    "id": "ST-06-02",
    "film": "Star Trek VI: The Undiscovered Country",
    "prompt": "What is the name of the Klingon chancellor pursuing peace?",
    "choices": [
      "Chang",
      "Gorkon",
      "Kruge"
    ],
    "correctIndex": 1,
    "explanation": "Chancellor Gorkon advocates peace with the Federation.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-vi-the-undiscovered-country"
  },
  {
    "id": "ST-06-03",
    "film": "Star Trek VI: The Undiscovered Country",
    "prompt": "Who played Klingon General Chang?",
    "choices": [
      "Christopher Plummer",
      "David Warner",
      "Malcolm McDowell"
    ],
    "correctIndex": 0,
    "explanation": "Christopher Plummer played General Chang.",
    "sourceUrl": "https://www.startrek.com/news/celebrating-the-undiscovered-countrys-25th-anniversary"
  },
  {
    "id": "ST-07-01",
    "film": "Star Trek Generations",
    "prompt": "Which two Enterprise captains meet in the Nexus?",
    "choices": [
      "Kirk and Picard",
      "Pike and Sisko",
      "Janeway and Archer"
    ],
    "correctIndex": 0,
    "explanation": "James T. Kirk and Jean-Luc Picard meet in the Nexus.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-generations"
  },
  {
    "id": "ST-07-02",
    "film": "Star Trek Generations",
    "prompt": "What is the name of the extraordinary energy realm in Generations?",
    "choices": [
      "The Bajoran wormhole",
      "The Nexus",
      "The Great Barrier"
    ],
    "correctIndex": 1,
    "explanation": "The Nexus is the mysterious phenomenon that brings the captains together.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-generations"
  },
  {
    "id": "ST-07-03",
    "film": "Star Trek Generations",
    "prompt": "What is the surname of the scientist attempting to return to the Nexus?",
    "choices": [
      "Soran",
      "Cochrane",
      "Maddox"
    ],
    "correctIndex": 0,
    "explanation": "Dr. Tolian Soran is obsessed with returning to the Nexus.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-generations"
  },
  {
    "id": "ST-08-01",
    "film": "Star Trek: First Contact",
    "prompt": "Which collective travels into Earth’s past?",
    "choices": [
      "The Dominion",
      "The Borg",
      "The Son’a"
    ],
    "correctIndex": 1,
    "explanation": "The Borg travel into Earth’s past to change history.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-viii-first-contact"
  },
  {
    "id": "ST-08-02",
    "film": "Star Trek: First Contact",
    "prompt": "What is the name of Earth’s first warp-capable ship?",
    "choices": [
      "Phoenix",
      "Defiant",
      "Voyager"
    ],
    "correctIndex": 0,
    "explanation": "The Phoenix makes humanity’s pioneering warp flight.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-viii-first-contact"
  },
  {
    "id": "ST-08-03",
    "film": "Star Trek: First Contact",
    "prompt": "Which historical inventor pilots Earth’s first warp flight?",
    "choices": [
      "Henry Archer",
      "Zefram Cochrane",
      "Richard Daystrom"
    ],
    "correctIndex": 1,
    "explanation": "Zefram Cochrane pilots the Phoenix.",
    "sourceUrl": "https://www.startrek.com/news/start-star-trek-with-first-contact"
  },
  {
    "id": "ST-09-01",
    "film": "Star Trek: Insurrection",
    "prompt": "Which peaceful population faces forced relocation?",
    "choices": [
      "The Ba’ku",
      "The Trill",
      "The Betazoids"
    ],
    "correctIndex": 0,
    "explanation": "Picard opposes the forced relocation of the Ba’ku.",
    "sourceUrl": "https://www.startrek.com/news/lessons-of-star-trek-insurrection"
  },
  {
    "id": "ST-09-02",
    "film": "Star Trek: Insurrection",
    "prompt": "Which group cooperates with Admiral Dougherty in the relocation plot?",
    "choices": [
      "The Borg",
      "The Son’a",
      "The Cardassians"
    ],
    "correctIndex": 1,
    "explanation": "The Son’a work with Admiral Dougherty to exploit the planet’s properties.",
    "sourceUrl": "https://www.startrek.com/news/a-guide-to-star-treks-bad-admirals"
  },
  {
    "id": "ST-09-03",
    "film": "Star Trek: Insurrection",
    "prompt": "What benefit is associated with the Ba’ku planet’s surrounding radiation?",
    "choices": [
      "Time travel",
      "Instant teleportation",
      "Rejuvenation"
    ],
    "correctIndex": 2,
    "explanation": "Metaphasic radiation has regenerative, rejuvenating effects.",
    "sourceUrl": "https://www.startrek.com/news/needs-of-the-many-personal-sacrifice"
  },
  {
    "id": "ST-10-01",
    "film": "Star Trek: Nemesis",
    "prompt": "Shinzon is a clone of which Starfleet captain?",
    "choices": [
      "James T. Kirk",
      "Jean-Luc Picard",
      "Hikaru Sulu"
    ],
    "correctIndex": 1,
    "explanation": "Shinzon was created as a clone of Jean-Luc Picard.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-nemesis"
  },
  {
    "id": "ST-10-02",
    "film": "Star Trek: Nemesis",
    "prompt": "What is the designation of the less advanced Soong-type android seen in Nemesis?",
    "choices": [
      "Lore",
      "B-4",
      "Lal"
    ],
    "correctIndex": 1,
    "explanation": "B-4 is a less advanced Soong-type android.",
    "sourceUrl": "https://www.startrek.com/news/the-nemesis-effect"
  },
  {
    "id": "ST-10-03",
    "film": "Star Trek: Nemesis",
    "prompt": "Which actor played Shinzon?",
    "choices": [
      "Tom Hardy",
      "Malcolm McDowell",
      "F. Murray Abraham"
    ],
    "correctIndex": 0,
    "explanation": "Tom Hardy portrayed Shinzon.",
    "sourceUrl": "https://www.startrek.com/movies/star-trek-nemesis"
  }
];
