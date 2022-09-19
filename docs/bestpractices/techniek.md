# Technische uitwerking

## Areaaldata

Om areaaldata te kunnen uitwisselen moet een combinatie van standaarden worden toegepast:

1. Semantische informatie over objecten conform [=NEN 2660-2=]; 
2. Geometrische representaties van objecten in open GIS-formaten of IFC
3. Documenten die informatie over de objecten bevatten in een informatiecontainer conform [=ICDD part 1=].


Bij het gedetailleerd doornemen van de [=ICDD part 1=] specificatie komen er een aantal zaken naar boven die een nadere toelichting behoeven in relatie tot de NEN 2660-2. In dit hoofdstuk (en de issues) proberen we deze onderwerpen te behandelen en tot een gezamenlijke aanpak te komen voor de sector.

## Open World vs Closed World

In de [=ICDD part 1=] specificatie wordt uitgegaan van een <a>Closed world assumption (CWA)</a> en <a>Unique Name Assumption (UNA)</a>. <a>OWL</a> is strict genomen <a>Open world assumption (OWA)</a>. Inmiddels bestaat de <a>SHACL</a> standaard om met CWA in Linked Data om te gaan, deze standaard wordt in [=ICDD part 1=] context echter nog niet gebruikt. In de [=NEN 2660-2=] wordt het onderscheid wel gemaakt met verschillende taalbindingen. Waarbij <a>RDFS</a>/<a>OWL</a> gebruikt wordt in relatie tot OWA en <a>RDFS</a>/<a>OWL</a>/<a>SHACL</a> gebruikt wordt om met CWA om te gaan. In relatie tot [=ICDD part 1=] wordt vanuit de NEN 2660-2 aanbevolen om altijd de taalbinding gebaseerd op <a>SHACL</a> toe te passen, omdat het hier gaat om gegevens uitwisseling waarbij de verificatie en validatie van de gegevens een belangrijke rol speelt.

<div class="issue" data-number="2"></div>

## Serialisatie (rdf/xml vs turtle)

In de [=ICDD part 1=] specificatie wordt de rdf/xml serialisatie voorgeschreven voor de container en linkset ontologie files die in de container worden opgenomen. (Er wordt niet specifiek iets gezegd over de serialisatie van payload document.)
In de NTA8035 wordt de turtle serialisatie gebruikt voor de voorbeelden en als publicatie formaat voor het basicsemantics model. Hier wordt onder andere voor gekozen vanwege de leesbaarheid. Het is niet wenselijk om in een [=ICDD part 1=] container met verschillende serialisatie formaten te werken, aangezien dit de software ondersteuning ingewikkelder maakt. We bevelen dus aan om in de [=ICDD part 1=] context met rdf/xml serialisatie te werken voor de container en linkset ontologie files.

## [=ICDD part 1=] en andere ontologieen zoals TMLO

<div class="issue" data-number="5"></div>

## Hashing van encrypted documenten

In de [=ICDD part 1=] specificatie wordt in algemene termen gesproken over de mogelijkheid om documenten te encrypten met een hashing algorithme. Het BIM Loket stelt voor om te standaardiseren op SHA256 als best practice.

## Mate van Deeplinken

<div class="issue" data-number="7"></div>