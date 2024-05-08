# Individuell examination - Frontendramverk

Sofia Rosborg

Hooken useLocations: <br>
Hooken useLocations används bland annat till att returnera den aktuella platsen för ett objekt. Det kan vara användbart när man vill visa någon sidoeffekt när den aktuella platsen förändras. useLocations kan användas till att bestämma vilken länk i en navigering som ska ha en "aktiv" stil baserat på den aktuella URL:en. Jag använde helt enkelt den hooken för att kunna styla de olika alternativen i sidebaren beroende på vilken sida användaren är inne på.

Hooken useEffect: <br>
Hooken useEffect är en hook som används för att synkronisera komponenter med externa system och hantera sidoeffekter i funktionella komponenter i React. Sidoeffekter kan vara att till exempel prenumerera på data, interagera med DOM:en eller att utföra asynkrona operationer. useEffect används för att definiera funktioner som ska köras efter att renderingen har skett och för att hantera saker som att prenumerera på data eller reagera på användarinteraktioner och körs efter varje rendering, inklusive den första renderingen när komponenten monteras, samt efter varje uppdatering när komponentens tillstånd eller egenskaper ändras.
Ett av de vanligaste användningsområdena för useEffect är att hämta data från API:er (det vill säga utföra en asynkron operation), vilket är så jag använt den. useEffect gör alltså en HTTP-förfrågan och uppdaterar komponentens tillstånd (i det här fallet min projects-container) med den hämtade datan.

Biblioteket Material Design Icons: <br>
Jag använde även biblioteket Material Design Icons (https://pictogrammers.com/library/mdi/) för att använda ikoner till formuläret. Jag tycker att ikoner i ett formulär får det att se mer inbjudande och levande ut än om man bara använder sig av text.

Jag har gjort något man inte får med kommentarer i koden, vissa är skrivna ovanför koden och andra är skriva på samma rad MEN jag gjorde det valet för att jag tyckte det blev lättare att läsa på det sättet. Avslutas kommentaren med : betyder det att den avser raden under.
