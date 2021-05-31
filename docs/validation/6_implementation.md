# Implementing an ICDD validation service

## Web-based ICDD validation service
Several approaches for implementing a web-based validation service are possible. A complete client-side implementation is theoretically possible and arguably has maintenance advantages: you only need to server a set of HTML/Javascript files. However it is unclear if the current components for this are mature enough or support the necessary functionality. 
A client-server approach for a web-based validation seems less risky (at the moment of writing this). Container structure validation can perhaps be done in the browser on the client side reducing the amount of files that need to be uploaded to the server for further checking. The server performs the necessary additional checks and generates a validation report. 
Software libraries for implementing container structure checks are available. For RDF/Shacl based implementation, (in memory) triplestores could be used. The Shacl files can be shared so that 3rd parties can re-use these validation definitions in their own software systems.


## SHACL implementations
Various SHACL implementations are available. Implementation completeness and quality can vary. The following list gives examples of SHACL implementations.

id   | name   |url   |
--- | --- | ---
1|JENA|https://jena.apache.org/
2|PYShacl| https://github.com/RDFLib/pySHACL
3|DOTNETRDF|http://dotnetrdf.org/
4|RDF4J|https://rdf4j.org/
5|StarDog| https://www.stardog.com/
6|AnzoGraph|https://www.cambridgesemantics.com/


Advanced features of Shacl are not always implemented. This means that for example rule execution could not be available and consequently should be implemented. The rules are relatively simple and based upon Sparql. Implementing these rules should be very feasible. 



