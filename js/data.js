const yearWheelData = [
    {
        id: "jan",
        month: "Januari",
        topic: "Luftvägshantering och ventilation",
        responsible: "Nettan & Linn",
        color: "#557c6e",
        description: "Januari fokuserar på att säkra fri luftväg och optimera ventilationen för kritiskt sjuka patienter. Vi går igenom utrustning, handhavande och algoritmstyrd behandling.",
        material: {
            videos: [
                {
                    title: "iGel: Tips, Trix & Felsökning",
                    description: "Ryan Ackerman går igenom tips, trix och felsökning vid användning av iGel.",
                    url: "https://www.youtube.com/watch?v=Iwys9x278bk"
                },
                {
                    title: "Nässvalgstub (NPA)",
                    description: "Grundläggande introduktion till insättning av nässvalgstub (NPA) för luftvägskontroll.",
                    url: "https://www.youtube.com/watch?v=gVgAlWRCZBs"
                },
                {
                    title: "Svalgtub (OPA)",
                    description: "Grundläggande introduktion till insättning av svalgtub (OPA) för luftvägskontroll.",
                    url: "https://www.youtube.com/watch?v=Hzc_T4QBp4E"
                }
            ],
            podcasts: [
                {
                    title: "Sammanfattning: Riktlinjer Vuxen",
                    description: "En ljudsammanfattning av de prehospitala riktlinjerna för vuxna.",
                    url: "https://drive.google.com/file/d/1-_pGtwQicvQQnhp4glS37lIwPOn99qMB/view?usp=drive_link"
                }
            ],
            documents: [
                {
                    title: "Vårdhandboken: Oxygenbehandling",
                    url: "https://www.vardhandboken.se/vard-och-behandling/lakemedelsbehandling/oxygenbehandling/",
                    description: "Vårdhandbokens riktlinjer för oxygenbehandling."
                }
            ]
        },
        guidelines: [
            {
                category: "Patientnära utrustning",
                items: [
                    { title: "CPAP", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/vuxen/JW1PEiWsGJcWg6qAecgY" }
                ]
            },
            {
                category: "Vuxen",
                items: [
                    { title: "Anafylaktisk reaktion", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/vuxen/gQsgRVBEdPVin07Dnl4N" },
                    { title: "Astma", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/vuxen/ogvo3tI2wecvKB4DRx8z" },
                    { title: "KOL", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/vuxen/9jpZFxB53Dtks5xpOEGc" },
                    { title: "Epiglotit", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/vuxen/QuZJRW0vHt0vJZXi41rt" },
                    { title: "Luftvägsstopp", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/vuxen/G9oSev5dLhM3IdObJkez" },
                    { title: "Inhalation av skadliga ämnen", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/vuxen/PVs7pp8iDvqtHPsLToM4" }
                ]
            },
            {
                category: "Barn",
                items: [
                    { title: "Allergi, anafylaxi", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/barn/vnLxYgBt4lwl6bOnVMTD" },
                    { title: "Epiglotit", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/barn/w3BEcKqjENh5TmfTrjLA" },
                    { title: "Falsk krupp", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/barn/4kcDtv61TmmDxHBehRS5" },
                    { title: "Främmande kropp", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/barn/eLaGoYzWL0EQgS1qPeJg" },
                    { title: "Inhalation av skadliga ämnen", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/barn/ov6BcuuDJS26B7MrBIWx" },
                    { title: "Astma / obstruktiva besvär", url: "https://prehospitalt-kunskapsstod.infosynk.se/category/barn/2XMXrau3sbdCLsWMFfYO" }
                ]
            }
        ]
    },
    {
        id: "feb",
        month: "Februari",
        topic: "Sköra Äldre",
        responsible: "Nettan",
        color: "#3fb950",
        description: "Fokus på omhändertagande av äldre patienter, multisvikt och läkemedelsgenomgångar.",
        resources: [],
        quiz: []
    },
    {
        id: "mar",
        month: "Mars",
        topic: "Barn - första bedömning",
        responsible: "Information saknas",
        color: "#d29922",
        description: "Pediatrisk bedömning enligt PALS-strukturen och kommunikation med barn.",
        resources: [],
        quiz: []
    },
    {
        id: "apr",
        month: "April",
        topic: "Psykiatri & Suicid",
        responsible: "Anna N-J",
        color: "#f85149",
        description: "Bemötande vid psykisk ohälsa, suicidriskbedömning och samverkan med psykiatrin.",
        resources: [],
        quiz: []
    },
    {
        id: "may",
        month: "Maj",
        topic: "Sommarrelaterade tillstånd",
        responsible: "Information saknas",
        color: "#db61a2",
        description: "Värmeslag, drunkningstillbud, insektsbett och allergiska reaktioner.",
        resources: [],
        quiz: []
    },
    {
        id: "jun",
        month: "Juni",
        topic: "Trauma & MARCH",
        responsible: "Information saknas",
        color: "#a371f7",
        description: "Traumaomhändertagande enligt PHTLS och MARCH-algoritmen.",
        resources: [],
        quiz: []
    },
    {
        id: "jul",
        month: "Juli",
        topic: "Uppehåll",
        responsible: "-",
        color: "#8b949e",
        description: "Sommaruppehåll.",
        resources: [],
        quiz: []
    },
    {
        id: "aug",
        month: "Augusti",
        topic: "Hjärtstopp - team och A-hlr",
        responsible: "Maria S",
        color: "#557c6e",
        description: "Träning på A-HLR, teamarbete och defibrillering.",
        resources: [],
        quiz: []
    },
    {
        id: "sep",
        month: "September",
        topic: "Förlossning",
        responsible: "Amanda",
        color: "#3fb950",
        description: "Normal förlossning prehospitalt samt omhändertagande av det nyfödda barnet.",
        resources: [],
        quiz: []
    },
    {
        id: "oct",
        month: "Oktober",
        topic: "Infektion & Sepsis",
        responsible: "Pernilla & Magda",
        color: "#d29922",
        description: "Tidig upptäckt av sepsis, NEWS2-bedömning och antibiotikabehandling.",
        resources: [],
        quiz: []
    },
    {
        id: "nov",
        month: "November",
        topic: "CBRNE",
        responsible: "Information saknas",
        color: "#f85149",
        description: "Hantering av farliga ämnen, skyddsutrustning och sanering.",
        resources: [],
        quiz: []
    },
    {
        id: "dec",
        month: "December",
        topic: "Etik, svåra beslut & reflektion",
        responsible: "Information saknas",
        color: "#db61a2",
        description: "Etiska dilemman i vården, avslutande av behandling och reflektion.",
        resources: [],
        quiz: []
    }
];
