import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import Background from "../components/Background";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";
import about4 from "../images/about4.jpg";
import about5 from "../images/about5.jpg";
import about6 from "../images/about6.jpg";
import { Button } from "../components/Button";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const StyledBackground = styled(Background)`
  padding: 0 20px;

  img.screen {
    width: 70%;
    display: block;
    margin: 0 auto;
    box-shadow: 0px 0px 50px -10px white;
    @media only screen and (min-width: 1024px) {
      width: 35%;
    }
  }
`;

const Description = styled.p`
  margin: 20px auto;
  color: white;
  width: 70%;
  letter-spacing: 0.7px;
  line-height: 1.5;
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const BoldDescription = styled(Description)`
  font-weight: bold;
`;
const DescriptionSmall = styled(Description)`
  font-size: 12px;
  text-align: center;
  a {
    color: white;
  }
`;

const ChapterTitle = styled.h3`
  color: #d4b726;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 24px;
  text-align: center;
  margin: 20px 0;
`;
const StyledButton = styled(Button)`
  margin: 0 auto;
`;

const Buttons = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 30px 0;
`;

const GoBackButton = styled(Button)`
  position: absolute;
  top: 60px;
  left: 40px;
  color: #d4b726;
  font-size: 28px;
  @media only screen and (min-width: 1024px) {
    top: 80px;
  }

  svg {
    pointer-events: none;
  }
  &::before,
  &::after {
    display: none;
  }
`;
const AboutTemplate = props => {
  const goToMenu = e => {
    e.preventDefault();

    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Rozegraj Turniej") {
      props.history.push("/newcup");
    } else {
      props.history.push("/");
    }
  };

  const goBack = () => {
    props.history.push("/");
  };
  return (
    <StyledBackground className="stats">
      <TopBar>
        <Title>O Aplikacji</Title>
      </TopBar>
      <GoBackButton onClick={goBack}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </GoBackButton>

      <ChapterTitle>1. Motywacja dla stworzenia aplikacji</ChapterTitle>
      <Description>
        Zapewne wiele razy z kolegą miałeś ten problem umawiając się na wspólne
        granie w <strong>Fifę</strong>.
      </Description>
      <BoldDescription>
        "LOSUJEMY DRUŻYNY. ŻEBY BYŁO SPRAWIEDLIWIE."
      </BoldDescription>
      <Description>
        Zawsze jednak z moim kolegą Dominikiem (
        <span role="img" aria-label="hand with fingers splayed">
          🖐
        </span>
        ), stawiani byliśmy przed jednym problemem...
        <br />
        <br />
        Chcieliśmy żeby zespoły były losowane tylko z{" "}
        <strong>określonej puli drużyn</strong>, na przykład tylko 4 najlepsze
        drużyny z topowych 5 lig europejskich. <br /> Wszyscy gracze Fify wiedzą
        jednak, że niestety losowanie w grze odbywa się jedynie w ramach{" "}
        <strong>jednej ligi</strong> i z góry oboje wiecie z jakiej ligi będą
        zespoły przez Was wylosowane. Dodatkowo los może sprawić że będzie to
        pojedynek między Barceloną a Espanyolem. <br />
        Mało w tym sprawiedliwości...
        <br />
        <br />
        Oczywiście istnieje w Fifie możliwość utworzenia turnieju i wprowadzenia
        tam swoich drużyn, jednak gdy spotykasz się z kolegą na piwko i chcesz
        szybko rozegrać parę partii, tworzenie turnieju jest{" "}
        <strong>zawsze</strong> zbyt żmudnym procesem, nie oszukujmy się....
        <br />
        <br /> Odpowiedzią na ten niewątlpiwy problem pierwszego Świata jest
        <strong> FIFA Draw</strong>.
      </Description>
      <ChapterTitle>2. Jak używać?</ChapterTitle>
      <Description>1. Wprowadź imiona graczy</Description>
      <img className="screen" src={about1} alt="Wybieranie imion uczestników" />
      <Description>
        2.Wybierz zespoły z których będą losowne drużyny dla Ciebie i Twojego
        przeciwnika.
      </Description>
      <img className="screen" src={about2} alt="Wybieranie drużyn" />
      <Description>
        3. Po dodaniu zespołów do koszyka, przechodzimy do losowania drużyn.
        Możesz losować po jednym zespole, lub wylosować wszystkie na raz.
      </Description>
      <img className="screen" src={about3} alt="Losowanie drużyn" />
      <Description>
        4. Po rozstrzygnięciu meczu (spotkanie nie może zakończyć się remisem,
        więc jeśli tak się stanie - rozegrajcie dogrywkę) - wprowadż rezultat.
        Wynik zostanie zapisany na tablicy.
      </Description>
      <img className="screen" src={about4} alt="Zapisywanie wyniku" />
      <Description>
        5. Turniej może zakończyć się na 2 sposoby:
        <br />
        - sami decydujecie, o zakończeniu turnieju (Przycisk: "Zakończ
        turniej"), <br />- dalsze rozgrywanie spotkań nie wpłynie na końcowy
        wynik (Przykład: 6 meczów wygranych przeze mnie, 3 przez Dominika, 2
        mecze do rozegrania - w takiej sytuacji Dominik nawet jeśli wygra
        wszystkie mecze nie ma szans na sukces w turnieju), aplikacja sama
        wykryje taką sytuację i zakończy turniej za nas.
      </Description>
      <img className="screen" src={about5} alt="Koniec turnieju" />
      <Description>
        6. Wszystkie turnieje są zapisywane w lokalnej pamięci przeglądarki.
      </Description>
      <img className="screen" src={about6} alt="Statystyki" />

      <Description>
        7. Teraz dzwoń do kolegi i zaczynajcie swój pierwszy totalnie bezstronny
        turniej w Fifę z pomocą <strong>FIFA Draw</strong>!
      </Description>
      <Buttons>
        <StyledButton onClick={goToMenu}>Powrót do Menu</StyledButton>
        lub
        <StyledButton onClick={goToMenu}>Rozegraj Turniej</StyledButton>
      </Buttons>
      <DescriptionSmall>
        © 2019 Design and Coded by <a href="https://codeverse.pl">Codeverse</a>.
        Wszystkie prawa zastrzeżone.
      </DescriptionSmall>
    </StyledBackground>
  );
};

export default withRouter(AboutTemplate);
