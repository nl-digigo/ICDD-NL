# ICDD Part 1 en NTA8035

Gebruikers van COINS 2.0 hebben aangegeven te willen overstappen op ICDD part 1 in combinatie met de NTA 8035. Daarmee kunnen partijen kaartgegevens, data en documenten aan elkaar koppelen en als samenhangende informatie uitwisselen. ICDD is de Internationale opvolger van COINS 2.0. De NTA 8085 geeft regels voor ontologiën. Voor de praktische uitwerking van deze combinatie is een technische werksessie gepland met experts uit de expertgroepen van CB-NL en COINS.


Bij het gedetailleerd doornemen van de ICDD Part 1 specificatie komen er een aantal zaken naar boven die een nadere toelichting behoeven in relatie tot de NTA8035. In dit hoofdstuk (en de issues) proberen we deze onderwerpen te behandelen en tot een gezamenlijke aanpak te komen.

## Open World vs Closed World

## Serialisatie (rdf/xml vs turtle)

In de ICDD specificatie wordt de rdf/xml serialisatie voorgeschreven voor de ontologie files die in de container worden opgenomen.
In de NTA8035 wordt de turtle serialisatie gebruikt voor de voorbeelden en als publicatie formaat voor het basicsemantics model. Hier wordt onder andere voor gekozen vanwege de leesbaarheid. Het is niet wenselijk om in een ICDD container met verschillende serialisatie formaten te werken, aangezien dit de software ondersteuning ingewikkelder maakt. We bevelen dus aan om in de ICDD context met rdf/xml serialisatie te werken.

## ICDD en andere ontologieen zoals TMLO

## Hashing van encrypted documenten

## Mate van Deeplinken
