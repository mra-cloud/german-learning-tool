(function () {
  "use strict";

  /* ---------------------------------------------------------------------
   * 1. GRAMMAR TAGS — labels + one-line tips shown in review/stats
   * ------------------------------------------------------------------- */
  var TAGS = {
    "articles": { label: "Articles (der/die/das)", tip: "German nouns have gender — der (m), die (f), das (n) — and the article changes with case." },
    "accusative": { label: "Accusative case", tip: "Direct objects take the accusative: der→den, ein→einen for masculine nouns." },
    "present-tense": { label: "Present tense", tip: "Regular verbs add -e/-st/-t/-en/-t/-en; watch stem changes like fahren → du fährst." },
    "plural": { label: "Plural nouns", tip: "German plurals aren't just -s: der Tisch→die Tische, das Kind→die Kinder — learn each plural form." },
    "negation": { label: "Negation (nicht/kein)", tip: "Use kein(e) to negate a noun with an indefinite/no article, and nicht for verbs, adjectives, or definite nouns." },
    "w-questions": { label: "W-questions", tip: "Question words (wo, wie, was, wer…) come first, immediately followed by the conjugated verb." },
    "modal-verbs": { label: "Modal verbs", tip: "Modal verbs (können, wollen, möchten…) push the main verb to the infinitive at the end of the clause." },
    "possessives": { label: "Possessive articles", tip: "Possessives (mein, dein, sein…) take the same endings as 'ein' and agree with gender and case." },

    "perfect-tense": { label: "Perfect tense (Perfekt)", tip: "Use haben/sein + past participle; sein is used with motion or change-of-state verbs." },
    "separable-verbs": { label: "Separable verbs", tip: "Prefixes like auf-, an-, aus- split off and move to the end of the clause in the present tense." },
    "dative": { label: "Dative case", tip: "Indirect objects and verbs like helfen/danken take the dative: der→dem, die→der, ein→einem/einer." },
    "two-way-prepositions": { label: "Two-way prepositions", tip: "in, auf, unter… take accusative for motion (wohin) and dative for location (wo)." },
    "comparative": { label: "Comparative", tip: "Add -er to the adjective for comparisons and use 'als' for 'than': schneller als." },
    "imperative": { label: "Imperative", tip: "The du-imperative usually drops the ending (Komm!); the Sie-form keeps verb-Sie order (Kommen Sie!)." },
    "reflexive-verbs": { label: "Reflexive verbs", tip: "Verbs like sich freuen or sich erinnern need a reflexive pronoun matching the subject." },
    "subordinate-weil-dass": { label: "Subordinate clauses (dass/weil)", tip: "After dass, weil and similar conjunctions, the conjugated verb moves to the very end." },

    "preterite": { label: "Simple past (Präteritum)", tip: "Used mainly in writing and for common verbs like sein/haben/modals: war, hatte, konnte…" },
    "relative-clauses": { label: "Relative clauses", tip: "Relative pronouns (der/die/das/dessen/deren) match the noun's gender/number but take their case from the clause." },
    "passive-basic": { label: "Passive voice", tip: "Form the passive with werden + past participle; the agent, if named, takes 'von + dative'." },
    "subjunctive-II-basic": { label: "Konjunktiv II (hypotheticals)", tip: "Use würde + infinitive, or hätte/wäre, for hypothetical 'would/could/if' statements." },
    "genitive": { label: "Genitive case", tip: "Shows possession: der→des (+ -(e)s on masc./neuter nouns), die→der: das Auto meines Bruders." },
    "adjective-endings": { label: "Adjective endings", tip: "Endings before a noun depend on article type, gender, number and case — practice the declension tables." },
    "infinitive-um-zu": { label: "'um...zu' clauses", tip: "Use 'um…zu + infinitive' for purpose ('in order to') when the subject stays the same." },
    "conjunctions-obwohl": { label: "Concessive conjunctions", tip: "obwohl and trotzdem both show contrast, but obwohl sends the verb to the end, trotzdem doesn't." },

    "subjunctive-II-advanced": { label: "Konjunktiv II (past hypotheticals)", tip: "For past hypotheticals use hätte/wäre + past participle: wäre gegangen, hätte gemacht." },
    "passive-advanced": { label: "Modal passive", tip: "Combine a modal with the passive: muss…werden — the modal is conjugated, werden stays infinitive at the end." },
    "extended-participle": { label: "Extended participle phrases", tip: "A participle phrase can sit before the noun like an adjective: die schnell wachsende Stadt." },
    "nominalization": { label: "Nominalization", tip: "German often turns verbs into nouns for a formal tone: senken → die Senkung." },
    "reported-speech": { label: "Reported speech", tip: "Formal reported speech often uses Konjunktiv I (er sei, er habe) or würde-forms to distance the claim." },
    "verb-prepositions": { label: "Verbs with fixed prepositions", tip: "Many verbs pair with a specific preposition + case that must be memorized: sich interessieren für." },
    "word-order-advanced": { label: "Advanced word order", tip: "Elements like kaum, erst, nicht nur at the start of a clause trigger verb-subject inversion." },
    "comparative-advanced": { label: "Advanced comparatives", tip: "'je…desto' pairs two comparatives; 'immer + comparative' shows an ongoing increase (immer schlimmer)." },

    "subjunctive-I": { label: "Konjunktiv I (indirect speech)", tip: "Formal/journalistic reported speech uses Konjunktiv I (er sei, er habe, er werde) to mark another's claim." },
    "complex-relative-clauses": { label: "Complex relative clauses", tip: "Genitive relative pronouns (dessen/deren) and relative clauses with prepositions need careful case tracking." },
    "nominal-style": { label: "Nominal style", tip: "Formal/academic German prefers noun phrases over verb phrases: die Umsetzung der Strategie." },
    "idiomatic-expressions": { label: "Idiomatic expressions", tip: "Idioms rarely translate literally — learn the whole fixed phrase and its figurative meaning." },
    "advanced-connectors": { label: "Advanced connectors", tip: "Connectors like 'nicht nur…sondern auch' and 'nicht zuletzt' link ideas in a formal, structured tone." },
    "participle-constructions": { label: "Participle constructions", tip: "A participial phrase (Nachdem…, Von…umgeben) can replace a subordinate clause for a compact, formal style." },
    "genitive-advanced": { label: "Genitive in formal writing", tip: "The genitive is common in formal register for possession and after trotz, wegen, während." },
    "formal-register": { label: "Formal/business register", tip: "Formal letters use set polite phrases (wir möchten Sie…, wir bedauern…) and the Sie-form throughout." },

    "stylistic-inversion": { label: "Stylistic inversion", tip: "Fronting wenig, selten, nie for emphasis forces verb-subject inversion — a literary device." },
    "complex-subordination": { label: "Complex subordination", tip: "Structures like 'wer…will' or 'wie sehr…auch' embed a full clause as the sentence's subject or condition." },
    "idioms-advanced": { label: "Advanced idioms", tip: "Near-native fluency means recognizing culturally rooted idioms and rendering their meaning, not their words." },
    "rhetorical-devices": { label: "Rhetorical devices", tip: "Literary writing uses devices like 'gerade…macht' or contrastive 'jedoch' to shape emphasis and flow." },
    "modal-particles-nuanced": { label: "Modal particles", tip: "Particles like wohl, ja, sozusagen add subtle shades of certainty or attitude with no direct English equivalent." },
    "academic-register": { label: "Academic register", tip: "Academic writing favors hedged, impersonal phrasing: 'es lässt sich argumentieren, dass…'." },
    "advanced-nominalization": { label: "Advanced nominalization", tip: "Dense nominal phrases (die Unterdrückung Andersdenkender) pack a whole clause into a noun phrase." },

    "football-vocab": { label: "Football vocabulary", tip: "Core football (soccer) terms — Tor, Schiedsrichter, Elfmeter, Mannschaft — worth memorizing as standalone vocabulary." }
  };

  /* ---------------------------------------------------------------------
   * 1b. TOPIC SECTIONS — a content filter that sits within each level
   * ------------------------------------------------------------------- */
  var SECTIONS = [
    { id: "general", label: "General" },
    { id: "shopping", label: "🛍️ Shopping" },
    { id: "travel", label: "✈️ Travel" },
    { id: "work", label: "💼 Work" },
    { id: "sports", label: "⚽ Sports" },
    { id: "school", label: "🎓 School" }
  ];

  /* ---------------------------------------------------------------------
   * 2. SENTENCE BANK — ~20 per CEFR level
   * ------------------------------------------------------------------- */
  var SENTENCES = {
    A1: [
      { en: "I am a student.", de: ["Ich bin Student.", "Ich bin ein Student.", "Ich bin Studentin.", "Ich bin eine Studentin."], tags: ["articles"] },
      { en: "She has a dog.", de: ["Sie hat einen Hund."], tags: ["accusative"] },
      { en: "We live in Berlin.", de: ["Wir wohnen in Berlin."], tags: ["present-tense"] },
      { en: "The children are playing in the garden.", de: ["Die Kinder spielen im Garten."], tags: ["plural", "present-tense"] },
      { en: "He does not have time.", de: ["Er hat keine Zeit."], tags: ["negation"] },
      { en: "I don't understand that.", de: ["Ich verstehe das nicht."], tags: ["negation"] },
      { en: "Where do you live?", de: ["Wo wohnst du?"], tags: ["w-questions"] },
      { en: "What is your name?", de: ["Wie heißt du?", "Wie heißen Sie?"], tags: ["w-questions"] },
      { en: "Can you help me?", de: ["Kannst du mir helfen?"], tags: ["modal-verbs"] },
      { en: "I would like a coffee.", de: ["Ich möchte einen Kaffee."], tags: ["modal-verbs", "accusative"] },
      { en: "My father is a teacher.", de: ["Mein Vater ist Lehrer.", "Mein Vater ist ein Lehrer."], tags: ["possessives"] },
      { en: "This is my house.", de: ["Das ist mein Haus."], tags: ["possessives"] },
      { en: "The book is on the table.", de: ["Das Buch liegt auf dem Tisch.", "Das Buch ist auf dem Tisch."], tags: ["articles"] },
      { en: "I eat an apple every day.", de: ["Ich esse jeden Tag einen Apfel."], tags: ["accusative", "present-tense"] },
      { en: "We have two children.", de: ["Wir haben zwei Kinder."], tags: ["plural"] },
      { en: "She doesn't like coffee.", de: ["Sie mag keinen Kaffee."], tags: ["negation", "accusative"] },
      { en: "How old are you?", de: ["Wie alt bist du?", "Wie alt sind Sie?"], tags: ["w-questions"] },
      { en: "I need a new phone.", de: ["Ich brauche ein neues Handy."], tags: ["accusative", "articles"] },
      { en: "The weather is nice today.", de: ["Das Wetter ist heute schön."], tags: ["present-tense"] },
      { en: "We want to go to the cinema.", de: ["Wir wollen ins Kino gehen."], tags: ["modal-verbs"] },

      { en: "How much does this cost?", de: ["Wie viel kostet das?"], tags: ["w-questions"], section: "shopping" },
      { en: "I would like to buy a shirt.", de: ["Ich möchte ein Hemd kaufen."], tags: ["modal-verbs", "accusative"], section: "shopping" },
      { en: "Do you have this in a bigger size?", de: ["Haben Sie das in einer größeren Größe?"], tags: ["dative"], section: "shopping" },
      { en: "The shirt is too expensive.", de: ["Das Hemd ist zu teuer."], tags: ["present-tense"], section: "shopping" },
      { en: "Can I pay by card?", de: ["Kann ich mit Karte bezahlen?"], tags: ["modal-verbs"], section: "shopping" },
      { en: "Where is the supermarket?", de: ["Wo ist der Supermarkt?"], tags: ["w-questions"], section: "shopping" },

      { en: "Where is the train station?", de: ["Wo ist der Bahnhof?"], tags: ["w-questions"], section: "travel" },
      { en: "I would like a ticket to Munich.", de: ["Ich möchte eine Fahrkarte nach München."], tags: ["modal-verbs", "accusative"], section: "travel" },
      { en: "The train leaves at nine o'clock.", de: ["Der Zug fährt um neun Uhr ab."], tags: ["separable-verbs"], section: "travel" },
      { en: "I have a suitcase and a backpack.", de: ["Ich habe einen Koffer und einen Rucksack."], tags: ["accusative"], section: "travel" },
      { en: "Is this seat free?", de: ["Ist dieser Platz frei?"], tags: ["present-tense"], section: "travel" },
      { en: "We are flying to Spain.", de: ["Wir fliegen nach Spanien."], tags: ["present-tense"], section: "travel" },

      { en: "I work in an office.", de: ["Ich arbeite in einem Büro."], tags: ["present-tense"], section: "work" },
      { en: "My colleague is very friendly.", de: ["Mein Kollege ist sehr freundlich."], tags: ["possessives"], section: "work" },
      { en: "I start work at eight o'clock.", de: ["Ich fange um acht Uhr an."], tags: ["separable-verbs"], section: "work" },
      { en: "What is your job?", de: ["Was ist dein Beruf?"], tags: ["w-questions"], section: "work" },
      { en: "I don't have a meeting today.", de: ["Ich habe heute kein Meeting."], tags: ["negation"], section: "work" },
      { en: "Can I have a day off?", de: ["Kann ich einen Tag frei haben?"], tags: ["modal-verbs"], section: "work" },

      { en: "I go to school every day.", de: ["Ich gehe jeden Tag zur Schule."], tags: ["present-tense"], section: "school" },
      { en: "My teacher is very nice.", de: ["Meine Lehrerin ist sehr nett."], tags: ["possessives"], section: "school" },
      { en: "We have math on Monday.", de: ["Wir haben am Montag Mathe."], tags: ["present-tense"], section: "school" },
      { en: "I don't have homework today.", de: ["Ich habe heute keine Hausaufgaben."], tags: ["negation"], section: "school" },
      { en: "Where is the classroom?", de: ["Wo ist das Klassenzimmer?"], tags: ["w-questions"], section: "school" },
      { en: "Can I ask a question?", de: ["Kann ich eine Frage stellen?"], tags: ["modal-verbs"], section: "school" },

      { en: "I play football every weekend.", de: ["Ich spiele jedes Wochenende Fußball."], tags: ["present-tense"], section: "sports" },
      { en: "The ball is round.", de: ["Der Ball ist rund."], tags: ["present-tense"], section: "sports" },
      { en: "He is the goalkeeper.", de: ["Er ist der Torwart."], tags: ["football-vocab"], section: "sports" },
      { en: "She scores a goal.", de: ["Sie schießt ein Tor."], tags: ["football-vocab", "accusative"], section: "sports" },
      { en: "The referee has a whistle.", de: ["Der Schiedsrichter hat eine Pfeife."], tags: ["accusative"], section: "sports" },
      { en: "My team wins the match.", de: ["Meine Mannschaft gewinnt das Spiel."], tags: ["possessives", "accusative"], section: "sports" },
      { en: "This is a yellow card.", de: ["Das ist eine gelbe Karte."], tags: ["football-vocab"], section: "sports" },
      { en: "That is a red card.", de: ["Das ist eine rote Karte."], tags: ["football-vocab"], section: "sports" },
      { en: "The stadium is very big.", de: ["Das Stadion ist sehr groß."], tags: ["present-tense"], section: "sports" },
      { en: "We need eleven players.", de: ["Wir brauchen elf Spieler."], tags: ["plural"], section: "sports" },
      { en: "Where is the football pitch?", de: ["Wo ist der Fußballplatz?"], tags: ["w-questions"], section: "sports" },
      { en: "I like football very much.", de: ["Ich mag Fußball sehr."], tags: ["football-vocab"], section: "sports" }
    ],
    A2: [
      { en: "I have already eaten.", de: ["Ich habe schon gegessen."], tags: ["perfect-tense"] },
      { en: "We went to the cinema yesterday.", de: ["Wir sind gestern ins Kino gegangen."], tags: ["perfect-tense"] },
      { en: "I get up at seven o'clock.", de: ["Ich stehe um sieben Uhr auf."], tags: ["separable-verbs"] },
      { en: "He calls his mother every evening.", de: ["Er ruft jeden Abend seine Mutter an."], tags: ["separable-verbs"] },
      { en: "Can you give me the book?", de: ["Kannst du mir das Buch geben?"], tags: ["dative"] },
      { en: "I am helping my neighbor.", de: ["Ich helfe meinem Nachbarn."], tags: ["dative"] },
      { en: "The cat is sleeping under the table.", de: ["Die Katze schläft unter dem Tisch."], tags: ["two-way-prepositions"] },
      { en: "She is putting the book on the table.", de: ["Sie legt das Buch auf den Tisch."], tags: ["two-way-prepositions"] },
      { en: "This car is faster than that one.", de: ["Dieses Auto ist schneller als jenes."], tags: ["comparative"] },
      { en: "My sister is older than me.", de: ["Meine Schwester ist älter als ich."], tags: ["comparative"] },
      { en: "Please close the door!", de: ["Schließ bitte die Tür!", "Schließen Sie bitte die Tür!"], tags: ["imperative"] },
      { en: "Wait a moment, please!", de: ["Warte bitte einen Moment!", "Warten Sie bitte einen Moment!"], tags: ["imperative"] },
      { en: "I am looking forward to the weekend.", de: ["Ich freue mich auf das Wochenende."], tags: ["reflexive-verbs"] },
      { en: "Do you remember that day?", de: ["Erinnerst du dich an diesen Tag?"], tags: ["reflexive-verbs"] },
      { en: "I think that he is right.", de: ["Ich glaube, dass er recht hat."], tags: ["subordinate-weil-dass"] },
      { en: "She stays at home because she is sick.", de: ["Sie bleibt zu Hause, weil sie krank ist."], tags: ["subordinate-weil-dass"] },
      { en: "We have already bought the tickets.", de: ["Wir haben die Karten schon gekauft."], tags: ["perfect-tense"] },
      { en: "He turns off the light before he goes to bed.", de: ["Er macht das Licht aus, bevor er ins Bett geht."], tags: ["separable-verbs", "subordinate-weil-dass"] },
      { en: "The teacher gives the students homework.", de: ["Der Lehrer gibt den Schülern Hausaufgaben."], tags: ["dative"] },
      { en: "I am more tired than yesterday.", de: ["Ich bin müder als gestern."], tags: ["comparative"] },

      { en: "I bought a new jacket yesterday.", de: ["Ich habe gestern eine neue Jacke gekauft."], tags: ["perfect-tense"], section: "shopping" },
      { en: "Can you give me a discount?", de: ["Können Sie mir einen Rabatt geben?"], tags: ["dative"], section: "shopping" },
      { en: "This store closes at eight o'clock.", de: ["Dieses Geschäft schließt um acht Uhr."], tags: ["present-tense"], section: "shopping" },
      { en: "I am looking for a pair of shoes.", de: ["Ich suche ein Paar Schuhe."], tags: ["accusative"], section: "shopping" },
      { en: "This bag is cheaper than that one.", de: ["Diese Tasche ist billiger als jene."], tags: ["comparative"], section: "shopping" },
      { en: "Please show me that jacket.", de: ["Zeigen Sie mir bitte diese Jacke."], tags: ["imperative"], section: "shopping" },

      { en: "We arrived at the airport two hours early.", de: ["Wir sind zwei Stunden früher am Flughafen angekommen."], tags: ["perfect-tense"], section: "travel" },
      { en: "Can you show me the way to the hotel?", de: ["Können Sie mir den Weg zum Hotel zeigen?"], tags: ["dative"], section: "travel" },
      { en: "The plane is faster than the train.", de: ["Das Flugzeug ist schneller als der Zug."], tags: ["comparative"], section: "travel" },
      { en: "Please fasten your seatbelt.", de: ["Bitte schnallen Sie sich an."], tags: ["imperative", "reflexive-verbs"], section: "travel" },
      { en: "I am looking forward to the trip.", de: ["Ich freue mich auf die Reise."], tags: ["reflexive-verbs"], section: "travel" },
      { en: "We missed the bus because we got up late.", de: ["Wir haben den Bus verpasst, weil wir spät aufgestanden sind."], tags: ["subordinate-weil-dass"], section: "travel" },

      { en: "I have already finished the report.", de: ["Ich habe den Bericht schon fertiggestellt."], tags: ["perfect-tense"], section: "work" },
      { en: "Can you send me the email?", de: ["Kannst du mir die E-Mail schicken?"], tags: ["dative"], section: "work" },
      { en: "This project is more important than the other one.", de: ["Dieses Projekt ist wichtiger als das andere."], tags: ["comparative"], section: "work" },
      { en: "Please call the client back.", de: ["Rufen Sie bitte den Kunden zurück."], tags: ["imperative", "separable-verbs"], section: "work" },
      { en: "I am preparing for the meeting.", de: ["Ich bereite mich auf das Meeting vor."], tags: ["reflexive-verbs"], section: "work" },
      { en: "She works a lot because she wants a promotion.", de: ["Sie arbeitet viel, weil sie eine Beförderung will."], tags: ["subordinate-weil-dass"], section: "work" },

      { en: "I have already done my homework.", de: ["Ich habe meine Hausaufgaben schon gemacht."], tags: ["perfect-tense"], section: "school" },
      { en: "Can you help me with this exercise?", de: ["Kannst du mir bei dieser Übung helfen?"], tags: ["dative"], section: "school" },
      { en: "This subject is more difficult than that one.", de: ["Dieses Fach ist schwieriger als jenes."], tags: ["comparative"], section: "school" },
      { en: "Please open your books.", de: ["Öffnet bitte eure Bücher."], tags: ["imperative"], section: "school" },
      { en: "I am preparing for the exam.", de: ["Ich bereite mich auf die Prüfung vor."], tags: ["reflexive-verbs"], section: "school" },
      { en: "He failed the test because he didn't study.", de: ["Er ist durch die Prüfung gefallen, weil er nicht gelernt hat."], tags: ["subordinate-weil-dass"], section: "school" },

      { en: "We watched the match yesterday.", de: ["Wir haben gestern das Spiel gesehen."], tags: ["perfect-tense"], section: "sports" },
      { en: "He shot the ball into the goal.", de: ["Er hat den Ball ins Tor geschossen."], tags: ["perfect-tense", "football-vocab"], section: "sports" },
      { en: "The player passes the ball to his teammate.", de: ["Der Spieler passt den Ball zu seinem Mitspieler."], tags: ["football-vocab", "dative"], section: "sports" },
      { en: "This team is stronger than that team.", de: ["Diese Mannschaft ist stärker als jene Mannschaft."], tags: ["comparative"], section: "sports" },
      { en: "Pass me the ball!", de: ["Pass mir den Ball!"], tags: ["imperative", "dative"], section: "sports" },
      { en: "I am looking forward to the final.", de: ["Ich freue mich auf das Finale."], tags: ["reflexive-verbs"], section: "sports" },
      { en: "The coach is angry because the team lost.", de: ["Der Trainer ist wütend, weil die Mannschaft verloren hat."], tags: ["subordinate-weil-dass"], section: "sports" },
      { en: "The match ended in a draw.", de: ["Das Spiel endete unentschieden."], tags: ["football-vocab"], section: "sports" },
      { en: "He took a penalty kick.", de: ["Er hat einen Elfmeter geschossen."], tags: ["football-vocab", "perfect-tense"], section: "sports" },
      { en: "The defender stopped the attack.", de: ["Der Verteidiger stoppte den Angriff."], tags: ["football-vocab"], section: "sports" },
      { en: "The forward is very fast.", de: ["Der Stürmer ist sehr schnell."], tags: ["football-vocab"], section: "sports" },
      { en: "We celebrate the victory.", de: ["Wir feiern den Sieg."], tags: ["football-vocab", "accusative"], section: "sports" }
    ],
    B1: [
      { en: "When I was a child, I lived in Munich.", de: ["Als ich ein Kind war, wohnte ich in München."], tags: ["preterite"] },
      { en: "It was raining yesterday.", de: ["Gestern regnete es.", "Es regnete gestern."], tags: ["preterite"] },
      { en: "The man who lives next door is a doctor.", de: ["Der Mann, der nebenan wohnt, ist Arzt."], tags: ["relative-clauses"] },
      { en: "The book that I am reading is very interesting.", de: ["Das Buch, das ich lese, ist sehr interessant."], tags: ["relative-clauses"] },
      { en: "The house was built in 1990.", de: ["Das Haus wurde 1990 gebaut."], tags: ["passive-basic"] },
      { en: "The letter is being written.", de: ["Der Brief wird geschrieben."], tags: ["passive-basic"] },
      { en: "If I had more time, I would travel more.", de: ["Wenn ich mehr Zeit hätte, würde ich mehr reisen."], tags: ["subjunctive-II-basic"] },
      { en: "I would help you if I could.", de: ["Ich würde dir helfen, wenn ich könnte."], tags: ["subjunctive-II-basic"] },
      { en: "This is the car of my brother.", de: ["Das ist das Auto meines Bruders."], tags: ["genitive"] },
      { en: "The color of the sky is blue.", de: ["Die Farbe des Himmels ist blau."], tags: ["genitive"] },
      { en: "I bought a new red car.", de: ["Ich habe ein neues rotes Auto gekauft."], tags: ["adjective-endings"] },
      { en: "She is wearing a beautiful blue dress.", de: ["Sie trägt ein schönes blaues Kleid."], tags: ["adjective-endings"] },
      { en: "I go to the gym in order to stay fit.", de: ["Ich gehe ins Fitnessstudio, um fit zu bleiben."], tags: ["infinitive-um-zu"] },
      { en: "He learns German in order to work in Germany.", de: ["Er lernt Deutsch, um in Deutschland zu arbeiten."], tags: ["infinitive-um-zu"] },
      { en: "Although it was raining, we went for a walk.", de: ["Obwohl es regnete, sind wir spazieren gegangen."], tags: ["conjunctions-obwohl"] },
      { en: "He was tired; nevertheless, he kept working.", de: ["Er war müde, trotzdem arbeitete er weiter."], tags: ["conjunctions-obwohl"] },
      { en: "The keys were found under the sofa.", de: ["Die Schlüssel wurden unter dem Sofa gefunden."], tags: ["passive-basic"] },
      { en: "The woman whose car was stolen called the police.", de: ["Die Frau, deren Auto gestohlen wurde, rief die Polizei."], tags: ["relative-clauses"] },
      { en: "We used to live in a small village.", de: ["Wir wohnten früher in einem kleinen Dorf."], tags: ["preterite"] },
      { en: "If I were you, I would say nothing.", de: ["Wenn ich du wäre, würde ich nichts sagen.", "An deiner Stelle würde ich nichts sagen."], tags: ["subjunctive-II-basic"] },

      { en: "I bought a jacket that was on sale.", de: ["Ich kaufte eine Jacke, die im Angebot war."], tags: ["relative-clauses", "preterite"], section: "shopping" },
      { en: "The price was reduced by ten percent.", de: ["Der Preis wurde um zehn Prozent gesenkt."], tags: ["passive-basic"], section: "shopping" },
      { en: "If it were cheaper, I would buy it.", de: ["Wenn es billiger wäre, würde ich es kaufen."], tags: ["subjunctive-II-basic"], section: "shopping" },
      { en: "The color of the dress didn't suit me.", de: ["Die Farbe des Kleides stand mir nicht."], tags: ["genitive"], section: "shopping" },
      { en: "I need a warm winter jacket.", de: ["Ich brauche eine warme Winterjacke."], tags: ["adjective-endings"], section: "shopping" },
      { en: "I returned the shoes because they didn't fit.", de: ["Ich habe die Schuhe zurückgegeben, weil sie nicht passten."], tags: ["subordinate-weil-dass"], section: "shopping" },

      { en: "When I traveled to Italy, I visited many museums.", de: ["Als ich nach Italien reiste, besuchte ich viele Museen."], tags: ["preterite"], section: "travel" },
      { en: "The hotel that we booked was fully booked.", de: ["Das Hotel, das wir gebucht hatten, war ausgebucht."], tags: ["relative-clauses"], section: "travel" },
      { en: "The flight was delayed due to bad weather.", de: ["Der Flug wurde wegen schlechten Wetters verspätet."], tags: ["passive-basic"], section: "travel" },
      { en: "If I had more money, I would travel around the world.", de: ["Wenn ich mehr Geld hätte, würde ich um die Welt reisen."], tags: ["subjunctive-II-basic"], section: "travel" },
      { en: "The capital of the country is very beautiful.", de: ["Die Hauptstadt des Landes ist sehr schön."], tags: ["genitive"], section: "travel" },
      { en: "We need a good travel guide.", de: ["Wir brauchen einen guten Reiseführer."], tags: ["adjective-endings"], section: "travel" },

      { en: "When I started this job, I knew nothing about it.", de: ["Als ich diese Stelle antrat, wusste ich nichts darüber."], tags: ["preterite"], section: "work" },
      { en: "The colleague who sits next to me is very helpful.", de: ["Der Kollege, der neben mir sitzt, ist sehr hilfsbereit."], tags: ["relative-clauses"], section: "work" },
      { en: "The project was completed on time.", de: ["Das Projekt wurde pünktlich abgeschlossen."], tags: ["passive-basic"], section: "work" },
      { en: "If I earned more, I would work fewer hours.", de: ["Wenn ich mehr verdiente, würde ich weniger Stunden arbeiten."], tags: ["subjunctive-II-basic"], section: "work" },
      { en: "The end of the project is near.", de: ["Das Ende des Projekts ist nah."], tags: ["genitive"], section: "work" },
      { en: "I need a quiet workspace.", de: ["Ich brauche einen ruhigen Arbeitsplatz."], tags: ["adjective-endings"], section: "work" },

      { en: "When I was at school, I loved history.", de: ["Als ich in der Schule war, liebte ich Geschichte."], tags: ["preterite"], section: "school" },
      { en: "The teacher who taught us English was very strict.", de: ["Der Lehrer, der uns Englisch unterrichtete, war sehr streng."], tags: ["relative-clauses"], section: "school" },
      { en: "The exam was postponed by one week.", de: ["Die Prüfung wurde um eine Woche verschoben."], tags: ["passive-basic"], section: "school" },
      { en: "If I studied more, I would get better grades.", de: ["Wenn ich mehr lernte, würde ich bessere Noten bekommen."], tags: ["subjunctive-II-basic"], section: "school" },
      { en: "The beginning of the school year is exciting.", de: ["Der Beginn des Schuljahres ist aufregend."], tags: ["genitive"], section: "school" },
      { en: "I need a new schoolbag.", de: ["Ich brauche eine neue Schultasche."], tags: ["adjective-endings"], section: "school" },

      { en: "When the whistle blew, the game ended.", de: ["Als die Pfeife ertönte, endete das Spiel."], tags: ["preterite"], section: "sports" },
      { en: "The player who scored the goal is our captain.", de: ["Der Spieler, der das Tor schoss, ist unser Kapitän."], tags: ["relative-clauses", "football-vocab"], section: "sports" },
      { en: "The match was postponed due to rain.", de: ["Das Spiel wurde wegen Regens verschoben."], tags: ["passive-basic"], section: "sports" },
      { en: "If our team trained harder, we would win more games.", de: ["Wenn unsere Mannschaft härter trainierte, würden wir mehr Spiele gewinnen."], tags: ["subjunctive-II-basic"], section: "sports" },
      { en: "The result of the match surprised everyone.", de: ["Das Ergebnis des Spiels überraschte alle."], tags: ["genitive"], section: "sports" },
      { en: "We need a strong defense.", de: ["Wir brauchen eine starke Verteidigung."], tags: ["adjective-endings"], section: "sports" },
      { en: "Although we played well, we lost the match.", de: ["Obwohl wir gut spielten, verloren wir das Spiel."], tags: ["conjunctions-obwohl"], section: "sports" },
      { en: "The coach substituted two players.", de: ["Der Trainer wechselte zwei Spieler aus."], tags: ["separable-verbs", "football-vocab"], section: "sports" }
    ],
    B2: [
      { en: "If I had known that, I would have acted differently.", de: ["Wenn ich das gewusst hätte, hätte ich anders gehandelt."], tags: ["subjunctive-II-advanced"] },
      { en: "I wish I had studied harder.", de: ["Ich wünschte, ich hätte fleißiger gelernt."], tags: ["subjunctive-II-advanced"] },
      { en: "The problem has to be solved as soon as possible.", de: ["Das Problem muss so schnell wie möglich gelöst werden."], tags: ["passive-advanced"] },
      { en: "This task can be completed by tomorrow.", de: ["Diese Aufgabe kann bis morgen erledigt werden."], tags: ["passive-advanced"] },
      { en: "The rapidly growing city is facing many challenges.", de: ["Die schnell wachsende Stadt steht vor vielen Herausforderungen."], tags: ["extended-participle"] },
      { en: "The well-known author will give a lecture tomorrow.", de: ["Der bekannte Autor wird morgen einen Vortrag halten."], tags: ["extended-participle"] },
      { en: "The reduction of costs is the company's main goal.", de: ["Die Senkung der Kosten ist das Hauptziel des Unternehmens."], tags: ["nominalization"] },
      { en: "The decision was made after long consideration.", de: ["Die Entscheidung wurde nach langer Überlegung getroffen."], tags: ["nominalization"] },
      { en: "He said that he would come tomorrow.", de: ["Er sagte, dass er morgen kommen würde.", "Er sagte, er werde morgen kommen."], tags: ["reported-speech"] },
      { en: "She claimed that she had never seen him.", de: ["Sie behauptete, sie habe ihn nie gesehen.", "Sie behauptete, dass sie ihn nie gesehen hatte."], tags: ["reported-speech"] },
      { en: "I am interested in modern art.", de: ["Ich interessiere mich für moderne Kunst."], tags: ["verb-prepositions"] },
      { en: "We are waiting for the results.", de: ["Wir warten auf die Ergebnisse."], tags: ["verb-prepositions"] },
      { en: "Not until he apologized did she forgive him.", de: ["Erst als er sich entschuldigte, verzieh sie ihm."], tags: ["word-order-advanced"] },
      { en: "Hardly had he arrived when the phone rang.", de: ["Kaum war er angekommen, klingelte das Telefon."], tags: ["word-order-advanced"] },
      { en: "The more you practice, the better you get.", de: ["Je mehr du übst, desto besser wirst du."], tags: ["comparative-advanced"] },
      { en: "The situation is getting worse and worse.", de: ["Die Situation wird immer schlimmer."], tags: ["comparative-advanced"] },
      { en: "The meeting was postponed due to bad weather.", de: ["Die Besprechung wurde wegen schlechten Wetters verschoben."], tags: ["passive-advanced"] },
      { en: "It is said that the company will be sold.", de: ["Es heißt, dass das Unternehmen verkauft wird."], tags: ["reported-speech"] },
      { en: "The topic discussed at the meeting was very complex.", de: ["Das auf der Sitzung besprochene Thema war sehr komplex."], tags: ["extended-participle"] },
      { en: "I am responsible for the entire project.", de: ["Ich bin für das gesamte Projekt verantwortlich."], tags: ["verb-prepositions"] },

      { en: "If I had known about the sale, I would have bought more.", de: ["Wenn ich von dem Sonderangebot gewusst hätte, hätte ich mehr gekauft."], tags: ["subjunctive-II-advanced"], section: "shopping" },
      { en: "The item can be exchanged within thirty days.", de: ["Der Artikel kann innerhalb von dreißig Tagen umgetauscht werden."], tags: ["passive-advanced"], section: "shopping" },
      { en: "The reduction in prices attracted many customers.", de: ["Die Preissenkung lockte viele Kunden an."], tags: ["nominalization"], section: "shopping" },
      { en: "The saleswoman said the item was out of stock.", de: ["Die Verkäuferin sagte, der Artikel sei nicht vorrätig."], tags: ["reported-speech"], section: "shopping" },
      { en: "I am waiting for the delivery of my order.", de: ["Ich warte auf die Lieferung meiner Bestellung."], tags: ["verb-prepositions"], section: "shopping" },

      { en: "If we had booked earlier, the tickets would have been cheaper.", de: ["Wenn wir früher gebucht hätten, wären die Tickets billiger gewesen."], tags: ["subjunctive-II-advanced"], section: "travel" },
      { en: "The passport must be renewed before departure.", de: ["Der Reisepass muss vor der Abreise erneuert werden."], tags: ["passive-advanced"], section: "travel" },
      { en: "The rapidly changing weather affected our plans.", de: ["Das sich schnell ändernde Wetter beeinflusste unsere Pläne."], tags: ["extended-participle"], section: "travel" },
      { en: "The agent said the flight would be cancelled.", de: ["Der Agent sagte, der Flug werde storniert."], tags: ["reported-speech"], section: "travel" },
      { en: "We are looking forward to exploring the city.", de: ["Wir freuen uns darauf, die Stadt zu erkunden."], tags: ["verb-prepositions"], section: "travel" },

      { en: "If I had applied earlier, I would have gotten the job.", de: ["Wenn ich mich früher beworben hätte, hätte ich die Stelle bekommen."], tags: ["subjunctive-II-advanced"], section: "work" },
      { en: "The deadline must be met at all costs.", de: ["Die Frist muss um jeden Preis eingehalten werden."], tags: ["passive-advanced"], section: "work" },
      { en: "The rapidly growing company is hiring many new employees.", de: ["Das schnell wachsende Unternehmen stellt viele neue Mitarbeiter ein."], tags: ["extended-participle"], section: "work" },
      { en: "The manager said the meeting would be postponed.", de: ["Der Manager sagte, das Meeting werde verschoben."], tags: ["reported-speech"], section: "work" },
      { en: "I am responsible for the new project.", de: ["Ich bin für das neue Projekt verantwortlich."], tags: ["verb-prepositions"], section: "work" },

      { en: "If I had studied harder, I would have passed the exam.", de: ["Wenn ich fleißiger gelernt hätte, hätte ich die Prüfung bestanden."], tags: ["subjunctive-II-advanced"], section: "school" },
      { en: "The assignment must be submitted by Friday.", de: ["Die Aufgabe muss bis Freitag eingereicht werden."], tags: ["passive-advanced"], section: "school" },
      { en: "The rapidly increasing workload stressed the students.", de: ["Die schnell zunehmende Arbeitsbelastung stresste die Schüler."], tags: ["extended-participle"], section: "school" },
      { en: "The teacher said the test would be difficult.", de: ["Der Lehrer sagte, die Prüfung werde schwierig."], tags: ["reported-speech"], section: "school" },
      { en: "I am interested in learning new languages.", de: ["Ich interessiere mich dafür, neue Sprachen zu lernen."], tags: ["verb-prepositions"], section: "school" },

      { en: "If the striker had been faster, he would have scored.", de: ["Wenn der Stürmer schneller gewesen wäre, hätte er getroffen."], tags: ["subjunctive-II-advanced"], section: "sports" },
      { en: "The final whistle must be respected by all players.", de: ["Der Schlusspfiff muss von allen Spielern respektiert werden."], tags: ["passive-advanced"], section: "sports" },
      { en: "The rapidly advancing team scored three goals.", de: ["Die schnell vorrückende Mannschaft erzielte drei Tore."], tags: ["extended-participle"], section: "sports" },
      { en: "The coach said the team would train twice a day.", de: ["Der Trainer sagte, die Mannschaft werde zweimal am Tag trainieren."], tags: ["reported-speech"], section: "sports" },
      { en: "The team is famous for its attacking style.", de: ["Die Mannschaft ist für ihren offensiven Spielstil bekannt."], tags: ["verb-prepositions"], section: "sports" }
    ],
    C1: [
      { en: "The minister announced that the reform would take effect next year.", de: ["Der Minister kündigte an, die Reform werde nächstes Jahr in Kraft treten.", "Der Minister kündigte an, dass die Reform nächstes Jahr in Kraft treten werde."], tags: ["subjunctive-I"] },
      { en: "The spokesperson said the negotiations had failed.", de: ["Der Sprecher sagte, die Verhandlungen seien gescheitert."], tags: ["subjunctive-I"] },
      { en: "The report, which was published last week, caused a stir.", de: ["Der Bericht, der letzte Woche veröffentlicht wurde, sorgte für Aufsehen."], tags: ["complex-relative-clauses"] },
      { en: "Everyone whose application was rejected can appeal.", de: ["Jeder, dessen Antrag abgelehnt wurde, kann Einspruch erheben."], tags: ["complex-relative-clauses"] },
      { en: "The implementation of the new strategy requires careful planning.", de: ["Die Umsetzung der neuen Strategie erfordert sorgfältige Planung."], tags: ["nominal-style"] },
      { en: "The examination of the evidence took several weeks.", de: ["Die Untersuchung der Beweise dauerte mehrere Wochen."], tags: ["nominal-style"] },
      { en: "He hit the nail on the head with that comment.", de: ["Mit diesem Kommentar hat er den Nagel auf den Kopf getroffen."], tags: ["idiomatic-expressions"] },
      { en: "She is killing two birds with one stone.", de: ["Sie schlägt zwei Fliegen mit einer Klappe."], tags: ["idiomatic-expressions"] },
      { en: "Not only did the company grow, but it also became more profitable.", de: ["Nicht nur ist das Unternehmen gewachsen, sondern es ist auch profitabler geworden."], tags: ["advanced-connectors"] },
      { en: "The project failed, not least because of poor planning.", de: ["Das Projekt scheiterte, nicht zuletzt wegen schlechter Planung."], tags: ["advanced-connectors"] },
      { en: "Having finished the report, she went home.", de: ["Nachdem sie den Bericht fertiggestellt hatte, ging sie nach Hause."], tags: ["participle-constructions"] },
      { en: "Surrounded by journalists, the president left the building.", de: ["Von Journalisten umgeben, verließ der Präsident das Gebäude."], tags: ["participle-constructions"] },
      { en: "Despite the difficulty of the task, she managed it well.", de: ["Trotz der Schwierigkeit der Aufgabe hat sie sie gut gemeistert."], tags: ["genitive-advanced"] },
      { en: "The consequences of the decision are still unclear.", de: ["Die Folgen der Entscheidung sind noch unklar."], tags: ["genitive-advanced"] },
      { en: "We would like to draw your attention to the enclosed documents.", de: ["Wir möchten Sie auf die beigefügten Unterlagen aufmerksam machen."], tags: ["formal-register"] },
      { en: "We regret to inform you that your application was unsuccessful.", de: ["Wir bedauern, Ihnen mitteilen zu müssen, dass Ihre Bewerbung erfolglos war."], tags: ["formal-register"] },
      { en: "The witness stated that he had seen nothing.", de: ["Der Zeuge gab an, er habe nichts gesehen."], tags: ["subjunctive-I"] },
      { en: "The article, the content of which is controversial, was widely shared.", de: ["Der Artikel, dessen Inhalt umstritten ist, wurde vielfach geteilt."], tags: ["complex-relative-clauses"] },
      { en: "The company's growth is due to strategic investment.", de: ["Das Wachstum des Unternehmens ist auf strategische Investitionen zurückzuführen."], tags: ["nominal-style"] },
      { en: "Once bitten, twice shy.", de: ["Ein gebranntes Kind scheut das Feuer."], tags: ["idiomatic-expressions"] },

      { en: "The customer stated that the product was defective.", de: ["Der Kunde gab an, das Produkt sei defekt."], tags: ["subjunctive-I"], section: "shopping" },
      { en: "The store, whose reputation is excellent, rarely has complaints.", de: ["Das Geschäft, dessen Ruf ausgezeichnet ist, hat selten Beschwerden."], tags: ["complex-relative-clauses"], section: "shopping" },
      { en: "The return of defective goods is free of charge.", de: ["Die Rückgabe fehlerhafter Ware ist kostenlos."], tags: ["nominal-style"], section: "shopping" },
      { en: "We would like to inform you that your refund has been processed.", de: ["Wir möchten Ihnen mitteilen, dass Ihre Rückerstattung bearbeitet wurde."], tags: ["formal-register"], section: "shopping" },

      { en: "The airline announced that all flights were cancelled.", de: ["Die Fluggesellschaft kündigte an, alle Flüge seien storniert."], tags: ["subjunctive-I"], section: "travel" },
      { en: "The city, whose history spans centuries, attracts many tourists.", de: ["Die Stadt, deren Geschichte Jahrhunderte umfasst, zieht viele Touristen an."], tags: ["complex-relative-clauses"], section: "travel" },
      { en: "The exploration of remote regions requires careful preparation.", de: ["Die Erkundung abgelegener Regionen erfordert sorgfältige Vorbereitung."], tags: ["nominal-style"], section: "travel" },
      { en: "We regret to inform you that your flight has been rebooked.", de: ["Wir bedauern, Ihnen mitteilen zu müssen, dass Ihr Flug umgebucht wurde."], tags: ["formal-register"], section: "travel" },

      { en: "The board announced that the merger would proceed.", de: ["Der Vorstand kündigte an, die Fusion werde fortgesetzt."], tags: ["subjunctive-I"], section: "work" },
      { en: "The employee whose proposal was accepted got a promotion.", de: ["Der Mitarbeiter, dessen Vorschlag angenommen wurde, wurde befördert."], tags: ["complex-relative-clauses"], section: "work" },
      { en: "The implementation of the new system caused delays.", de: ["Die Einführung des neuen Systems verursachte Verzögerungen."], tags: ["nominal-style"], section: "work" },
      { en: "We would like to schedule a meeting at your earliest convenience.", de: ["Wir möchten so bald wie möglich einen Termin vereinbaren."], tags: ["formal-register"], section: "work" },

      { en: "The principal announced that the school would close early.", de: ["Der Schulleiter kündigte an, die Schule werde früher schließen."], tags: ["subjunctive-I"], section: "school" },
      { en: "The student whose essay won the prize was very proud.", de: ["Der Schüler, dessen Aufsatz den Preis gewann, war sehr stolz."], tags: ["complex-relative-clauses"], section: "school" },
      { en: "The evaluation of student performance takes time.", de: ["Die Bewertung der Schülerleistungen braucht Zeit."], tags: ["nominal-style"], section: "school" },
      { en: "We regret to inform you that the application deadline has passed.", de: ["Wir bedauern, Ihnen mitteilen zu müssen, dass die Bewerbungsfrist abgelaufen ist."], tags: ["formal-register"], section: "school" },

      { en: "The manager announced that the star player would be rested.", de: ["Der Trainer kündigte an, der Star-Spieler werde geschont."], tags: ["subjunctive-I"], section: "sports" },
      { en: "The striker, whose form has been excellent, was named man of the match.", de: ["Der Stürmer, dessen Form ausgezeichnet war, wurde zum Spieler des Spiels gewählt."], tags: ["complex-relative-clauses"], section: "sports" },
      { en: "The analysis of the team's tactics took hours.", de: ["Die Analyse der Taktik der Mannschaft dauerte Stunden."], tags: ["nominal-style"], section: "sports" },
      { en: "He scored a hat-trick and stole the show.", de: ["Er erzielte einen Hattrick und stahl die Show."], tags: ["idiomatic-expressions"], section: "sports" }
    ],
    C2: [
      { en: "Little did she know what awaited her.", de: ["Wenig ahnte sie, was sie erwartete."], tags: ["stylistic-inversion"] },
      { en: "Rarely has such a controversial decision been made.", de: ["Selten ist eine derart umstrittene Entscheidung getroffen worden."], tags: ["stylistic-inversion"] },
      { en: "Whoever wants to succeed must be willing to take risks.", de: ["Wer erfolgreich sein will, muss bereit sein, Risiken einzugehen."], tags: ["complex-subordination"] },
      { en: "However hard he tried, he could not convince her.", de: ["Wie sehr er sich auch bemühte, er konnte sie nicht überzeugen."], tags: ["complex-subordination"] },
      { en: "He has an axe to grind with the management.", de: ["Er hat mit der Geschäftsführung noch eine Rechnung offen."], tags: ["idioms-advanced"] },
      { en: "That's the last straw.", de: ["Das ist der Tropfen, der das Fass zum Überlaufen bringt."], tags: ["idioms-advanced"] },
      { en: "The findings of the study, however, remain a matter of debate.", de: ["Die Ergebnisse der Studie bleiben jedoch umstritten."], tags: ["rhetorical-devices"] },
      { en: "It is precisely this ambiguity that makes the novel so fascinating.", de: ["Gerade diese Zweideutigkeit macht den Roman so faszinierend."], tags: ["rhetorical-devices"] },
      { en: "He probably just wanted to be polite, I suppose.", de: ["Er wollte wohl nur höflich sein, nehme ich an."], tags: ["modal-particles-nuanced"] },
      { en: "You could at least have called, couldn't you.", de: ["Du hättest ja wenigstens anrufen können."], tags: ["modal-particles-nuanced"] },
      { en: "The study's findings suggest a correlation between the two variables.", de: ["Die Ergebnisse der Studie deuten auf eine Korrelation zwischen den beiden Variablen hin."], tags: ["academic-register"] },
      { en: "It can be argued that the underlying assumptions are flawed.", de: ["Man kann argumentieren, dass die zugrunde liegenden Annahmen fehlerhaft sind."], tags: ["academic-register"] },
      { en: "The nomination, itself hardly surprising, sparked intense debate.", de: ["Die Nominierung, an sich kaum überraschend, löste eine intensive Debatte aus."], tags: ["advanced-nominalization"] },
      { en: "The suppression of dissent characterized the regime.", de: ["Die Unterdrückung Andersdenkender kennzeichnete das Regime."], tags: ["advanced-nominalization"] },
      { en: "One might say that fortune favors the bold.", de: ["Man könnte sagen, dass das Glück den Tüchtigen hilft."], tags: ["idioms-advanced"] },
      { en: "Never before had the city seen such devastation.", de: ["Nie zuvor hatte die Stadt eine solche Verwüstung erlebt."], tags: ["stylistic-inversion"] },
      { en: "Be that as it may, the decision stands.", de: ["Wie dem auch sei, die Entscheidung steht fest."], tags: ["complex-subordination"] },
      { en: "The novel, laden with symbolism, defies easy interpretation.", de: ["Der Roman, voller Symbolik, entzieht sich einer einfachen Interpretation."], tags: ["rhetorical-devices"] },
      { en: "As it were, the plan was doomed from the start.", de: ["Der Plan war sozusagen von Anfang an zum Scheitern verurteilt."], tags: ["modal-particles-nuanced"] },
      { en: "The extent to which this theory holds true remains debatable.", de: ["Inwieweit diese Theorie zutrifft, bleibt fraglich."], tags: ["academic-register"] },

      { en: "Rarely has a product launch generated so much demand.", de: ["Selten hat eine Produkteinführung eine solche Nachfrage ausgelöst."], tags: ["stylistic-inversion"], section: "shopping" },
      { en: "Whoever wants the best price must compare several shops.", de: ["Wer den besten Preis will, muss mehrere Geschäfte vergleichen."], tags: ["complex-subordination"], section: "shopping" },
      { en: "She spared no expense buying the dress.", de: ["Sie hat keine Kosten gescheut, um das Kleid zu kaufen."], tags: ["idioms-advanced"], section: "shopping" },
      { en: "Consumer behavior is influenced by perceived scarcity.", de: ["Das Konsumverhalten wird durch wahrgenommene Knappheit beeinflusst."], tags: ["academic-register"], section: "shopping" },

      { en: "Never had we seen such breathtaking scenery.", de: ["Nie zuvor hatten wir eine so atemberaubende Landschaft gesehen."], tags: ["stylistic-inversion"], section: "travel" },
      { en: "However far we travel, home always calls us back.", de: ["Wie weit wir auch reisen, die Heimat ruft uns immer zurück."], tags: ["complex-subordination"], section: "travel" },
      { en: "We traveled on a shoestring budget.", de: ["Wir sind mit sehr wenig Geld gereist."], tags: ["idioms-advanced"], section: "travel" },
      { en: "Tourism significantly impacts local economies.", de: ["Der Tourismus beeinflusst die lokalen Volkswirtschaften erheblich."], tags: ["academic-register"], section: "travel" },

      { en: "Rarely has a company grown so quickly.", de: ["Selten ist ein Unternehmen so schnell gewachsen."], tags: ["stylistic-inversion"], section: "work" },
      { en: "Whoever wants to lead this team must earn its trust.", de: ["Wer dieses Team führen will, muss sich sein Vertrauen verdienen."], tags: ["complex-subordination"], section: "work" },
      { en: "He works around the clock to meet the deadline.", de: ["Er arbeitet rund um die Uhr, um die Frist einzuhalten."], tags: ["idioms-advanced"], section: "work" },
      { en: "Workplace productivity is closely tied to employee wellbeing.", de: ["Die Produktivität am Arbeitsplatz hängt eng mit dem Wohlbefinden der Mitarbeiter zusammen."], tags: ["academic-register"], section: "work" },

      { en: "Rarely has a student achieved such remarkable results.", de: ["Selten hat ein Schüler so bemerkenswerte Ergebnisse erzielt."], tags: ["stylistic-inversion"], section: "school" },
      { en: "Whoever wants to excel must be disciplined.", de: ["Wer sich auszeichnen will, muss diszipliniert sein."], tags: ["complex-subordination"], section: "school" },
      { en: "She burned the midnight oil before the exam.", de: ["Sie hat vor der Prüfung bis spät in die Nacht gelernt."], tags: ["idioms-advanced"], section: "school" },
      { en: "Educational outcomes correlate strongly with early literacy.", de: ["Bildungsergebnisse korrelieren stark mit früher Lesekompetenz."], tags: ["academic-register"], section: "school" },

      { en: "Rarely has a team come back from such a deficit.", de: ["Selten hat eine Mannschaft einen solchen Rückstand aufgeholt."], tags: ["stylistic-inversion"], section: "sports" },
      { en: "However skilled the opponent, our team never gave up.", de: ["Wie geschickt der Gegner auch war, unsere Mannschaft gab nie auf."], tags: ["complex-subordination"], section: "sports" },
      { en: "The underdog team pulled off a stunning upset.", de: ["Der Außenseiter feierte eine sensationelle Überraschung."], tags: ["idioms-advanced"], section: "sports" },
      { en: "Elite football performance depends on both physical and tactical preparation.", de: ["Erstklassige Fußballleistung hängt sowohl von körperlicher als auch von taktischer Vorbereitung ab."], tags: ["academic-register"], section: "sports" }
    ]
  };

  var LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  var REVIEW_EVERY = 5;
  var CORRECT_THRESHOLD = 0.8;
  var PROFILES_KEY = "deutschTrainerProfiles.v1";
  var PROGRESS_PREFIX = "deutschTrainerProgress.v1::";
  var LEGACY_STORAGE_KEY = "deutschTrainerProgress.v1"; // pre-profiles single-user save, migrated below

  /* ---------------------------------------------------------------------
   * 3. GRADING ENGINE — normalize, fold umlauts, fuzzy word-level diff
   * ------------------------------------------------------------------- */
  function foldUmlaut(s) {
    return s
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
      .replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue")
      .replace(/ß/g, "ss");
  }
  function normalizeKey(word) {
    return foldUmlaut(word.toLowerCase()).replace(/[.,!?;:„“"'()]/g, "");
  }
  function tokenize(sentence) {
    return sentence.trim().split(/\s+/).filter(function (w) { return w.length > 0; });
  }
  function levenshtein(a, b) {
    var m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    var prev = new Array(n + 1);
    var curr = new Array(n + 1);
    for (var j = 0; j <= n; j++) prev[j] = j;
    for (var i = 1; i <= m; i++) {
      curr[0] = i;
      for (j = 1; j <= n; j++) {
        var cost = a[i - 1] === b[j - 1] ? 0 : 1;
        curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      }
      var tmp = prev; prev = curr; curr = tmp;
    }
    return prev[n];
  }
  function wordsMatch(w1, w2) {
    if (w1 === w2) return true;
    if (w1.length === 0 || w2.length === 0) return false;
    var d = levenshtein(w1, w2);
    var maxLen = Math.max(w1.length, w2.length);
    // allow ~25% character difference within a word (typo tolerance)
    return (d / maxLen) <= 0.25;
  }
  // Word-level edit distance with fuzzy substitution + alignment backtrace for diffing.
  function alignWords(userWords, refWords) {
    var m = userWords.length, n = refWords.length;
    var dp = [];
    for (var i = 0; i <= m; i++) { dp.push(new Array(n + 1).fill(0)); }
    for (i = 0; i <= m; i++) dp[i][0] = i;
    for (var j = 0; j <= n; j++) dp[0][j] = j;
    for (i = 1; i <= m; i++) {
      for (j = 1; j <= n; j++) {
        var match = wordsMatch(userWords[i - 1].key, refWords[j - 1].key);
        var subCost = match ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + subCost
        );
      }
    }
    // backtrace
    var ops = [];
    i = m; j = n;
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + (wordsMatch(userWords[i - 1].key, refWords[j - 1].key) ? 0 : 1)) {
        var isMatch = wordsMatch(userWords[i - 1].key, refWords[j - 1].key);
        ops.unshift({ type: isMatch ? "match" : "sub", user: userWords[i - 1].raw, ref: refWords[j - 1].raw });
        i--; j--;
      } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
        ops.unshift({ type: "extra", user: userWords[i - 1].raw });
        i--;
      } else {
        ops.unshift({ type: "missing", ref: refWords[j - 1].raw });
        j--;
      }
    }
    return { distance: dp[m][n], ops: ops };
  }
  function scoreAgainst(userSentence, refSentence) {
    var userWords = tokenize(userSentence).map(function (w) { return { raw: w, key: normalizeKey(w) }; });
    var refWords = tokenize(refSentence).map(function (w) { return { raw: w, key: normalizeKey(w) }; });
    var aligned = alignWords(userWords, refWords);
    var maxLen = Math.max(userWords.length, refWords.length, 1);
    var score = 1 - (aligned.distance / maxLen);
    return { score: score, ops: aligned.ops };
  }
  // Compare the user's answer against every accepted reference; return the best match.
  function gradeAnswer(userSentence, acceptedAnswers) {
    var best = null;
    for (var k = 0; k < acceptedAnswers.length; k++) {
      var result = scoreAgainst(userSentence, acceptedAnswers[k]);
      if (!best || result.score > best.score) {
        best = result;
        best.ref = acceptedAnswers[k];
      }
    }
    best.correct = best.score >= CORRECT_THRESHOLD;
    best.exact = best.score >= 0.999;
    return best;
  }
  function renderDiffHtml(ops) {
    // Shows the user's sentence with wrong/extra words struck through and
    // missing words inserted in place, so the learner sees exactly what differed.
    var html = "";
    for (var i = 0; i < ops.length; i++) {
      var op = ops[i];
      if (op.type === "match") {
        html += escapeHtml(op.user) + " ";
      } else if (op.type === "sub") {
        html += "<span class='miss'>" + escapeHtml(op.user) + "</span> <span class='add'>" + escapeHtml(op.ref) + "</span> ";
      } else if (op.type === "extra") {
        html += "<span class='miss'>" + escapeHtml(op.user) + "</span> ";
      } else if (op.type === "missing") {
        html += "<span class='add'>" + escapeHtml(op.ref) + "</span> ";
      }
    }
    return html.trim();
  }
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------------------------------------------------------------------
   * 4. PERSISTENCE — localStorage, guarded with try/catch.
   * Progress is namespaced per profile so different people (or the same
   * person on different levels of trust in a shared browser) never mix
   * stats. PROFILES holds the roster + which one is active; each profile's
   * practice data lives under its own PROGRESS_PREFIX key.
   * ------------------------------------------------------------------- */
  function defaultLevelState() {
    return { total: 0, correct: 0, sinceReview: 0, recentLog: [], tagStats: {}, lastIds: [], decks: {} };
  }
  function progressKeyFor(name) { return PROGRESS_PREFIX + name; }

  function loadProfiles() {
    try {
      var raw = localStorage.getItem(PROFILES_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        if (p && Array.isArray(p.names)) return p;
      }
    } catch (e) { /* fall through to default */ }
    return { names: [], active: null };
  }
  function saveProfiles() {
    try { localStorage.setItem(PROFILES_KEY, JSON.stringify(PROFILES)); } catch (e) { /* ignore */ }
  }

  var PROFILES = loadProfiles();
  var pendingDeleteName = null;
  var profileModalRequired = true;

  // One-time migration: an earlier version of this app (before profiles
  // existed) saved progress under a single shared key. If that data is
  // still there and no profiles have been created yet, adopt it as the
  // first profile instead of discarding it.
  (function migrateLegacySave() {
    if (PROFILES.names.length > 0) return;
    try {
      var legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (!legacyRaw) return;
      var legacyState = JSON.parse(legacyRaw);
      if (!legacyState || !legacyState.levels) return;
      var name = "Player 1";
      PROFILES.names.push(name);
      PROFILES.active = name;
      saveProfiles();
      localStorage.setItem(progressKeyFor(name), JSON.stringify(legacyState));
    } catch (e) { /* ignore — nothing to migrate */ }
  })();

  var ACTIVE_PROFILE = (PROFILES.active && PROFILES.names.indexOf(PROFILES.active) !== -1) ? PROFILES.active : null;

  function loadState() {
    var state = null;
    try {
      var raw = localStorage.getItem(progressKeyFor(ACTIVE_PROFILE));
      if (raw) state = JSON.parse(raw);
    } catch (e) { state = null; }
    if (!state || typeof state !== "object") {
      state = { currentLevel: "A1", levels: {} };
    }
    if (!state.levels) state.levels = {};
    LEVELS.forEach(function (lvl) {
      if (!state.levels[lvl]) state.levels[lvl] = defaultLevelState();
      var ls = state.levels[lvl];
      if (typeof ls.total !== "number") ls.total = 0;
      if (typeof ls.correct !== "number") ls.correct = 0;
      if (typeof ls.sinceReview !== "number") ls.sinceReview = 0;
      if (!Array.isArray(ls.recentLog)) ls.recentLog = [];
      // Existing profiles may have a longer log from before REVIEW_EVERY was
      // lowered — trim immediately so the review checkpoint reflects the new size.
      while (ls.recentLog.length > REVIEW_EVERY) ls.recentLog.shift();
      if (!ls.tagStats) ls.tagStats = {};
      if (!Array.isArray(ls.lastIds)) ls.lastIds = [];
      if (!ls.decks || typeof ls.decks !== "object") ls.decks = {};
    });
    if (LEVELS.indexOf(state.currentLevel) === -1) state.currentLevel = "A1";
    var sectionIds = SECTIONS.map(function (sec) { return sec.id; });
    if (sectionIds.indexOf(state.currentSection) === -1) state.currentSection = "general";
    return state;
  }
  function saveState() {
    if (!ACTIVE_PROFILE) return;
    try {
      localStorage.setItem(progressKeyFor(ACTIVE_PROFILE), JSON.stringify(STATE));
    } catch (e) { /* storage unavailable — continue with in-memory state only */ }
  }

  var STATE = ACTIVE_PROFILE ? loadState() : null;

  /* ---------------------------------------------------------------------
   * 5. SENTENCE PICKER
   * ------------------------------------------------------------------- */
  function sentenceMatchesSection(s, section) {
    if (section === "general") return !s.section;
    return s.section === section;
  }

  // Fisher-Yates shuffle of every sentence index in `bank` matching `section`.
  function buildShuffledDeck(bank, section) {
    var idxs = [];
    for (var i = 0; i < bank.length; i++) {
      if (sentenceMatchesSection(bank[i], section)) idxs.push(i);
    }
    for (var j = idxs.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var tmp = idxs[j]; idxs[j] = idxs[k]; idxs[k] = tmp;
    }
    return idxs;
  }

  // Hands out sentences from a shuffled "deck" that's dealt down to empty before
  // reshuffling, so every sentence in the pool is seen once before any repeat —
  // plain random-each-time repeats far more often than it feels like it should
  // once a pool gets small (e.g. a single level+section combo).
  function pickSentenceIndex(level) {
    var bank = SENTENCES[level];
    var ls = STATE.levels[level];
    var section = STATE.currentSection || "general";
    if (!ls.decks || typeof ls.decks !== "object") ls.decks = {};

    var deck = ls.decks[section];
    if (!Array.isArray(deck) || deck.length === 0) {
      deck = buildShuffledDeck(bank, section);
      // Safety net: this level has no sentences at all for this section —
      // fall back to a shuffled deck of the whole level bank so practice never stalls.
      if (deck.length === 0 && bank.length > 0) {
        deck = bank.map(function (_, i) { return i; });
        for (var m = deck.length - 1; m > 0; m--) {
          var n = Math.floor(Math.random() * (m + 1));
          var tmp2 = deck[m]; deck[m] = deck[n]; deck[n] = tmp2;
        }
      }
      // Avoid a fresh deck starting on the same sentence that just ended the last one.
      var lastShown = ls.lastIds.length ? ls.lastIds[ls.lastIds.length - 1] : null;
      if (deck.length > 1 && deck[0] === lastShown) {
        var t = deck[0]; deck[0] = deck[1]; deck[1] = t;
      }
      ls.decks[section] = deck;
    }
    var idx = deck.pop();
    saveState();
    return idx;
  }

  /* ---------------------------------------------------------------------
   * 6. UI STATE
   * ------------------------------------------------------------------- */
  var currentIndex = null;
  var currentGrade = null;
  var checked = false;

  var els = {
    levelTabs: document.getElementById("levelTabs"),
    sectionTabs: document.getElementById("sectionTabs"),
    sectionChip: document.getElementById("sectionChip"),
    statsBtn: document.getElementById("statsBtn"),
    practiceBtn: document.getElementById("practiceBtn"),
    practiceView: document.getElementById("practiceView"),
    statsView: document.getElementById("statsView"),
    reviewCounter: document.getElementById("reviewCounter"),
    reviewProgressFill: document.getElementById("reviewProgressFill"),
    levelAccuracy: document.getElementById("levelAccuracy"),
    levelChip: document.getElementById("levelChip"),
    promptEn: document.getElementById("promptEn"),
    answerInput: document.getElementById("answerInput"),
    checkBtn: document.getElementById("checkBtn"),
    skipBtn: document.getElementById("skipBtn"),
    feedback: document.getElementById("feedback"),
    feedbackStatus: document.getElementById("feedbackStatus"),
    feedbackLabel: document.getElementById("feedbackLabel"),
    diffLine: document.getElementById("diffLine"),
    refLine: document.getElementById("refLine"),
    nextBtn: document.getElementById("nextBtn"),
    statTotal: document.getElementById("statTotal"),
    statAccuracy: document.getElementById("statAccuracy"),
    statLevel: document.getElementById("statLevel"),
    statsTagList: document.getElementById("statsTagList"),
    statsEmptyNote: document.getElementById("statsEmptyNote"),
    resetBtn: document.getElementById("resetBtn"),
    resetConfirmRow: document.getElementById("resetConfirmRow"),
    resetConfirmYes: document.getElementById("resetConfirmYes"),
    resetConfirmNo: document.getElementById("resetConfirmNo"),
    resetDesc: document.getElementById("resetDesc"),
    statsProfileName: document.getElementById("statsProfileName"),
    profilePillBtn: document.getElementById("profilePillBtn"),
    profilePillName: document.getElementById("profilePillName"),
    profileModal: document.getElementById("profileModal"),
    profileModalSub: document.getElementById("profileModalSub"),
    profileList: document.getElementById("profileList"),
    newProfileInput: document.getElementById("newProfileInput"),
    addProfileBtn: document.getElementById("addProfileBtn"),
    profileModalCloseBtn: document.getElementById("profileModalCloseBtn"),
    reviewModal: document.getElementById("reviewModal"),
    modalLevel: document.getElementById("modalLevel"),
    modalSub: document.getElementById("modalSub"),
    modalTagList: document.getElementById("modalTagList"),
    modalRecList: document.getElementById("modalRecList"),
    modalLevelSuggestion: document.getElementById("modalLevelSuggestion"),
    modalCloseBtn: document.getElementById("modalCloseBtn")
  };

  function renderLevelTabs() {
    els.levelTabs.innerHTML = "";
    LEVELS.forEach(function (lvl) {
      var btn = document.createElement("button");
      btn.className = "level-tab" + (lvl === STATE.currentLevel ? " active" : "");
      btn.type = "button";
      btn.textContent = lvl;
      btn.addEventListener("click", function () { switchLevel(lvl); });
      els.levelTabs.appendChild(btn);
    });
  }

  function switchLevel(lvl) {
    STATE.currentLevel = lvl;
    saveState();
    renderLevelTabs();
    loadNextSentence();
    updateHeaderStats();
  }

  function renderSectionTabs() {
    if (!els.sectionTabs) return;
    els.sectionTabs.innerHTML = "";
    SECTIONS.forEach(function (sec) {
      var btn = document.createElement("button");
      btn.className = "section-tab" + (sec.id === STATE.currentSection ? " active" : "");
      btn.type = "button";
      btn.textContent = sec.label;
      btn.addEventListener("click", function () { switchSection(sec.id); });
      els.sectionTabs.appendChild(btn);
    });
  }

  function switchSection(id) {
    STATE.currentSection = id;
    saveState();
    renderSectionTabs();
    loadNextSentence();
    updateHeaderStats();
  }

  function updateHeaderStats() {
    var ls = STATE.levels[STATE.currentLevel];
    els.reviewCounter.textContent = ls.sinceReview + " / " + REVIEW_EVERY + " to next review";
    els.reviewProgressFill.style.width = Math.round((ls.sinceReview / REVIEW_EVERY) * 100) + "%";
    var pct = ls.total > 0 ? Math.round((ls.correct / ls.total) * 100) : null;
    els.levelAccuracy.textContent = pct === null ? "no attempts yet" : pct + "% accuracy";
    els.levelChip.textContent = STATE.currentLevel;
    if (els.sectionChip) {
      var sec = SECTIONS.filter(function (s) { return s.id === (STATE.currentSection || "general"); })[0];
      els.sectionChip.textContent = sec ? sec.label : "General";
    }
  }

  /* ---------------------------------------------------------------------
   * 6b. PROFILES UI — "who's practicing" gate, switch/add/delete profiles
   * ------------------------------------------------------------------- */
  function updateProfilePill() {
    els.profilePillName.textContent = ACTIVE_PROFILE || "—";
  }

  function renderProfileList() {
    els.profileList.innerHTML = "";
    if (PROFILES.names.length === 0) {
      var empty = document.createElement("div");
      empty.className = "empty-note";
      empty.textContent = "No profiles yet — add one below to get started.";
      els.profileList.appendChild(empty);
      return;
    }
    PROFILES.names.forEach(function (name) {
      var row = document.createElement("div");
      row.className = "profile-row" + (name === ACTIVE_PROFILE ? " active" : "");
      if (pendingDeleteName === name) {
        var msg = document.createElement("span");
        msg.className = "confirm-msg";
        msg.textContent = "Delete \"" + name + "\"? This removes their progress.";
        var yes = document.createElement("button");
        yes.type = "button";
        yes.className = "btn btn-ghost";
        yes.style.color = "var(--critical)";
        yes.textContent = "Delete";
        yes.addEventListener("click", function () { deleteProfile(name); });
        var no = document.createElement("button");
        no.type = "button";
        no.className = "btn btn-ghost";
        no.textContent = "Cancel";
        no.addEventListener("click", function () { pendingDeleteName = null; renderProfileList(); });
        row.appendChild(msg);
        row.appendChild(yes);
        row.appendChild(no);
      } else {
        var selectBtn = document.createElement("button");
        selectBtn.type = "button";
        selectBtn.className = "select";
        selectBtn.textContent = name + (name === ACTIVE_PROFILE ? " (current)" : "");
        selectBtn.addEventListener("click", function () { selectProfile(name); });
        var delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "delete";
        delBtn.textContent = "×";
        delBtn.setAttribute("aria-label", "Delete profile " + name);
        delBtn.addEventListener("click", function (e) { e.stopPropagation(); pendingDeleteName = name; renderProfileList(); });
        row.appendChild(selectBtn);
        row.appendChild(delBtn);
      }
      els.profileList.appendChild(row);
    });
  }

  function openProfileModal(required) {
    profileModalRequired = required;
    pendingDeleteName = null;
    els.profileModalCloseBtn.style.display = required ? "none" : "";
    els.profileModalSub.textContent = required
      ? "Pick a profile or add a new one to start practicing. Each profile keeps its own separate progress."
      : "Switch to another profile, or add a new one.";
    renderProfileList();
    els.newProfileInput.value = "";
    els.profileModal.classList.add("show");
  }
  function closeProfileModalIfAllowed() {
    if (profileModalRequired) return;
    els.profileModal.classList.remove("show");
  }

  function selectProfile(name) {
    ACTIVE_PROFILE = name;
    PROFILES.active = name;
    saveProfiles();
    pendingDeleteName = null;
    profileModalRequired = false;
    els.profileModal.classList.remove("show");
    STATE = loadState();
    updateProfilePill();
    renderLevelTabs();
    renderSectionTabs();
    showPracticeView();
    loadNextSentence();
  }

  function addProfile() {
    var raw = els.newProfileInput.value.trim();
    if (!raw) return;
    if (raw.length > 24) raw = raw.slice(0, 24);
    var existing = null;
    for (var i = 0; i < PROFILES.names.length; i++) {
      if (PROFILES.names[i].toLowerCase() === raw.toLowerCase()) { existing = PROFILES.names[i]; break; }
    }
    if (existing) { selectProfile(existing); return; }
    PROFILES.names.push(raw);
    saveProfiles();
    selectProfile(raw);
  }

  function deleteProfile(name) {
    PROFILES.names = PROFILES.names.filter(function (n) { return n !== name; });
    try { localStorage.removeItem(progressKeyFor(name)); } catch (e) { /* ignore */ }
    pendingDeleteName = null;
    var wasActive = (ACTIVE_PROFILE === name);
    if (wasActive) {
      ACTIVE_PROFILE = null;
      PROFILES.active = null;
      STATE = null;
    }
    saveProfiles();
    if (wasActive) {
      openProfileModal(true);
    } else {
      renderProfileList();
    }
  }

  function loadNextSentence() {
    checked = false;
    els.answerInput.value = "";
    els.answerInput.disabled = false;
    els.feedback.classList.remove("show");
    els.checkBtn.style.display = "";
    els.checkBtn.disabled = false;
    els.skipBtn.style.display = "";
    currentIndex = pickSentenceIndex(STATE.currentLevel);
    var s = SENTENCES[STATE.currentLevel][currentIndex];
    els.promptEn.textContent = s.en;
    updateHeaderStats();
    els.answerInput.focus();
  }

  function recordAttempt(tags, correct) {
    var ls = STATE.levels[STATE.currentLevel];
    ls.total++;
    if (correct) ls.correct++;
    ls.sinceReview++;
    ls.recentLog.push({ tags: tags, correct: correct });
    if (ls.recentLog.length > REVIEW_EVERY) ls.recentLog.shift();
    tags.forEach(function (tag) {
      if (!ls.tagStats[tag]) ls.tagStats[tag] = { attempts: 0, correct: 0 };
      ls.tagStats[tag].attempts++;
      if (correct) ls.tagStats[tag].correct++;
    });
    ls.lastIds.push(currentIndex);
    if (ls.lastIds.length > 5) ls.lastIds.shift();
    saveState();
  }

  function handleCheck() {
    if (checked) return;
    var s = SENTENCES[STATE.currentLevel][currentIndex];
    var userText = els.answerInput.value;
    if (!userText.trim()) return;
    var grade = gradeAnswer(userText, s.de);
    currentGrade = grade;
    checked = true;

    els.feedback.classList.add("show");
    els.checkBtn.style.display = "none";
    els.skipBtn.style.display = "none";
    els.answerInput.disabled = true;

    if (grade.correct) {
      els.feedbackStatus.className = "feedback-status correct";
      els.feedbackLabel.textContent = grade.exact ? "Correct!" : "Correct (minor typo)";
      els.diffLine.innerHTML = grade.exact ? "" : renderDiffHtml(grade.ops);
      els.refLine.textContent = "";
    } else {
      els.feedbackStatus.className = "feedback-status incorrect";
      els.feedbackLabel.textContent = "Not quite";
      els.diffLine.innerHTML = renderDiffHtml(grade.ops);
      els.refLine.innerHTML = "<b>Reference:</b> " + escapeHtml(grade.ref);
    }

    recordAttempt(s.tags, grade.correct);
    updateHeaderStats();
  }

  function handleSkip() {
    var s = SENTENCES[STATE.currentLevel][currentIndex];
    recordAttempt(s.tags, false);
    afterAdvance();
  }

  function afterAdvance() {
    var ls = STATE.levels[STATE.currentLevel];
    if (ls.sinceReview >= REVIEW_EVERY) {
      showReviewModal();
    } else {
      loadNextSentence();
    }
  }

  function handleNext() {
    afterAdvance();
  }

  /* ---------------------------------------------------------------------
   * 7. REVIEW MODAL — per-tag accuracy chart + recommendations
   * ------------------------------------------------------------------- */
  function statusColorForPct(pct) {
    if (pct < 50) return "var(--critical)";
    if (pct < 75) return "var(--warning)";
    return "var(--good)";
  }

  function computeTagBreakdown(log) {
    var byTag = {};
    log.forEach(function (entry) {
      entry.tags.forEach(function (tag) {
        if (!byTag[tag]) byTag[tag] = { attempts: 0, correct: 0 };
        byTag[tag].attempts++;
        if (entry.correct) byTag[tag].correct++;
      });
    });
    var rows = Object.keys(byTag).map(function (tag) {
      var d = byTag[tag];
      return { tag: tag, attempts: d.attempts, correct: d.correct, pct: Math.round((d.correct / d.attempts) * 100) };
    });
    rows.sort(function (a, b) { return a.pct - b.pct; });
    return rows;
  }

  // Clicking (or Enter/Space-ing) a topic row expands an inline detail panel
  // showing that grammar topic's explanation, so "what to work on" can be
  // followed up with "why" without leaving the modal/stats view.
  function renderTagBars(container, rows, emptyMsg) {
    container.innerHTML = "";
    if (rows.length === 0) {
      var p = document.createElement("div");
      p.className = "empty-note";
      p.textContent = emptyMsg;
      container.appendChild(p);
      return;
    }
    rows.forEach(function (row) {
      var meta = TAGS[row.tag] || { label: row.tag, tip: "" };

      var item = document.createElement("div");
      item.className = "tag-item";

      var wrap = document.createElement("div");
      wrap.className = "tag-row";
      wrap.setAttribute("role", "button");
      wrap.setAttribute("tabindex", "0");
      wrap.setAttribute("aria-expanded", "false");

      var name = document.createElement("div");
      name.className = "name";
      var chevron = document.createElement("span");
      chevron.className = "chevron";
      chevron.textContent = "▸";
      var labelSpan = document.createElement("span");
      labelSpan.textContent = meta.label;
      name.appendChild(chevron);
      name.appendChild(labelSpan);

      var count = document.createElement("div");
      count.className = "count";
      count.textContent = row.correct + "/" + row.attempts;

      var track = document.createElement("div");
      track.className = "bar-track";
      var fill = document.createElement("div");
      fill.className = "bar-fill";
      fill.style.width = Math.max(row.pct, 6) + "%";
      fill.style.background = statusColorForPct(row.pct);
      var span = document.createElement("span");
      span.textContent = row.pct + "%";
      fill.appendChild(span);
      track.appendChild(fill);

      wrap.appendChild(name);
      wrap.appendChild(count);
      wrap.appendChild(track);

      var detail = document.createElement("div");
      detail.className = "tag-detail";
      detail.textContent = meta.tip || "No extra details for this topic yet.";

      function toggle() {
        var isOpen = item.classList.toggle("expanded");
        wrap.setAttribute("aria-expanded", isOpen ? "true" : "false");
        chevron.textContent = isOpen ? "▾" : "▸";
      }
      wrap.addEventListener("click", toggle);
      wrap.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });

      item.appendChild(wrap);
      item.appendChild(detail);
      container.appendChild(item);
    });
  }

  function showReviewModal() {
    var lvl = STATE.currentLevel;
    var ls = STATE.levels[lvl];
    var rows = computeTagBreakdown(ls.recentLog);
    var correctCount = ls.recentLog.filter(function (e) { return e.correct; }).length;
    var recentPct = ls.recentLog.length ? Math.round((correctCount / ls.recentLog.length) * 100) : 0;

    els.modalLevel.textContent = lvl;
    els.modalSub.textContent = "Last " + ls.recentLog.length + " sentences: " + recentPct + "% correct.";
    renderTagBars(els.modalTagList, rows, "No topics tracked yet.");

    els.modalRecList.innerHTML = "";
    var weak = rows.filter(function (r) { return r.pct < 75; }).slice(0, 3);
    if (weak.length === 0) {
      var li = document.createElement("li");
      li.className = "rec-item";
      li.innerHTML = "<b>Nice work!</b> No weak spots in this batch — keep going.";
      els.modalRecList.appendChild(li);
    } else {
      weak.forEach(function (row) {
        var meta = TAGS[row.tag] || { label: row.tag, tip: "" };
        var item = document.createElement("li");
        item.className = "rec-item";
        item.innerHTML = "<b>" + escapeHtml(meta.label) + " (" + row.pct + "%)</b>" + escapeHtml(meta.tip);
        els.modalRecList.appendChild(item);
      });
    }

    var levelIdx = LEVELS.indexOf(lvl);
    els.modalLevelSuggestion.style.display = "none";
    if (recentPct >= 90 && levelIdx < LEVELS.length - 1) {
      els.modalLevelSuggestion.style.display = "block";
      els.modalLevelSuggestion.textContent = "You're doing great at " + lvl + " — consider trying " + LEVELS[levelIdx + 1] + " next.";
    } else if (recentPct < 40 && levelIdx > 0) {
      els.modalLevelSuggestion.style.display = "block";
      els.modalLevelSuggestion.textContent = lvl + " looks tough right now — a quick review of " + LEVELS[levelIdx - 1] + " might help before continuing here.";
    }

    els.reviewModal.classList.add("show");
  }

  function closeReviewModal() {
    var ls = STATE.levels[STATE.currentLevel];
    ls.sinceReview = 0;
    ls.recentLog = [];
    saveState();
    els.reviewModal.classList.remove("show");
    loadNextSentence();
  }

  /* ---------------------------------------------------------------------
   * 8. STATS VIEW
   * ------------------------------------------------------------------- */
  function showStatsView() {
    els.practiceView.style.display = "none";
    els.statsView.style.display = "block";
    els.statsBtn.style.display = "none";
    els.practiceBtn.style.display = "";

    var totalAll = 0, correctAll = 0;
    var mergedTags = {};
    LEVELS.forEach(function (lvl) {
      var ls = STATE.levels[lvl];
      totalAll += ls.total;
      correctAll += ls.correct;
      Object.keys(ls.tagStats).forEach(function (tag) {
        if (!mergedTags[tag]) mergedTags[tag] = { attempts: 0, correct: 0 };
        mergedTags[tag].attempts += ls.tagStats[tag].attempts;
        mergedTags[tag].correct += ls.tagStats[tag].correct;
      });
    });
    els.statTotal.textContent = totalAll;
    els.statAccuracy.textContent = totalAll ? Math.round((correctAll / totalAll) * 100) + "%" : "—";
    els.statLevel.textContent = STATE.currentLevel;
    els.statsProfileName.textContent = ACTIVE_PROFILE || "—";
    els.resetDesc.innerHTML = "This clears all saved progress for <b>" + escapeHtml(ACTIVE_PROFILE || "") + "</b> on this device.";

    var rows = Object.keys(mergedTags).map(function (tag) {
      var d = mergedTags[tag];
      return { tag: tag, attempts: d.attempts, correct: d.correct, pct: Math.round((d.correct / d.attempts) * 100) };
    });
    rows.sort(function (a, b) { return a.pct - b.pct; });
    if (rows.length === 0) {
      els.statsTagList.innerHTML = "";
      els.statsEmptyNote.style.display = "block";
    } else {
      els.statsEmptyNote.style.display = "none";
      renderTagBars(els.statsTagList, rows, "");
    }
  }

  function showPracticeView() {
    els.statsView.style.display = "none";
    els.practiceView.style.display = "block";
    els.statsBtn.style.display = "";
    els.practiceBtn.style.display = "none";
    els.resetConfirmRow.classList.remove("show");
  }

  /* ---------------------------------------------------------------------
   * 9. EVENTS
   * ------------------------------------------------------------------- */
  els.checkBtn.addEventListener("click", handleCheck);
  els.skipBtn.addEventListener("click", handleSkip);
  els.nextBtn.addEventListener("click", handleNext);
  els.statsBtn.addEventListener("click", showStatsView);
  els.practiceBtn.addEventListener("click", showPracticeView);
  els.modalCloseBtn.addEventListener("click", closeReviewModal);
  els.profilePillBtn.addEventListener("click", function () { openProfileModal(false); });
  els.profileModalCloseBtn.addEventListener("click", closeProfileModalIfAllowed);
  els.addProfileBtn.addEventListener("click", addProfile);
  els.newProfileInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); addProfile(); }
  });
  els.resetBtn.addEventListener("click", function () { els.resetConfirmRow.classList.add("show"); });
  els.resetConfirmNo.addEventListener("click", function () { els.resetConfirmRow.classList.remove("show"); });
  els.resetConfirmYes.addEventListener("click", function () {
    STATE = { currentLevel: "A1", currentSection: "general", levels: {} };
    LEVELS.forEach(function (lvl) { STATE.levels[lvl] = defaultLevelState(); });
    saveState();
    els.resetConfirmRow.classList.remove("show");
    renderLevelTabs();
    renderSectionTabs();
    updateHeaderStats();
    showStatsView();
  });

  els.answerInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!checked) {
        handleCheck();
      } else {
        handleNext();
      }
    }
  });

  /* ---------------------------------------------------------------------
   * 10. INIT
   * ------------------------------------------------------------------- */
  function startApp() {
    STATE = loadState();
    updateProfilePill();
    renderLevelTabs();
    renderSectionTabs();
    loadNextSentence();
  }

  if (ACTIVE_PROFILE) {
    startApp();
  } else {
    openProfileModal(true);
  }
})();
