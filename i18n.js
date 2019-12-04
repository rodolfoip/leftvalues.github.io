function getCookie (name) {
    let value = '; ' + document.cookie
    let parts = value.split('; ' + name + '=')
    if (parts.length === 2) return parts.pop().split(';').shift()
}
function setCookie (cname, cvalue, exhours) {
    let d = new Date()
    d.setTime(Date.now() + (exhours * 60 * 60 * 1000))
    let expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

const langElements = document.querySelectorAll('[data-i18n]')
const userLang = getCookie("lang") || navigator.language || navigator.userLanguage
const languages = [
    {
        "name": "english",
        "code": "en"
    },
    {
        "name": "deutsch",
        "code": "de"
    },
    {
        "name": "portuguese",
        "code": "pt"
    }
]
const i18n = {
    getString(name, arguments=null) {
        if (userLang in i18n[name]) {
             if (arguments) {
                 return i18n[name][userLang](...arguments)
             }
             return i18n[name][userLang]
        }
        if (arguments) {
            return i18n[name]["en"](...arguments)
        }
        return i18n[name]["en"]
    },
    "lang": userLang,
    // quiz.html
    "quiz-loading": {
        "de": "Laden…"
    },
    "quiz-strongly-agree": {
        "en": "Strongly Agree",
        "de": "Stimme voll zu",
        "pt": "Concordo plenamente"
    },
    "quiz-agree": {
        "en": "Agree",
        "de": "Stimme zu",
        "pt": "Aceito"
    },
    "quiz-neutral": {
        "en": "Neutral/Unsure",
        "de": "Neutral/Unsicher",
        "pt": "Neutro/Inseguro"
    },
    "quiz-disagree": {
        "en": "Disagree",
        "de": "Stimme nicht zu",
        "pt": "Discordo"
    },
    "quiz-strongly-disagree": {
        "en": "Strongly Disagree",
        "de": "Stimme überhaupt nicht zu",
        "pt": "Discordo fortemente"
    },
    "quiz-back": {
        "en": "back",
        "de": "Zurück",
        "pt": "Voltar"
    },
    "quiz-question-of": {
        en(qn, questions) {return `Question ${qn + 1} of ${questions.length}`},
        de(qn, questions) {return `Frage ${qn +1} von ${questions.length}`},
        pt(qn, questions) {return `Questão ${qn +1} de ${questions.length}`},
    },
    // instructions.html
    "inst-h2": {
        "en": "Instructions",
        "de": "Instruktionen",
        "pt": "Instruções"
    },
    "inst-p": {
        "en": "You will be presented with a series of statements. For each one, click the button with your opinion on it.",
        "de": "Sie erhalten eine Reihe von Stellungnahmen. Klicken Sie jeweils auf die Schaltfläche mit Ihrer Meinung dazu.",
        "pt": "Você receberá uma série de declarações. Para cada um, clique no botão com a sua opinião."
    },
    "inst-gotit": {
        "en": "Got it!",
        "de": "Verstanden",
        "pt": "Consegui!"
    },
    "inst-nvm": {
        "en": "Wait, nevermind!",
        "de": "Warte, vergiss es!",
        "pt": "Espere, deixa pra lá!"
    },
    // results.html
    "result-h1": {
        "en": "Results",
        "de": "Ergebnisse",
        "pt": "Resultados"
    },
    "result-url": {
        "en": "<br>You can send these results by copying and pasting the URL at the top of the page or using the image below.",
        "de": "<br>Sie können diese Ergebnisse senden, indem Sie die URL oben auf der Seite kopieren und einfügen oder das folgende Bild verwenden.",
        "pt": "<br>Você pode enviar esses resultados copiando e colando o URL na parte superior da página ou usando a imagem abaixo."
    },
    "result-h2-match": {
        "en": "Closest Match: <span class='weight-300' id='ideology-label'> </span>",
        "de": "Höchste Übereinstimmung: <span class='weight-300' id='ideology-label'> </span>",
        "pt": "Correspondência mais próxima: <span class='weight-300' id='ideology-label'> </span>"
    },
    "result-h2-next-matches": {
        "en": "Next closest matches",
        "de": "Nächst höchste Überstimmungen",
        "pt": "Próximas partidas mais próximas"
    },
    "next-matches-percent": {
        "en": "With your closest match as 100% and farthest as 0%, here is how closely you matched the other ideologies.",
        "de": "Hier sind die Ideologien mit denen du am meisten übereinstimmst, wo volle Übereinstimmung 100% ist und keine 0%.",
        "pt": "Com a sua correspondência mais próxima de 100% e a mais distante de 0%, refere-se o quão perto você correspondeu às outras ideologias."
    },
    "result-h2-score": {
        "en": "I don't like my scores!",
        "de": "Ich mag meine Ergebnisse nicht",
        "pt": "Eu não gosto da minha pontuação!"
    },
    "result-issues": {
        "en": "Please remember that you are not intended to get a 100% score in any of the categories. The point of the quiz is to challenge your views. If you have any suggestions or constructive criticism please fill out this <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>short form</a> or open an issue on the <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub Page</a>.",
        "de": "Bitte denken Sie daran, dass Sie in keiner der Kategorien eine 100%-ige Punktzahl erzielen möchten. Ziel des Quiz ist es, Ihre Ansichten zu hinterfragen. Wenn Sie Anregungen oder konstruktive Kritik haben, füllen Sie bitte dieses <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>Kurzformular</a> aus oder öffnen Sie ein Problem auf der <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub-Seite</a>.",
        "pt": "Lembre-se de que você não pretende obter uma pontuação de 100% em nenhuma das categorias. O objetivo do questionário é desafiar seus pontos de vista. Se você tiver alguma sugestão ou crítica construtiva, preencha este <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>Formulário</a> ou abra uma issue na <a href='https://github.com/LeftValues/leftvalues.github.io'>Página do GitHub</a>."
    },
    "result-a-label": {
        "en": ["Extremely Revolutionary","Very Revolutionary","Revolutionary","Neutral","Reformist","Very Reformist","Extremely Reformist"],
        "de": ["Extrem Revolutionär", "Sehr Revolutionär", "Revolutionär", "Neutral", "Reformistisch", "Sehr Reformistisch", "Extrem Reformistisch"],
        "pt": ["Extremamente Revolucionário", "Muito Revolucionário", "Revolucionário", "Neutro", "Reformista", "Muito Reformista", "Extramamente Reformista"]
    },
    "result-b-label": {
        "en": ["Extremely Scientific","Very Scientific","Scientific","Neutral","Utopian","Very Utopian","Extremely Utopian"],
        "de": ["Extrem Wissenschaftlich", "Sehr Wissenschaftlich", "Wissenschaftlich", "Neutral", "Utopisch", "Sehr Utopisch", "Extrem Utopisch"],
        "pt": ["Extremamente Científico", "Muito Científico", "Científico", "Neutro", "Utópico", "Muito Utópico", "Extramamente Utópico"]
    },
    "result-c-label": {
        "en": ["Extremely Centralist","Very Centralist","Centralist","Neutral","Decentralist","Very Decentralist","Extremely Decentralist"],
        "de": ["Extrem Zentralisiert", "Sehr Zentralisiert", "Zentralisiert", "Neutral", "Dezentralisiert", "Sehr Dezentralisiert", "Extrem Dezentralisiert"],
        "pt": ["Extremamente centralista", "Muito centralista", "centralista", "Neutro", "Descentralista", "Muito Descentralista", "Extramamente Descentralista"]
    },
    "result-d-label": {
        "en": ["Extremely Internationalist","Very Internationalist","Internationalist","Neutral","Nationalist","Very Nationalist","Extremely Nationalist"],
        "de": ["Extrem Internationalistisch", "Sehr Internationalistisch", "Internationalistisch", "Neutral", "Nationalistisch", "Sehr Nationalistisch", "Extrem Nationalistisch"],
        "pt": ["Extremamente Internacionalista", "Muito Internacionalista", "Internacionalista", "Neutro", "Nacionalista", "Muito Nacionalista", "Extramamente Nacionalista"]
    },
    "result-e-label": {
        "en": ["Extremely Partisan","Very Partisan","Partisan","Neutral","Unionist","Very Unionist","Extremely Unionist"],
        "de": ["Extrem Parteiisch", "Sehr Parteiisch", "Parteiisch", "Neutral", "Gewerkschaftlich", "Sehr Gewerkschaftlich", "Extrem Gewerkschaftlich"],
        "pt": ["Extremamente Partidário", "Muito Partidário", "Partidário", "Neutro", "Sindicalista", "Muito Sindicalista", "Extramamente Sindicalista"]
    },
    "result-f-label": {
        "en": ["Extremely Productivist","Very Productivist","Productivist","Neutral","Ecological","Very Ecological","Extremely Ecological"],
        "de": ["Extrem Produktivist", "Sehr Produktivist", "Produktivist", "Neutral", "Ökologisch", "Sehr Ökologisch", "Extrem Ökologisch"],
        "pt": ["Extremamente Produtivista", "Muito Produtivista", "Produtivista", "Neutro", "Ecológico", "Muito Ecológico", "Extramamente Ecológico"]
    },
    "result-g-label": {
        "en": ["Extremely Conservative","Very Conservative","Conservative","Neutral","Progressive","Very Progressive","Extremely Progressive"],
        "de": ["Extrem Konservativ", "Sehr Konservativ", "Konservativ", "Neutral", "Progressiv", "Sehr Progressiv", "Extrem Progressiv"],
        "pt": ["Extremamente Conservador", "Muito Conservador", "Conservador", "Neutro", "Progressista", "Muito Progressista", "Extramamente Progressista"]
    },
    "result-back": {
        "en": "Back",
        "de": "Zurück",
        "pt": "Voltar"
    },
    // index.html
    "index-b-start": {
        "en": "Click here to start!",
        "de": "Klicke hier um anzufangen!",
        "pt": "Clique aqui para começar!",
    },
    "index-h2-whatis" : {
        "en": "What is LeftValues?",
        "de": "Was ist LeftValues?",
        "pt": "O que é o LeftValues?"
    },
    "index-p-answer": {
        "en": "LeftValues is a leftist quiz inspired by and based upon the <a href='https://8values.github.io/'>8values</a> quiz that seeks to identify your position on the left-wing spectrum. " +
        "If you are not a leftist, this quiz is obviously not suited for you. You will be presented with a statement, and then you will answer with your opinion on the statement, from <b>Strongly Agree</b> to <b>Strongly Disagree</b>, with each answer slightly affecting your scores. The questions for each axes are presented in order, rather than scattered. At the end of the quiz, your answers will be compared to the maximum possible for each value, thus giving you a percentage. Answer honestly!<br/><br/>" +
        "There are <b><u><span id='numOfQuestions'></span></u></b> questions in the test.",
        "de": "LeftValues ist ein linkes Quiz, das von dem Quiz <a href='https://8values.github.io/'>8values</a> inspiriert ist und auf diesem basiert und versucht, Ihre Position im linken Spektrum zu bestimmen." +
        "Wenn Sie kein Linker sind, ist dieses Quiz offensichtlich nicht für Sie geeignet. Ihnen wird eine Erklärung vorgelegt, und Sie werden mit Ihrer Meinung zu den Fragen mit den Antworten <b>Stimme voll zu</b> bis <b>Stimme überhaupt nicht zu</b>, wobei sich jede Antwort geringfügig auf deine Punktzahl auswirkt. Die Fragen für die einzelnen Achsen werden nacheinander und nicht gestreut dargestellt. Am Ende des Quiz werden deine Antworten mit dem für jeden Wert maximal möglichen Wert verglichen. Damit geben Sie einen Prozentsatz. Antworte ehrlich! <br/> <br/>"+
        "Der Test enthält <b><u><span id='numOfQuestions'></span></u></b> Fragen.",
        "pt": "LeftValues é um questionário de esquerda inspirado e baseado no <a href='https://8values.github.io/'>8values</a>, questionário que procura identificar sua posição no espectro da esquerda." +
        "Se você não é de esquerda, este questionário obviamente não é adequado para você. Você receberá uma declaração e, em seguida, responderá com sua opinião, de <b> Concordo plenamente </b> a <b> Discordo totalmente</b>, com cada resposta afetando levemente sua pontuação. As perguntas para cada eixo são apresentadas em ordem, em vez de dispersas. No final do questionário, suas respostas serão comparadas ao máximo possível para cada valor, fornecendo uma porcentagem. Responda honestamente! <br/> <br/>"+
        "São <b><u><span id='numOfQuestions'></span></u></b> questões no teste."
    },
    "index-h2-whatvalues": {
        "en": "What are the values?",
        "de": "Was sind die Werte?",
        "pt": "Quais são os valores?"
    },
    "index-sixaxes": {
        "en": "There are currently six axes, each of which has two opposing values. They are:",
        "de": "Derzeit gibt es sechs Achsen, von denen jede zwei entgegengesetzte Werte hat. Sie sind:",
        "pt": "Atualmente, existem seis eixos, cada um dos quais com dois valores opostos. Eles são:",
    },
    "index-rev-desc": {
        "en": "<b style='color:#890000;'>Revolution</b> <b>vs.</b> <b style='color:#FC5959;'>Reform</b><br/>" +
        "Those with a higher revolution score tend to support a radical and rapid overthrow of the capitalist system through a mass uprising. Those with a higher reform score tend to favor inducing gradual changes within capitalist structures, such as liberal democracy, with the eventual goal of reaching socialism.",
        "de": "<b style='color:#890000;'>Revolution</b> <b>vs.</b> <b style='color:#FC5959;'>Reform</b><br/>" +
        "Diejenigen mit einem höheren Revolutionswert unterstützen tendenziell einen radikalen und raschen Sturz des kapitalistischen Systems durch einen Massenaufstand. Diejenigen mit einem höheren Reformwert tendieren dazu, allmähliche Veränderungen in kapitalistischen Strukturen wie der liberalen Demokratie herbeizuführen, mit dem eventuellen Ziel des Sozialismus.",
        "pt": "<b style='color:#890000;'>Revolução</b> <b>vs.</b> <b style='color:#FC5959;'>Reforma</b><br/>" +
          "Aqueles com uma pontuação de revolução mais alta tendem a apoiar uma derrubada radical e rápida do sistema capitalista através de um levante em massa. Aqueles com uma pontuação de reforma mais alta tendem a favorecer a indução de mudanças graduais nas estruturas capitalistas, como a democracia liberal, com o objetivo final de alcançar o socialismo."
    },
    "index-sci-desc": {
        "en": "<b style='color:#88232B;'>Scientific</b> <b>vs.</b> <b style='color:#7F0037;'>Utopian</b><br/>" +
        "Those with a higher scientific score tend to support or sympathize with the Marxist analysis of society along the lines of dialectical materialism. Those with a higher utopian score tend to believe in a more idealistic analysis of society and reject materialist approaches.",
        "de": "<b style='color:#88232B;'>Wissenschaftlich</b> <b>vs.</b> <b style='color:#7F0037;'>Utopisch</b><br/>" +
        "Diejenigen mit einer höheren wissenschaftlichen Punktzahl neigen dazu, die marxistische Gesellschaftsanalyse im Sinne des dialektischen Materialismus zu unterstützen oder zu sympathisieren. Diejenigen mit einer höheren utopischen Bewertung neigen dazu, an eine idealistischere Analyse der Gesellschaft zu glauben und materialistische Ansätze abzulehnen.",
        "pt": "<b style='color:#88232B;'>Científico</b> <b>vs.</b> <b style='color:#7F0037;'>Utópico</b><br/>" +
          "Aqueles com maior pontuação científica tendem a apoiar ou simpatizar com a análise marxista da sociedade ao longo das linhas do materialismo dialético. Aqueles com uma pontuação utópica mais alta tendem a acreditar em uma análise mais idealista da sociedade e a rejeitar abordagens materialistas.",
    },
    "index-cent-desc": {
        "en": "<b style='color:#560000;'>Central</b> <b>vs.</b> <b style='color:#000000;'>Decentral</b><br/>" +
        "Those with a higher central score tend to support an economic structure based around centralized national planning. Those with a higher decentral score tend to support an economic structure based around decentralized planning, usually on a more localized scale.",
        "de": "<b style='color:#560000;'>Zentralisiert</b> <b>vs.</b> <b style='color:#000000;'>Dezentralisiert</b><br/>" +
        "Diejenigen mit einer höheren zentralen Punktzahl neigen dazu, eine Wirtschaftsstruktur zu unterstützen, die auf einer zentralisierten nationalen Planung beruht. Diejenigen mit einer höheren dezentralen Punktzahl neigen dazu, eine Wirtschaftsstruktur zu unterstützen, die auf einer dezentralen Planung beruht, normalerweise in einem lokaleren Maßstab.",
        "pt": "<b style='color:#560000;'>Central</b> <b>vs.</b> <b style='color:#000000;'>Descentralizado</b><br/>" +
          "Aqueles com uma pontuação central mais alta tendem a apoiar uma estrutura econômica baseada no planejamento nacional centralizado. Aqueles com uma pontuação descentralizada mais alta tendem a apoiar uma estrutura econômica baseada no planejamento descentralizado, geralmente em uma escala mais localizada."
    },
    "index-int-desc": {
        "en": "<b style='color:#782F52;'>International</b> <b>vs.</b> <b style='color:#7F3300;'>National</b><br/>" +
        "Those with a higher international score tend to support forming an international socialist movement, often with the eventual goal of abolishing nations. Those with a higher national score tend to prioritize building socialism within existing borders and reject the goal of a world socialist republic.",
        "de": "<b style='color:#782F52;'>International</b> <b>vs.</b> <b style='color:#7F3300;'>National</b><br/>" +
        "Diejenigen mit einer höheren internationalen Punktzahl neigen dazu, die Bildung einer internationalen sozialistischen Bewegung zu unterstützen, oft mit dem Ziel, Nationen abzuschaffen. Diejenigen mit einer höheren nationalen Punktzahl neigen dazu, den Aufbau des Sozialismus innerhalb der bestehenden Grenzen zu priorisieren und das Ziel einer sozialistischen Weltrepublik abzulehnen.",
        "pt": "<b style='color:#782F52;'>International</b> <b>vs.</b> <b style='color:#7F3300;'>Nacional</b><br/>" +
          "Aqueles com uma pontuação internacional mais alta tendem a apoiar a formação de um movimento socialista internacional, geralmente com o objetivo final de abolir nações. Aqueles com maior pontuação nacional tendem a priorizar a construção do socialismo dentro das fronteiras existentes e a rejeitar o objetivo de uma república socialista mundial."
    },
    "index-party-desc": {
        "en": "<b style='color:#963B33;'>Party</b> <b>vs.</b> <b style='color:#7F333B;'>Union</b><br/>" +
        "Those with a higher party score tend to favor using political parties as the basis of a socialist movement. Those with a higher union score tend to favor using trade unions and other forms of mass organization as a basis of a socialist movement. Being pro-party does not necessarily mean you oppose unions and vice versa, it is more about preference.",
        "de": "<b style='color:#963B33;'>Partei</b> <b>vs.</b> <b style='color:#7F333B;'>Gesellschaft</b><br/>" +
        "Diejenigen mit einer höheren Parteibewertung bevorzugen es, politische Parteien als Grundlage einer sozialistischen Bewegung zu verwenden. Diejenigen mit einer höheren Gewerkschaftsbewertung bevorzugen es, Gewerkschaften und andere Formen der Massenorganisation als Grundlage einer sozialistischen Bewegung zu verwenden. Partei bedeutet nicht unbedingt, dass Sie gegen Gewerkschaften sind und umgekehrt, es geht mehr um Präferenzen.",
        "pt": "<b style='color:#963B33;'>Partido</b> <b>vs.</b> <b style='color:#7F333B;'>União</b><br/>" +
          "Aqueles com maior pontuação partidária tendem a preferir o uso de partidos políticos como base de um movimento socialista. Aqueles com uma pontuação sindical mais alta tendem a preferir o uso de sindicatos e outras formas de organização de massa como base de um movimento socialista. Ser pró-partido não significa necessariamente que você se opõe aos sindicatos e vice-versa, é mais uma questão de preferência."
    },
    "index-prod-desc": {
        "en": "<b style='color:#804E00;'>Production</b> <b>vs.</b> <b style='color:#76890B;'>Nature</b><br/>" +
        "Those with a higher production score tend to prioritize industrial output and self-sustainability over ecological goals. Those with a higher nature score tend to support an environmentally oriented economy with strict ecological protections.",
        "de": "<b style='color:#804E00;'>Produktion</b> <b>vs.</b> <b style='color:#76890B;'>Ökologie</b><br/>" +
        "Diejenigen mit einem höheren Produktionsfaktor tendieren dazu, die Industrieproduktion und die Selbstverträglichkeit vor ökologischen Zielen zu priorisieren. Diejenigen mit einem höheren ökologischen Faktor tendieren dazu, eine umweltorientierte Wirtschaft mit strengen ökologischen Schutzmaßnahmen zu unterstützen.",
        "pt": "<b style='color:#804E00;'>Produção</b> <b>vs.</b> <b style='color:#76890B;'>Natureza</b><br/>" +
          "Aqueles com maior pontuação de produção tendem a priorizar a produção industrial e a auto-sustentabilidade em relação aos objetivos ecológicos. Aqueles com uma pontuação maior na natureza tendem a apoiar uma economia ambientalmente orientada, com proteções ecológicas rigorosas."
    },
    "index-cons-desc": {
        "en": "<b style='color:#27577A;'>Conservative</b> <b>vs.</b> <b style='color:#C4A717;'>Progressive</b><br/>" +
        "Those with a higher conservative score tend to favor more socially conservative policies and views. Those with a higher progressive score tend to support more socially progressive policies and views.",
        "de": "<b style='color:#27577A;'>Konservativ</b> <b>vs.</b> <b style='color:#C4A717;'>Progressiv</b><br/>" +
        "Diejenigen mit einer höheren konservativen Bewertung tendieren dazu, sozial konservativere Strategien und Ansichten zu bevorzugen. Diejenigen mit einer höheren progressiven Punktzahl unterstützen tendenziell eine sozial progressivere Politik und Sichtweise.",
        "pt": "<b style='color:#27577A;'>Conservador</b> <b>vs.</b> <b style='color:#C4A717;'>Progressista</b><br/>" +
          "Aqueles com uma pontuação conservadora mais alta tendem a favorecer políticas e opiniões mais socialmente conservadoras. Aqueles com uma pontuação progressiva mais alta tendem a apoiar políticas e pontos de vista socialmente progressistas."
    },
    "index-h2-closest": {
        "en": "What does \"Closest Match\" mean in the results?",
        "de": "Was bedeutet \"Nächste Übereinstimmung\" in den Ergebnissen?",
        "pt": "O que significa \"Correspondência mais próxima\" nos resultados?"
    },
    "index-p-similar": {
        "en": "Similar to 8values, this quiz will attempt to match you with a specific leftist ideology. There are currently twelve possible ideologies, with more to come in the future. This is a work in progress and may not work as intended. Suggestions are very welcome. The current ideologies are: Marxism-Leninism, Orthodox Marxism, Eco-Marxism, Centrist Marxism, Council Communism, Left Communism, Anarcho-Communism, Eco-Anarchism, Market Anarchism, Utopian Socialism, Democratic Socialism and Social Democracy",
        "de": "Ähnlich wie bei 8values wird dieses Quiz versuchen, Sie mit einer bestimmten linken Ideologie in Einklang zu bringen. Derzeit gibt es zwölf mögliche Ideologien, von denen in Zukunft weitere folgen werden. Dies ist eine laufende Arbeit und funktioniert möglicherweise nicht wie beabsichtigt. Vorschläge sind sehr willkommen. Die gegenwärtigen Ideologien sind: Marxismus-Leninismus, orthodoxer Marxismus, Öko-Marxismus, zentristischer Marxismus, Kommunismus des Rates, Linkskommunismus, Anarcho-Kommunismus, Öko-Anarchismus, Marktanarchismus, utopischer Sozialismus, demokratischer Sozialismus und Sozialdemokratie",
        "pt": "Semelhante aos valores 8, este questionário tentará combiná-lo com uma ideologia esquerdista específica. Atualmente, existem doze ideologias possíveis, com mais por vir no futuro. Este é um trabalho em andamento e pode não funcionar como pretendido. Sugestões são muito bem-vindas. As ideologias atuais são: marxismo-leninismo, marxismo ortodoxo, eco-marxismo, marxismo centrista, comunismo de conselho, comunismo de esquerda, anarco-comunismo, eco-anarquismo, anarquismo de mercado, socialismo utópico, socialismo democrático e social-democracia"
    },
    "index-h2-scores": {
        "en": "I don't like my scores!",
        "de": "Ich mag meine Ergebnisse nicht!",
        "pt": "Eu não gosto da minha pontuação!"
    },
    "index-p-scores": {
        "en": "Please remember that you are not intended to get a 100% score in any of the categories. The point of the quiz is to challenge your views. If you have any suggestions or constructive criticism please fill out this <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>short form</a> or open an issue on the <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub Page</a>.",
        "de": "Bitte denken Sie daran, dass Sie in keiner der Kategorien eine 100%-ige Punktzahl erzielen möchten. Ziel des Quiz ist es, Ihre Ansichten zu hinterfragen. Wenn Sie Anregungen oder konstruktive Kritik haben, füllen Sie bitte dieses <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>Kurzformular</a> aus oder öffnen Sie ein Problem auf der <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub-Seite</a>.",
        "pt": "Lembre-se de que você não pretende obter uma pontuação de 100% em nenhuma das categorias. O objetivo do questionário é desafiar seus pontos de vista. Se você tiver alguma sugestão ou crítica construtiva, preencha este <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>formulário</a> ou abra uma issue na <a href='https://github.com/LeftValues/leftvalues.github.io'>página do GitHub</a>.",
    },
    "index-h2-tracked": {
        "en": "Am I being tracked?",
        "de": "Werde ich getracked?",
        "pt": "Estou sendo rastreado?"
    },
    "index-p-tracked": {
        "en": "LeftValues does utilize very basic tracking to get an idea of the amount of visitors. No personal information is collected and answers/results are not saved. If you do not believe me, the code is open source and available for all to see. For transparency purposes, the collected data for the first week since release can be viewed on this <a href='https://docs.google.com/document/d/1pcnZdMkEmGXgLMS8izvqd_JEcgjuFgUnfqCRO32q2go/edit?usp=sharing'>Google Document</a>.",
        "de": "LeftValues verwendet ein sehr einfaches Tracking, um sich einen Überblick über die Anzahl der Besucher zu verschaffen. Es werden keine persönlichen Informationen gesammelt und Antworten/Ergebnisse werden nicht gespeichert. Wenn Sie mir nicht glauben, ist der Code Open Source und für alle sichtbar.",
        "pt": "O LeftValues utiliza um rastreamento muito básico para ter uma idéia da quantidade de visitantes. Nenhuma informação pessoal é coletada e as respostas / resultados não são salvos. Se você não acredita em mim, o código é de código aberto e disponível para todos verem. Para fins de transparência, os dados coletados da primeira semana desde a liberação podem ser visualizados neste <a href='https://docs.google.com/document/d/1pcnZdMkEmGXgLMS8izvqd_JEcgjuFgUnfqCRO32q2go/edit?usp=sharing'>Documento no Google</a>.",
    },
    "index-license":{
        "en":"<br/><br/>8values is licensed under the MIT License, which permits \"without restriction\" the rights to \"use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software\". LeftValues is thus able to legally modify the original 8values without infringing on any copyright. LeftValues also utilizes the same license.",
        "pt": "<br/><br/>O 8values é licenciado sob a Licença MIT, que permite \"sem restrição\" os direitos de \"usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e / ou vender\" cópias do software \". O LeftValues pode modificar legalmente os 8 valores originais sem violar nenhum direito autoral. O LeftValues também utiliza a mesma licença."
    }
}

langElements.forEach((element) =>  {
    let value = element.getAttribute("data-i18n")
    if (value in i18n && userLang in i18n[value]) {
        element.innerHTML = i18n[value][userLang]
    }
})

let langPicker = document.getElementById("langPicker")
languages.forEach(language => {
    let option = document.createElement("option");
    option.text = language.name
    option.value = language.code
    langPicker.add(option);
})
if (langPicker) {
    for (let option of langPicker.options) {
        if(option.value == userLang) {
            langPicker.value = userLang
        }
    }

    langPicker.onchange = function() {
        let language = langPicker.options[langPicker.selectedIndex].value
        setCookie("lang", language, 5)
        location.reload()
    }
}
