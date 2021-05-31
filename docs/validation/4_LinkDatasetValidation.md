## Link dataset validation
Link datasets are listed in the index.rdf file and can be found in the 'payload triples' folder in NEN-EN-ISO 21597-1:2020 containers. These link datasets must comply with the standard and consequently a set of checks can be developed.

The following list contains a set of validation checks regarding rdf files in the 'Payload triples' folder of a NEN-EN-ISO 21597-1:2020 container.

id   | description   |extra   |
--- | --- | ---
LD1|valid rdf files| validate if link datasets files are valid rdf*
LD2|serialisation|check for allowed serialisations**. 
LD3|schema validation| check if this file is compliant with the Linkset.rdf file*
LD4|only Linkset classes| no other individuals than individuals from classes defined in the LinkSet.rdf. For example make sure no other documents are defined in this file.***
LD5|document check|check if all related documents are present in the index.rdf ***
LD6|optional resolving element id's| check if id's can be found in the documents


*More details on schema validation in the schema validation chapter.

**Very common serialisations are argubably rdf/xml,turtle and json-ld. Trig, trix, n3, zipped serialisation versions, rdfa, binary serialisation versions are arguably less common in this context. For the validations service it can be recommended to support at least rdf/xml,turtle and json-ld. 

***Link datasets use document references defined in Index.rdf. Link datasets must not contain extra document references.

