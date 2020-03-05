# <a>ICDD</a> Part 1 en NTA8035

Gebruikers van COINS 2.0 hebben aangegeven te willen overstappen op <a>ICDD</a> part 1 in combinatie met de NTA 8035. Daarmee kunnen partijen kaartgegevens, data en documenten aan elkaar koppelen en als samenhangende informatie uitwisselen. <a>ICDD</a> is de Internationale opvolger van het container gedeelte van COINS 2.0. De NTA 8085 geeft regels voor ontologiën en de daarbij behorende datasets, en daarmee geeft het opvolging aan het topmodel uit COINS 2.0.


Bij het gedetailleerd doornemen van de <a>ICDD</a> Part 1 specificatie komen er een aantal zaken naar boven die een nadere toelichting behoeven in relatie tot de NTA8035. In dit hoofdstuk (en de issues) proberen we deze onderwerpen te behandelen en tot een gezamenlijke aanpak te komen.

## Open World vs Closed World

In de <a>ICDD</a> specificatie wordt uitgegaan van een <a>Closed world assumption (CWA)</a> en <a>Unique Name Assumption (UNA)</a>. <a>OWL</a> is strict genomen <a>Open world assumption (OWA)</a>. Inmiddels bestaat de <a>SHACL</a> standaard om met CWA in Linked Data om te gaan, deze standaard wordt in <a>ICDD</a> context echter nog niet gebruikt. In de NTA8035 wordt het onderscheid wel gemaakt met verschillende taalbindingen. Waarbij <a>RDFS</a>/<a>OWL</a> gebruikt wordt in relatie tot OWA en <a>RDFS</a>/<a>OWL</a>/<a>SHACL</a> gebruikt wordt om met CWA om te gaan. In relatie tot <a>ICDD</a> wordt vanuit de NTA8035 aanbevolen om altijd de taalbinding gebaseerd op <a>SHACL</a> toe te passen, omdat het hier gaat om gegevens uitwisseling waarbij de verificatie en validatie van de gegevens een belangrijke rol speelt.

<div class="issue" data-number="2"></div>

## Serialisatie (rdf/xml vs turtle)

In de <a>ICDD</a> specificatie wordt de rdf/xml serialisatie voorgeschreven voor de container en linkset ontologie files die in de container worden opgenomen. (Er wordt niet specifiek iets gezegd over de serialisatie van payload document.)
In de NTA8035 wordt de turtle serialisatie gebruikt voor de voorbeelden en als publicatie formaat voor het basicsemantics model. Hier wordt onder andere voor gekozen vanwege de leesbaarheid. Het is niet wenselijk om in een <a>ICDD</a> container met verschillende serialisatie formaten te werken, aangezien dit de software ondersteuning ingewikkelder maakt. We bevelen dus aan om in de <a>ICDD</a> context met rdf/xml serialisatie te werken voor de container en linkset ontologie files.

## <a>ICDD</a> en andere ontologieen zoals TMLO

<div class="issue" data-number="5"></div>

## Hashing van encrypted documenten

In de <a>ICDD</a> specificatie wordt in algemene termen gesproken over de mogelijkheid om documenten te encrypten met een hashing algorithme. Het BIM Loket stelt voor om te standaardiseren op SHA256 als best practice.

## Mate van Deeplinken

<div class="issue" data-number="7"></div>