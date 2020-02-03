//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de
//--              betreffende standaard.
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
var respecConfig =
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "WV",                // Werk Versie
  //specStatus: "GN-CV",              // Consultatie Versie
  //specStatus: "GN-VV",              // Vaststellings Versie
  //specStatus: "GN-DEF",             // Definitieve Versie
  //-- specType is verplicht! (activeer 1 van de volgende) ----------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                   // Standaard
  //specType: "IM",                   // Informatie Model
  //specType: "PR",                     // Praktijk Richtlijn
  specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",                 // altijd "markdown"
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2018-09-18",  	    // Format is "YYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  //-- de github repository waar je documentn in staat --------------------------------
  github: "https://github.com/bimloket/COINS-3.0-ICDD",
  editors:
  [
    {
      name:       "Elisabeth Klören",
      company:    "Crow",
      companyURL: "https://www.crow.nl"
    },
    {
      name:       "Niels Hoffmann",
      company:    "Provincie Noord-Holland",
      companyURL: "https://www.noord-holland.nl"
    },
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors:
  [
    {
      name:       "Niels Reyngoud",
      company:    "Provincie Gelderland",
      companyURL: "https://www.gelderland.nl"
    },
    {
      name:       "Bart Bink",
      company:    "Braindex",
      companyURL: "http://www.braindex.nl"
    },
    {
      name:       "Michel Böhms",
      company:    "TNO",
      companyURL: "https://www.tno.nl"
    },
    {
      name:       "Benno Koehorst",
      company:    "Rijkswaterstaat",
      companyURL: "https://www.rws.nl"
    },
    {
      name:       "Rob van de Werken",
      company:    "Rijkswaterstaat",
      companyURL: "https://www.rws.nl"
    },
    
  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "coins3",  	          // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  //pubDomain: "clue", 	            // Metamodel Informatie Modellering
  //pubDomain: "mim", 	            // Metamodel Informatie Modellering
  //pubDomain: "bor", 	            // Beheer Openbare Ruimte
  //pubDomain: "bro", 	            // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	          // IMGeo / BGT
  //pubDomain: "kl", 	              // Kabels en Leidingen
  //pubDomain: "liv", 	            // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	              // Metadata
  //pubDomain: "nen3610", 	        // Basismodel NEN3610
  //pubDomain: "oov", 	            // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	              // Ruimtelijke Ordening
  //pubDomain: "serv", 	            // Services
  //pubDomain: "tpod", 	            // Standaarden Omgevingswet
  //pubDomain: "visu", 	            // Visualisatie
  //pubDomain: "wp", 	              // White Paper
  //-- Repositorynaam op GitHub -------------------------------------------------------
  //github: ""https://github.com/geonovum/respec/examples/md_example",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  //issueBase: "https://github.com/geonovum/respec/examples/md_example/issues",
  //-- edDraftURI: de URI van de werkversie van het document
  //edDraftURI: "https://github.io/geonovum/respec/examples/md_example",
  //-- license: voor de geldende gebruiksvoorwaarden
  license: "cc-by",              //-- bronvermelding, geen afgeleide werken (default)
  // license: "cc0",                //-- Public Domain Dedication
  // license: "cc-by",              //-- Attribution, met bronvermelding
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eesrt naar de beschikbare www.specref.org voor verwijziging
  localBiblio:
  {
   
  }

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit!
  //previousPublishDate: "2018-09-18",  	    // Format is "YYY-MM-DD"
  //previousMaturity: "CV",                   // kies 1 van deze 2 regels
  //previousMaturity: "VV",  	                // kies 1 van deze 2 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  //maxTocLevel: 3,                           // Aantal niveau's ToC, default is 0
};
