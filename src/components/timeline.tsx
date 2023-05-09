import { TimelineItem } from "./timeline-item"

export default function Timeline() {
  return (
    <>
      <ol className="list-none p-0">
        <TimelineItem
          title="Nauka HTMLa i PHP"
          date="2001"
          content={
            <>
              <p>
                Regularnie czytając magazyn CD-Action natrafiłem w nim na
                rubrykę wprowadzającą do języków HTML i PHP.
              </p>
              <p>
                W domu nie miałem internetu, więc pierwsze strony internetowe
                uczyłem się tworzyć wyłącznie lokalnie, przepisując kod z
                czasopisma.
              </p>
              <p>
                Edytorem kodu był zwykły notatnik, który nie ułatwiał nauki,
                podobnie jak najpopularniejsza wtedy przeglądarka - Internet
                Explorer 5.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Roznoszenie gazetek reklamowych"
          date="2002"
          content={
            <>
              <p>
                Moim pierwszym zarobkowym doświadczeniem było roznoszenie
                gazetek reklamowych.
              </p>
              <p>
                Otrzymywałem paczki gazetek reklamowych z wielobranżowych
                sklepów sieciowych, które następnie pakowałem w jednorazowe
                torebki foliowe i rozwieszałem na klamkach drzwi w blokach i na
                furtkach domów jednorodzinnych.
              </p>
              <p>
                Chodziłem wtedy do gimnazjum i zarabiane w ten sposób pieniądze
                były fajnym kieszonkowym.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Administrowanie siecią LAN"
          date="2002"
          content={
            <>
              <p>
                Z kilkoma kolegami z bloku założyliśmy lokalną sieć komputerową.
              </p>
              <p>
                Wziąłem na siebie konfigurację i obsługę routera, administrując
                tym samym siecią, do której wszyscy byli podłączeni.
              </p>
              <p>
                Rozpoczęła się wtedy też moja przygoda z bezpieczeństwem i
                &quot;hakowaniem&quot;.
              </p>
              <p>
                Pod przykrywką problemów z działaniem sieci u jednego z kolegów
                (wypinając wcześniej jego kabel z routera), odwiedziłem go i w
                ramach diagnozowania problemu, uaktywniłem zdalny dostęp w jego
                systemie.
              </p>
              <p>
                Musiałem też uważać na przesyłane przez innych pliki, bo bardzo
                często były to trojany.
              </p>
              <p>
                Korzystnie z komunikatora LANChat nauczyło mnie też, że prywatne
                rozmowy nie są tak naprawdę prywatne, gdy komunikator wysyła
                wiadomości po sieci w formie nieszyfrowanej.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Prowadzenie pierwszej strony internetowej"
          date="2003"
          content={
            <>
              <p>
                Moja pierwsza strona internetowa była poświęcona ówczesnemu
                hobby tj. jazdy na skateboardzie oraz fingerboardzie
                (miniaturowej odmianie).
              </p>
              <p>
                Na stronie umieściłem instrukcje stworzenia własnej, autorskiej
                wersji fingerboarda oraz opisałem sposoby wykonywania tricków,
                dołączając samodzielnie wykonane animacje 3D.
              </p>
              <p>
                Programu do grafiki 3D (Caligari trueSpace) nauczyłem się
                podobnie jak HTMLa i PHP - dzięki magazynowi CD-Action.
              </p>
              <p>
                Do opublikowania strony internetowej skorzystałem z darmowego
                hostingu oferowanego przez Wirtualną Polskę - Webparku.
              </p>
              <p>
                Przestrzeń dyskowa była &quot;zawrotna&quot; i wynosiła
                kilkanaście MB.
              </p>
              <p>
                Od strony technicznej był to klasyk czyli HTML/CSS, JavaScript
                oraz PHP.
              </p>
              <p>
                Strona zawierała dynamiczne elementy jak zegar wskazujący
                aktualną godzinę, czy możliwość wpisywania się do księgi gości.
                Istniała również możliwość wypełnienia ankiety, którą zbierałem
                &quot;feedback&quot; od użytkowników.
              </p>
              <p>
                Graficzny styl projekt nazwałbym teraz &quot;dark mode&quot;.
                Było to jednak na długo przed tym zanim termin ten stał się
                modny.
              </p>
              <p>
                Z perspektywy czasu widzę, że od zawsze siedziała we mnie chęć
                dzielenia się wiedzą, a internet okazał się być idealnym medium.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Nauka w Steinmetz High School w Chicago"
          date="2003"
          content={
            <>
              <p>
                Po ukończeniu Gimnazjum w Polsce kolejny etap nauki rozpocząłem
                w Chicago w USA.
              </p>
              <p>
                Wejście do szkoły przypominało odprawę na lotnisku. Każdy plecak
                był skanowany na taśmie przechodzącej przez maszynę
                rentgenowską, a każdy uczeń przechodził przez bramkę wykrywającą
                metal.
              </p>
              <p>
                Nauka przedmiotów była dużym wyzwaniem. Biologia, matematyka,
                geografia, itd., wszystkie nauczane były w języku angielskim,
                którym nie władałem wtedy zbyt biegle.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Praca na budowie w Chicago"
          date="2003"
          content={
            <>
              <p>Przez krótki okres próbowałem swoich sił na budowie.</p>
              <p>
                W pracy nauczyłem się określeń takich jak: two-by-four, czy
                two-by-six, które opisywały przekroje kantówek (drewnianych
                kanciastych desek), używanych do budowy większości amerykańskich
                domów.
              </p>
              <p>
                Przykładowo, two-by-four oznaczało kantówkę o przekroju 2 na 4
                cale.
              </p>
              <p>
                Tym samym nauczyłem się sprawnie posługiwać imperialnymi
                jednostkami miar, odmierzając odpowiednie długości desek, które
                następnie docinałem.
              </p>
              <p>
                Nauczyłem się też korzystać z nail gun&apos;a czyli pistoletu do
                wbijania gwoździ.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Praca w sklepie spożywczym w Chicago"
          date="2003"
          content={
            <>
              <p>
                Krojenie mięsa i serów na wagę, nakładanie sałatek klientom,
                sprzątanie po zakończonej zmianie. Tak mniej więcej wyglądała
                moja kolejna praca.
              </p>
              <p>
                Pewnego dnia jeden z współpracowników nie wyłączył krajalnicy po
                zakończeniu krojenia. Gdy chciałem jej użyć odkroiła mi kawałek
                palca.
              </p>
              <p>Zrezygnowałem wtedy z dalszej pracy w tamtym miejscu.</p>
            </>
          }
        />

        <TimelineItem
          title="4-krotne zwycięstwo zawodów szybkiego pisania na klawiaturze"
          date="2004 - 2008"
          content={
            <>
              <p>
                Po powrocie do Polski rozpocząłem naukę w technikum hotelarskim.
                Był to błąd. Z pewnością lepiej wykorzystałbym ten czas
                uczęszczając do technikum informatycznego.
              </p>
              <p>
                Oceny z większości przedmiotów miałem słabe i nie przykładałem
                się do nauki. Wyjątkiem była informatyka, z której na
                świadectwie końcowym miałem oceną celującą.
              </p>
              <p>
                Dodatkowo przez 4 lata nauki w technikum, co roku brałem udział
                w szkolnym konkursie szybkiego pisania na klawiaturze,
                konsekwentnie zajmując w nim 1 miejsce. Wygrywałem w ten sposób
                przydatny sprzęt komputerowy: bezprzewodową myszkę, kamerkę
                internetową, czy pendrive.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Ochrona imprez masowych"
          date="2006"
          content={
            <>
              <p>
                Ucząc się w technikum, dodatkowo dorabiałem w charakterze
                ochrony na imprezach masowych, głównie meczy piłkarskich.
              </p>
              <p>
                Nie było to zbyt rozwojowe zajęcie, ale w jakiś sposób wiązało
                się z uprawianiem sportów walki i spędzaniem czasu z kolegami, z
                którymi jednocześnie pracowałem.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Prowadzenie strony internetowej sekcji Shidōkan"
          date="2006"
          content={
            <>
              <p>
                Trenując{" "}
                <a
                  href="https://pl.wikipedia.org/wiki/Shid%C5%8Dkan"
                  target="_blank"
                  rel="noopener"
                >
                  Shidōkan
                </a>{" "}
                prowadziłem jednocześnie stronę internetową sekcji.
              </p>
              <p>
                Nie znałem wtedy jeszcze CMSów, więc treści aktualizowałem
                poprzez bezpośrednią edycję zmian w plikach.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Zdobycie srebrnego medalu na zawodach sztuk walki"
          date="2006"
          content={
            <>
              <p>
                Zająłem drugie miejsce zdobywając srebrny medal, ale niestety
                nie był to żaden powód do dumy.
              </p>
              <p>
                W mojej kategori wagowej, oprócz mnie, startował jeszcze tylko
                jeden zawodnik. Stoczyłem więc tylko jedną walkę... którą
                przegrałem, zajmując jednocześnie drugie miejsce.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Uzyskanie prawa jazdy kat. B"
          date="2008"
          content={
            <>
              <p>
                Nauka z instruktorem nauki jazdy szła mi gładko i byłem dobrze
                przygotowany do egzaminu.
              </p>
              <p>
                Jednak sam egzamin praktyczny, czyli sytuacja, w której byłem
                poddany ocenie w trakcie wykonywania zadań, paraliżował moje
                zdolności.
              </p>
              <p>
                Mimo to egzamin zdałem za pierwszym razem, chociaż już na
                pierwszym skrzyżowaniu, samochód zgasł mi dwukrotnie podczas
                próby ruszenia.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Nauka we Wrocławskiej Wyższej Szkole Informatyki Stosowanej"
          date="2008"
          content={
            <>
              <p>
                Po ukończeniu szkoły średniej i zdaniu matury wyjechałem do
                Wrocławia.
              </p>
              <p>
                Rozpocząłem studia na kierunku &quot;Grafika komputerowa&quot;.
              </p>
              <p>
                Jednak dość szybko, bo po 1 semestrze, zrezygnowałem z dalszego
                studiowania. Nie widziałem wartości w zdobywaniu wiedzy tą
                drogą.
              </p>
              <p>
                Znacznie efektywniej uczyłem się na własną rękę, korzystając z
                kursów, książek, czy internetowych tutoriali.
              </p>
              <p>
                Rozwijałem swoje umiejętności z zakresu grafiki komputerowej i
                tworzenia stron internetowych, podążając za stale rosnącą
                ciekawością w tych dziedzinach.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Praca w sklepie Media Markt we Wrocławiu"
          date="2008"
          content={
            <>
              <p>
                Jako doradca na dziale komputerowym, pomagałem klientom wybierać
                sprzęt oraz diagnozowałem usterki reklamacyjne.
              </p>
              <p>W międzyczasie skupiałem się na rozwoju osobistym.</p>
              <p>Interesowało mnie np. szybkie czytanie oraz mnemotechniki.</p>
              <p>
                Za pomocą obrazkowych historyjek zapamiętywałem numery produktów
                z cenówek, aby sprawdzić na prośbę klienta, czy na magazynie są
                dostępne dodatkowe sztuki danego produktu.
              </p>
              <p>
                Przykładowo, 12345 to dla mnie zapalona <em>świeczka</em> (1) ze
                ściekającym po głowie <em>łabędzia</em> (2) woskiem, który jest
                wytatuowany na <em>piersiach</em> (3) dziewczyny, która opala
                się na <em>żaglówce</em> (4) i której wbił się <em>haczyk</em>{" "}
                (5) z wędki zarzuconej przez zapatrzonego w nią rybaka.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Prowadzenie serwisu sprzątającego"
          date="2009"
          content={
            <>
              <p>Rozpocząłem działalność świadczącą usługi sprzątające.</p>
              <p>Zaprojektowałem i zrealizowałem cały biznes od A do Z.</p>
              <p>
                Osobiste przeprowadzanie rozmów rekrutacyjnych były jednymi z
                trudniejszych wyzwań pod kątem &quot;wyjścia ze strefy
                komfortu&quot;.
              </p>
              <p>
                Stworzyłem informacyjną stronę internetową, zaprojektowałem
                ulotki, które później samodzielnie roznosiłem po domach.
              </p>
              <p>
                Zleciłem nagranie i wyemitowanie reklamy w lokalnej stacji
                radiowej.
              </p>
              <p>
                Finalnie udało mi się pozyskać tylko dwóch klientów i po paru
                miesiącach zakończyłem działanie firmy.
              </p>
              <p>
                Nie miałem pojęcia o tej branży i nie czułem chęci jej dalszego
                zgłębiania.
              </p>
              <p>
                Dostrzegłem jednak, że z dużym zaangażowaniem tworzyłem grafiki,
                materiały reklamowe, oraz stronę internetową.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Świadczenie usług związanych ze sprzedażą w serwisie Allegro"
          date="2009"
          content={
            <>
              <p>
                W tamtym czasie Allegro umożliwiało umieszczanie kodu HTML na
                aukcjach. Zacząłem więc tworzyć i sprzedawać szablony aukcji
                Allegro.
              </p>
              <p>
                Były to indywidualne projekty, ale też i masowe odpowiedniki w
                postaci gotowych szablonów, które klienci mogli wybierać z
                mojego katalogu.
              </p>
              <p>
                Dodatkowo stworzyłem w PHP generator szablonów, do którego
                dostęp sprzedawałem w modelu{" "}
                <a
                  href="https://pl.wikipedia.org/wiki/Oprogramowanie_jako_us%C5%82uga"
                  target="_blank"
                  rel="noopener"
                >
                  SaaS
                </a>
                .
              </p>
              <p>
                Poznając SOAP WebAPI, które udostępniało Allegro, oferowałem
                również usługę automatycznej obsługi posprzedażowej,
                konfigurację akcji typu wysyłka wiadomości po zaksięgowaniu
                płatności np. po zakupie kodu doładowania telefonu.
              </p>
              <p>
                Finalnie sprzedałem serwis razem ze stworzonym oprogramowaniem.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Day trading w firmie Wucash Capital"
          date="2009"
          content={
            <>
              <p>
                Kolega zachęcił mnie do zatrudnienia się w firmie, w której
                pracował, jako day trader, czyli makler wykonujący operacje
                kupna/sprzedaży akcji giełdowych w ciągu jednego dnia
                (krótkoterminowe spekulacje).
              </p>
              <p>
                Zacząłem więc handlować akcjami na amerykańskich giełdach (NYSE
                i NASDAQ) z użyciem oprogramowania Sterling.
              </p>
              <p>
                Mimo dobrych efektów osiąganych przez kilka miesięcy pracy
                (generowania prowizji od zysków, za które mogłem się utrzymać),
                finalnie zakończyłem przygodę z day tradingiem z chwilą
                likwidacji fili firmy w Kielcach, gdzie wtedy mieszkałem.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Prowadzenie punktu sprzedaży choinek"
          date="2009"
          content={
            <>
              <p>Zaangażowałem się w prowadzenie punktu sprzedaży choinek.</p>
              <p>
                Punkt działał na zasadzie franczyzy. Moim zadaniem było
                przyjmowanie towaru, rozładowanie go, rozstawienie na placu i
                sprzedaż.
              </p>
              <p>
                Odpowiadałem finansowo za przyjęty towar, więc zdecydowałem się
                zatrudnić kogoś do pilnowania placu w nocy korzystając z
                przyczepy campingowej.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Zwycięstwo w konkursie bankowym"
          date="2010"
          content={
            <>
              <p>
                Bank, w którym miałem konto (Dominet) został przejęty przez inny
                (Fortis/BNP Paribas).
              </p>
              <p>
                Z tej okazji ogłoszony został konkurs, w którym należało w
                artystyczny sposób przedstawić ową fuzję.
              </p>
              <p>
                Zdecydowałem się napisać wiersz... który na tyle spodobał się
                jury, że zostałem laureatem konkursu wygrywając wycieczkę do
                Paryża.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Asystent projektanta wnętrz w Manhattan Design"
          date="2010 - 2011"
          content={
            <>
              <p>
                Przez wcześniejsze lata rozwijałem swoje umiejętności tworzenia
                grafiki komputerowej również za pomocą programów do grafiki 3D.
              </p>
              <p>
                Potrafiłem tworzyć wizualizacje na bazie rysunków technicznych
                mieszkań, domów, czy pojazdów.
              </p>
              <p>Zdecydowałem się poszukać pracy w branży projektów wnętrz.</p>
              <p>
                Nie miałem żadnego wykształcenia w tym kierunku. Posiadałem
                jedynie umiejętności zdobywane wcześniej na własną rękę w wolnym
                czasie.
              </p>
              <p>
                Osobiste rozniesienie CV z adresem strony internetowej, na
                której zamieściłem portfolio moich trójwymiarowych wizualizacji
                przyniosło rezultat i zostałem zatrudniony w jednej z Kieleckich
                firm.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Szkolenie w fabryce Jung w Dortmundzie"
          date="2010"
          content={
            <>
              <p>
                Firma projektująca wnętrza, w której pracowałem, nawiązywała
                współpracę z producentem związanym w instalacjami elektrycznymi.
              </p>
              <p>
                Wziąłem udział w szkoleniu w fabryce w Niemczech{" "}
                <a
                  href="https://www.jung.de/pl/"
                  target="_blank"
                  rel="noopener"
                >
                  Jung
                </a>{" "}
                , przybliżające zastosowania oraz proces produkcji produktów
                związanych z elektryką.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Uzyskanie prawa jazdy kat. A"
          date="2010"
          content={
            <>
              <p>
                Zafascynowany motocyklami zdobyłem upragnione prawo jazdy kat.
                A.
              </p>
              <p>
                Kupując motocykl spełniłem jedno ze swoich dziecięcych marzeń.
              </p>
              {/* <p>https://www.youtube.com/watch?v=VIpVnYNpINI</p> */}
            </>
          }
        />

        <TimelineItem
          title="Uczestnictwo w seminarium MMA"
          date="2010"
          content={
            <>
              <p>
                Aktywnie trenując i szukając możliwości rozwoju wziąłem udział w
                praktycznym seminarium prowadzonym przez znanego polskiego
                zawodnika MMA, startującego w UFC i KSW,{" "}
                <a
                  href="https://pl.wikipedia.org/wiki/Tomasz_Drwal"
                  target="_blank"
                  rel="noopener"
                >
                  Tomasza Drwala
                </a>
                .
              </p>
            </>
          }
        />

        <TimelineItem
          title="Świadczenie usług freelancerskich"
          date="2012 - 2013"
          content={
            <>
              <p>
                Realizowałem wizualizacje 3D, współpracując m.in. z{" "}
                <a
                  href="https://www.maxipizza.pl/"
                  target="_blank"
                  rel="noopener"
                >
                  MaxiPizza
                </a>
                .
              </p>
              <p>
                Wykonywałem trójwymiarowe modele techniczne sieci trakcyjnej PKP
                dla{" "}
                <a
                  href="https://www.strunobet.pl/"
                  target="_blank"
                  rel="noopener"
                >
                  Strunobet
                </a>
                .
              </p>
              {/* AutoCad files' preview: https://viewer.autodesk.com/designviews */}

              <p>
                Współpracowałem z agencją reklamową, realizując strony
                internetowe.
              </p>
              <p>
                Tworzyłem szablony WordPress m.in. dla{" "}
                <a href="https://mrvintage.pl/" target="_blank" rel="noopener">
                  Mr. Vintage
                </a>
              </p>
              <p>
                Finalnie całkowicie postawiłem na web development, rezygnując z
                dalszego rozwijania swoich umiejętności w dziedzinie grafiki 3D.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Prowadzenie serwisu z kursami wideo Kuvi.pl"
          date="2013 - 2019"
          content={
            <>
              <p>
                Realizując strony www postanowiłem zacząć uczyć innych tego
                fachu.
              </p>
              <p>
                Początkowo dostęp do kursów wideo udzielałem w lekko
                zmodyfikowanej wersji CMS&apos;u Joomla.
              </p>
              <p>
                Z czasem zdecydowałem się na stworzenie własnego rozwiązania,
                platformy z kursami, którą uruchomiłem pod marką Kuvi (skrót od
                kursy video).
              </p>
              <p>
                Zainspirowany zagranicznym serwisem Udemy, również w swoim
                serwisie udostępniłem możliwość sprzedaży kursów innym autorom.
              </p>
              <p>Ostatecznie sprzedałem serwis.</p>
            </>
          }
        />

        <TimelineItem
          title="Odbycie szkolenia spadochronowego"
          date="2013"
          content={
            <>
              <p>
                Otrzymałem świadectwo kwalifikacji skoczka spadochronowego,
                uprawniającego do wykonywania samodzielnych skoków.
              </p>
              <p>
                Na egzaminie praktycznym miałem jednak spore problemy i egzamin
                zaliczyłem dopiero przy drugim podejściu.
              </p>
              <p>
                Podobnie jak podczas egzaminu na prawo jazdy, sparaliżował mnie
                stres.
              </p>
              <p>
                W powietrzu ważne jest rozluźnienie i swobodnie spadająca
                sylwetka.
              </p>
              <p>
                Świadomość robienia czegoś na ocenę niestety wpływała na moją
                zdolność wykonywania egzaminacyjnych zadań w powietrzu.
              </p>
              <p>
                Do tej pory łącznie wykonałem ponad 110 samodzielnych skoków.
              </p>

              {/* <p>Kompilacja: https://www.youtube.com/watch?v=CySvBP03ZSY</p>
              <p>Tracking grip: https://www.youtube.com/watch?v=ym_ilwvB-fo</p>
              <p>
                Wideo z egzaminu: https://www.youtube.com/watch?v=SBlcAD_rPcA
              </p> */}
            </>
          }
        />

        <TimelineItem
          title="Poprowadzenie lekcji informatyki w technikum"
          date="2013"
          content={
            <>
              <p>
                Materiały edukacyjne, które tworzyłem, okazały się być pomocne
                również w szkołach.
              </p>
              <p>
                Jeden z nauczycieli informatyki, który polecał moje materiały
                swoim uczniom, dodatkowo zaprosił mnie do poprowadzenia lekcji w
                technikum informatycznym.
              </p>
              {/* <p>https://www.youtube.com/watch?v=qzMPrVJL0_Q</p> */}
            </>
          }
        />

        <TimelineItem
          title="Prelegent na EduCamp w Kielcach"
          date="2014"
          content={
            <>
              <p>
                Wystąpiłem jako jeden z prelegentów na wydarzeniu organizowanym
                pod nazwą EduCamp.
              </p>
              {/* <p>https://www.youtube.com/watch?v=7rjlBEE_VoU</p> */}
            </>
          }
        />

        {/* <TimelineItem
          title="Zrealizowanie szkolenia wideo z Dubaju"
          date="2014"
          content={<></>}
        /> */}

        <TimelineItem
          title="Prelegent na TechKlub Kielce"
          date="2015"
          content={
            <>
              <p>
                Przybliżyłem uczestnikom moje podejście do blogowania i
                prowadzenia biznesu w oparciu o świadczenie usług edukacyjnych.
              </p>
              {/* <p>https://www.youtube.com/watch?v=zCbevj2w_hE</p> */}
            </>
          }
        />

        <TimelineItem
          title="Przeprowadzka do Azji"
          date="2015"
          content={
            <>
              <p>
                Korzystając z możliwości 100% pracy zdalnej jako twórca kursów
                wideo, zdecydowałem się na przeprowadzkę do Azji.
              </p>
              <p>
                Pierwszy miesiąc spędziłem na Filipinach, zatrzymując się u
                Polaków prowadzących projekt{" "}
                <a
                  href="https://www.youtube.com/ucieczkadorajuvlog"
                  target="_blank"
                  rel="noopener"
                >
                  Ucieczka Do Raju
                </a>
                .
              </p>
              <p>
                Ciągnęło mnie jednak bardziej do życia w dużym mieście niż na
                małej rajskiej wyspie, więc po miesiącu przeniosłem się do Kuala
                Lumpur w Malezji.
              </p>
              <p>
                Wynająłem tam mieszkanie w apartamentowcu z basenem i urządziłem
                sobie w nim biuro do pracy.
              </p>
              <p>
                Wiza turystyczna umożliwiała 3 miesięczny pobyt od wlotu do
                Malezji, więc chcąc nie chcąc odwiedzałem okoliczne kraje -
                Tajlandię i Singapur, aby przedłużać wizę na kolejne kwartały.
              </p>
              <p>
                Finalnie w Azji przemieszkałem prawie rok czasu, doświadczając
                plusów i minusów pracy zdalnej, zanim stała się ona wszechobecna
                w IT.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Udział w Startup Weekend Kielce #2"
          date="2016"
          content={
            <>
              <p>
                Wziąłem udział w 3 dniowym wydarzeniu jako deweloper, dołączając
                do zespołu realizującego pomysł na biznes w formie hackathonu.
              </p>
              {/* <p>https://www.youtube.com/watch?v=5nxjtRbSlEk</p> */}
            </>
          }
        />

        <TimelineItem
          title="Prelegent Studenckiego Forum Business Center Club w Poznaniu"
          date="2016"
          content={
            <>
              <p>
                Wystąpiłem jako prelegent dzieląc się swoim doświadczeniem z
                prowadzenia biznesu opartego o tworzenie kursów wideo.
              </p>
              {/* <p>https://www.youtube.com/watch?v=qTTD1OkGRIA</p> */}
            </>
          }
        />

        <TimelineItem
          title="Uczestnictwo w kongresie Brian'a Tracy w Krakowie"
          date="2017"
          content={
            <>
              <p>
                Chcąc rozwijać swoje biznesowe umiejętności wziąłem udział w
                kongresie jednego ze świetnych amerykańskich trenerów sprzedaży
                - Brian&apos;a Tracy.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Prelegent na Meet.js w Kielcach"
          date="2019"
          content={
            <>
              <p>
                Wystąpiłem na spotkaniu społeczności zrzeszonej wokół
                JavaScript&apos;u, zestawiając dwa narzędzia do wykonywania
                zapytań HTTP - Fetch i Axios.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Praca w firmie Atlassian w Gdańsku"
          date="2019 - 2021"
          content={
            <>
              <p>
                Szukając wyzwań i rozwoju w branży IT znalazłem pracę w firmie{" "}
                <a
                  href="https://www.atlassian.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Atlassian
                </a>
                .
              </p>
              <p>
                Zostałem zatrudniony na stanowisku Software Engineer z
                frontendową specjalizacją, gdzie przepracowałem 2 lata,
                przeprowadzając się jednocześnie do Gdańska.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Udział w warsztatach wystąpień publicznych"
          date="2019"
          content={
            <>
              <p>
                Chcąc rozwijać swoje umiejętności wystąpień publicznych, wziąłem
                udział w praktycznych warsztatach.
              </p>
              {/* <p>https://www.youtube.com/watch?v=uYi14rRXNIY</p> */}
            </>
          }
        />

        <TimelineItem
          title='Szkolenie "Atakowanie i Ochrona Webaplikacji"'
          date="2019"
          content={
            <>
              <p>
                Rozwijając się w dziedzinie web developmentu, wziąłem udział w
                szkoleniu zorganizowanym przez serwis{" "}
                <a
                  href="https://niebezpiecznik.pl/"
                  target="_blank"
                  rel="noopener"
                >
                  Niebezpiecznik
                </a>
                .
              </p>
            </>
          }
        />

        {/* <TimelineItem
          title='Zwycięstwo wewnętrznego konkursu "Shipit" w firmie Atlassian'
          date="2019"
          content={<></>}
        /> */}

        <TimelineItem
          title="Odbycie szkolenia windsurfingu"
          date="2019"
          content={
            <>
              <p>
                Nauczyłem się pływać na desce windsurfingowej, poznając podstawy
                korzystania z żaglowego napędu.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Odznaczenie jako zasłużony honorowy dawca krwi III stopnia"
          date="2019"
          content={
            <>
              <p>
                Po kilku latach mniej lub bardziej regularnych donacji krwi,
                otrzymałem odznakę zasłużonego honorowego dawcy krwi III stopnia
                (oddałem ponad 6 litrów krwi).
              </p>
            </>
          }
        />

        <TimelineItem
          title="Uruchomienie serwisu Codisity"
          date="2021"
          content={
            <>
              <p>
                Postanowiłem ponownie spróbować sił w biznesie edukacyjnym,
                tworząc nową platformę szkoleniową{" "}
                <a href="https://codisity.pl" target="_blank" rel="noopener">
                  Codisity
                </a>{" "}
                (skrót od Coding University).
              </p>
              <p>
                Zaobserwowałem jednak problem, który nie dotykał mnie wcześniej.
              </p>
              <p>
                Ilość wiedzy i doświadczenia w dziedzinie web developmentu jaką
                zgromadziłem, była znacznie większa niż kiedyś, gdy pierwotnie
                zaczynałem przygodę z kursami tworzenia stron.
              </p>
              <p>
                Tym samym interesujące mnie tematy, w których chciałem się
                rozwijać, stawały się coraz bardziej specjalistyczne i mniej
                interesujące dla docelowej grupy odbiorców.
              </p>
              <p>
                Zacząłem więc myślec o powrocie do etatowej pracy, która
                umożliwiłaby mi dalszy rozwój umiejętności web developerskich.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Udział w Hot Hatch Cup na torze Silesia Ring w Poznaniu"
          date="2022"
          content={
            <>
              <p>
                Od dawna interesował mnie sim racing, ściganie się w grach typu
                symulacyjnego, czyli jak najwierniej odwzorowujących zachowanie
                się samochodów w świecie fizycznym.
              </p>
              <p>
                Gdy pojawiła się okazja sprawdzić jak sim racing faktycznie
                przekłada się na realną jazdę na torze, zdecydowałem się wziąć
                udział.
              </p>
              <p>
                Mój najlepszy czas okrążenia jaki wykonałem na torze Silesia
                Ring w Poznaniu to 1.57.930 w samochodzie Hyundaiu i30 N.
              </p>
              <p>
                Biorąc pod uwagę wcześniejsze zerowe doświadczenie w torowej
                jeździe, byłem bardzo zadowolony z tego wyniku.
              </p>
            </>
          }
        />

        <TimelineItem
          title='Stworzenie cyklu "100 Bugów JavaScript"'
          date="2023"
          content={
            <>
              <p>
                Uruchomiłem projekt - darmowy kurs emailowy JavaScript w postaci
                100 lekcji wysyłanych codziennie z przykładem ukrytego błędu w
                kodzie JavaScript.
              </p>
              <p>
                Projekt{" "}
                <a
                  href="https://codisity.pl/100-bugow-js"
                  target="_blank"
                  rel="noopener"
                >
                  100 Bugów JavaScript
                </a>{" "}
                został bardzo dobrze odebrany przez uczestników i otrzymuję
                wiele pochlebnych opini na jego temat.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Opublikowanie otwartoźródłowego oprogramowania OSEMS"
          date="2023"
          content={
            <>
              <p>
                Szukając optymalizacji kosztów wysyłki newsletterów stworzyłem
                autorskie narzędzie{" "}
                <a
                  href="https://github.com/adrianbienias/osems"
                  target="_blank"
                  rel="noopener"
                >
                  OSEMS
                </a>{" "}
                do obsługi email marketingu i udostępniłem je na licencji MIT w
                formie otwartoźródłowego kodu.
              </p>
            </>
          }
        />

        <TimelineItem
          title="Powrót na etatową ścieżkę kariery"
          date="2023"
          content={
            <>
              <p>
                Zdecydowałem się wrócić na ścieżkę etatowej kariery web
                developera.
              </p>
              <p>
                Rozwiązywanie realnych problemów związanych z tworzeniem
                oprogramowania, współpracując z programistami, od których mogę
                się uczyć, wydaje się być najlepszą drogą dalszego rozwoju
                umiejętności.
              </p>
              <p>
                <a
                  href="https://bienias.dev/cv-adrian-bienias.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  Sprawdź moje CV
                </a>
                .
              </p>
            </>
          }
        />
      </ol>
    </>
  )
}