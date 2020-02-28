# <a>ICDD</a> Part 1 en NTA8035

Gebruikers van COINS 2.0 hebben aangegeven te willen overstappen op <a>ICDD</a> part 1 in combinatie met de NTA 8035. Daarmee kunnen partijen kaartgegevens, data en documenten aan elkaar koppelen en als samenhangende informatie uitwisselen. <a>ICDD</a> is de Internationale opvolger van COINS 2.0. De NTA 8085 geeft regels voor ontologiën. Voor de praktische uitwerking van deze combinatie is een technische werksessie gepland met experts uit de expertgroepen van CB-NL en COINS.


Bij het gedetailleerd doornemen van de <a>ICDD</a> Part 1 specificatie komen er een aantal zaken naar boven die een nadere toelichting behoeven in relatie tot de NTA8035. In dit hoofdstuk (en de issues) proberen we deze onderwerpen te behandelen en tot een gezamenlijke aanpak te komen.

## Open World vs Closed World

In de <a>ICDD</a> specificatie wordt uitgegaan van een <a>Closed world assumption (CWA)</a> en <a>Unique Name Assumption (UNA)</a>. <a>OWL</a> is strict genomen <a>Open world assumption (OWA)</a>. Inmiddels bestaat de <a>SHACL</a> standaard om met CWA in Linked Data om te gaan, deze standaard wordt in <a>ICDD</a> context echter nog niet gebruikt. In de NTA8035 wordt het onderscheid wel gemaakt. Waarbij <a>OWL</a> gebruikt wordt in relatie tot OWA en <a>SHACL</a> gebruikt wordt om met CWA om te gaan. In relatie tot <a>ICDD</a> wordt vanuit de NTA8035 aanbevolen om altijd de taalbinding gebaseerd op <a>SHACL</a> toe te passen, omdat het hier gaat om gegevens uitwisseling waarbij de validatie van de gegevens een belangrijke rol speelt.

## Serialisatie (rdf/xml vs turtle)

In de <a>ICDD</a> specificatie wordt de rdf/xml serialisatie voorgeschreven voor de ontologie files die in de container worden opgenomen.
In de NTA8035 wordt de turtle serialisatie gebruikt voor de voorbeelden en als publicatie formaat voor het basicsemantics model. Hier wordt onder andere voor gekozen vanwege de leesbaarheid. Het is niet wenselijk om in een <a>ICDD</a> container met verschillende serialisatie formaten te werken, aangezien dit de software ondersteuning ingewikkelder maakt. We bevelen dus aan om in de <a>ICDD</a> context met rdf/xml serialisatie te werken.

## <a>ICDD</a> en andere ontologieen zoals TMLO

## Hashing van encrypted documenten

## Mate van Deeplinken
