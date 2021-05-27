## Index dataset validation
The index.rdf file lists the documents that can be found in the container. This index.rdf must comply with the standard and consequently a list of checks can be developed.

The following list contains a set of validation checks regarding for the index.rdf file within the container. 

id   | check   |description   |
--- | --- | ---
ID1|valid syntax Index.rdf| validate if Index.rdf is a valid RDF file*
ID2|serialisation|check for allowed serialisations**.  
ID3|schema validation |check if the index.rdf file complies with the Container.rdf file*. Additional properties are allowed.
ID4|check listed files | check if the internal documents are present in the 'Payload documents'
ID5|check listed folders|check if listed folder documents folders are present in the 'Payload documents'
ID6|check not listed | check for unlisted files and folders. These are not allowed
ID7|conformanceIndicator| check the ct:conformanceIndicator property for the value "ICDD-Part1-Container".
ID8|check external files| check if external documents are resolvable (optional moet dit ???)
ID9|import Container.rdf|check if an owl:import statement to Container.rdf is present and correct
ID10|existence link datasets| check if referred link datasets are available. Old linksets do not have to be present in the ICDD container. 



* more details on schema validation in the schema validation chapter

**The standard mentions RDF/XML or any other equivalent RDF serialisations recommended by W3C can be used. Limiting the supported serialisations to rdf/xml,turtle and json-ld can be recommended for an ICDD validation service.  

