function showSkillDetails(skill) {
    const skills = {
        html: {
            title: "Maîtrise de l'Art Ancien - HTML",
            description: "Le savoir ancien permettant de créer des structures solides et durables pour tout ce qui touche aux mondes numériques. " +
                         "En tant que pratiquant de l’art ancien, tu manies les symboles et les balises comme un érudit des runes, chaque ligne de code gravée avec soin. " +
                         "Les aventuriers ignorent souvent la complexité des éléments cachés sous la surface, mais pour toi, chaque balise est une brique essentielle. " +
                         "Les anciens sages ont transmis cette maîtrise de génération en génération, comme les fondations d’un temple. " +
                         "HTML est le squelette, les os de toute création numérique, porteur de la structure et de l’ordre. " +
                         "Avec ce savoir, tu crées des structures durables et solides, qui supportent les poids du temps et de l'évolution des technologies. "
          },
          
          css: {
            title: "Magie du Tissu - CSS",
            description: "La magie qui permet de façonner l’apparence du monde, de l’armure à l’architecture d’un site, en utilisant des envoûtements visuels. " +
                         "Tels les enchantements tissés dans des étoffes mystiques, CSS est l’art de sculpter l’apparence avec précision. " +
                         "Les couleurs, les formes, et les textures ne sont que les premiers effets de ta magie. " +
                         "Tu connais les secrets pour manipuler la profondeur des ombres, les reflets scintillants, et les bordures douces. " +
                         "Dans ton grimoire de styles, chaque ligne de code est une mèche de pouvoir, prête à se déployer. " +
                         "Cette magie subtile transforme le simple en sublime, le banal en enchanteur, pour émerveiller les âmes. "
          },
          
          tailwind: {
            title: "Harmonisation des Flux - Tailwind",
            description: "Un sort de style rapide et flexible, permettant de manipuler les flux d'énergie pour améliorer l'apparence sans grande incantation. " +
                         "Comme un archer ajustant sa flèche en plein vol, Tailwind offre rapidité et souplesse dans la création. " +
                         "Les éléments se plient et se modèlent à ta volonté, transformés par de simples mots de pouvoir. " +
                         "Ce style de combat léger réduit le poids de l'armure visuelle, offrant des résultats remarquables sans lourdeur. " +
                         "Dans tes mains, Tailwind devient un vent de créativité qui souffle sur les pages, façonnant leurs formes sans effort. " +
                         "Une magie efficace, qui t’accompagne dans chaque bataille contre la laideur et la rigidité."
          },
          
          scss: {
            title: "Transmutation des Styles - SCSS",
            description: "La capacité à combiner et à réorganiser les éléments visuels pour créer des œuvres parfaites, en offrant plus de souplesse et de puissance. " +
                         "SCSS est l’art de combiner l’ingéniosité des alchimistes avec la finesse des artisans. " +
                         "Les styles se fondent les uns dans les autres, se transformant en un tout harmonieux et adaptable. " +
                         "Chaque fragment de code SCSS est comme une pièce d’orfèvrerie, assemblée avec une précision quasi-magique. " +
                         "Dans les sombres bibliothèques des sorciers du code, SCSS brille comme un joyau de connaissances avancées. " +
                         "Avec cette compétence, tu crées des créations visuelles d’une souplesse inégalée, dignes des plus grands artefacts."
          },
          
          javascript: {
            title: "Sorcelerie Dynamique - JavaScript",
            description: "La magie qui donne vie au monde numérique, permettant à l’interactivité de se manifester, en liant chaque élément entre eux. " +
                         "JavaScript est l’essence du mouvement, l’énergie invisible qui lie toutes choses et donne la vie aux créations. " +
                         "Comme un sorcier invoquant des créatures du vide, tu conjures des éléments qui réagissent et interagissent. " +
                         "Les clics, les mouvements, les transitions, tout se connecte sous l’influence de tes incantations. " +
                         "Ce n’est pas seulement de la programmation, c’est un art ancien qui donne vie au statique et enchaîne les mondes numériques. " +
                         "Dans le royaume du code, tu es l’architecte de l’interaction, le maître des envoûtements dynamiques."
          },
          
          moderation: {
            title: "Veilleur des Règles - Modération",
            description: "L’art sacré de veiller à la bonne conduite et au respect des lois parmi les communautés, en maintenant l'ordre avec discernement. " +
                         "Dans les salles ombragées des conseils et les tavernes bruyantes, le Veilleur des Règles s’assure de l'équilibre et de la paix. " +
                         "D'une main ferme, il garde les esprits échauffés en respect et éteint les conflits naissants avant qu'ils ne dégénèrent. " +
                         "Les lois sont ses lames invisibles, qu’il manie avec précision pour protéger les plus vulnérables et rappeler les plus téméraires à l’ordre. " +
                         "Il sait que chaque mot, chaque regard a le pouvoir de ramener le calme, ou de déclencher une tempête. " +
                         "En portant cette responsabilité, il incarne la justice et le respect, un rempart contre le chaos."
          },
          
          mediation: {
            title: "Calme du Vent - Médiation",
            description: "La sagesse nécessaire pour apaiser les conflits, apportant harmonie et équilibre entre les factions en désaccord. " +
                         "Le médiateur est comme le vent dans les montagnes, apportant la paix là où le tumulte fait rage. " +
                         "Avec des paroles mesurées et un esprit tranquille, il guide les esprits tourmentés vers des solutions équilibrées. " +
                         "Chaque négociation est une danse subtile où il sait quand avancer et quand se retirer pour éviter l’escalade. " +
                         "Tel un maître du zen, il sait que le vrai pouvoir réside dans la patience et l’écoute attentive. " +
                         "Apaiser les tensions est son art, et chaque conflit qu’il résout apporte un peu plus de paix dans le royaume numérique."
          },
          
          digital_advisor: {
            title: "Conseiller du Savoir Numérique",
            description: "Un sage dans les arts numériques, apportant des conseils pour une navigation sûre et fructueuse dans les royaumes numériques. >" +
                         "Tel un vieux sage au bord de la route, il éclaire les voyageurs perdus dans les dédales technologiques. " +
                         "Avec des connaissances profondes et une patience infinie, il les guide à travers les dangers et les opportunités. " +
                         "Les secrets des navigateurs, des réseaux et des systèmes lui sont connus, et il partage ce savoir sans hésitation. " +
                         "Chaque conseil est un phare, chaque mot une boussole qui mène à un port sûr. " +
                         "Dans un monde complexe, il est la lanterne qui éclaire les chemins ténébreux du numérique."
          },
          
          pc_building: {
            title: "Forgeron des Machines - Montage de PC",
            description: "La capacité à assembler et à forger des machines puissantes, créant des artefacts technologiques à partir de composants. " +
                         "Comme un forgeron au cœur de la forge, il sélectionne avec soin chaque composant, chaque rouage de la machine. " +
                         "Les cartes mères, processeurs et alimentations sont ses marteaux et enclumes, forgeant une création puissante. " +
                         "La machine prend forme entre ses mains, chaque connexion soudée avec une précision rituelle. " +
                         "Un PC monté par lui est une œuvre d’art, un artefact qui porte la marque de son créateur. " +
                         "Il connaît les secrets de la compatibilité, de l’optimisation, et les met en œuvre pour créer des machines sans faille."
          },
          
          paint: {
            title: "Artiste des Lignes - Paint",
            description: "Un artiste dans l'âme, sachant manier le pinceau pour créer des œuvres numériques avec des formes simples mais efficaces. " +
                         "Avec les outils les plus simples, il donne vie à des créations qui captivent le regard. " +
                         "Les lignes, les courbes, les couleurs s’unissent sous son pinceau numérique pour former des images évocatrices. " +
                         "Il connaît l’art de transmettre des émotions par des moyens modestes, transformant chaque pixel en expression. " +
                         "Son œil est affûté, capable de transformer le banal en magnifique avec des moyens minimalistes. " +
                         "Chaque création est une fenêtre sur l'imagination, un tableau qui parle sans mots, touchant le cœur de ceux qui regardent."
          },
          
          excel: {
            title: "Maître des Tableaux - Excel",
            description: "Le savoir-faire des anciens pour organiser et analyser les données avec précision, permettant de voir l’ordre dans le chaos des chiffres. " +
                         "Les colonnes et les rangées sont ses parchemins, les formules ses incantations. " +
                         "Il manie les données avec une précision chirurgicale, chaque cellule renfermant une information cruciale. " +
                         "Les chiffres prennent un sens sous son regard, révélant des motifs cachés et des schémas invisibles. " +
                         "Il voit l'ordre où d’autres ne voient que des chiffres, apportant de la clarté là où règne le désordre. " +
                         "Dans son grimoire numérique, chaque feuille est un univers en soi, un monde de données qui danse sous sa direction."
          }
    };

    document.getElementById("skill-title").innerText = skills[skill].title;
    document.getElementById("skill-description").innerText = skills[skill].description;
  }