## Link dataset validation
Link datasets are listed in the index.rdf file and can be found in the 'payload triples' folder in an ICDD container. These link datasets must comply with the standard and consequently a set of checks can be developed.

The following list contains a set of validation checks regarding rdf files in the 'Payload triples' folder of the container.

id   | description   |extra   |
--- | --- | ---
LD1|valid rdf files| validate if link datasets files are valid rdf*
LD2|serialisation|check for allowed serialisations** rdf/xml,turtle,json-ld,trig,trix,n3, arguably not zipped versions,rdfa,binary versions ??
LD3|schema validation| check if this file is compliant with the Linkset.rdf file*
LD4|only Linkset classes| no other individuals than individuals from classes defined in the LinkSet.rdf. For example make sure no other documents are defined in this file.***
LD5|document check|check if all related documents are present in the index.rdf ***
LD6|optional resolving element id's| check if id's can be found in the documents


* more details on schema validation in the schema validation chapter


** not sure about this. Is it allowed to define 'previouse' documents in this dataset?