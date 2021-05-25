# Implementing an ICDD validation service

## Web-based ICDD validation service
Several approaches for implementing a validation service are possible. A complete client-side implementation is perhaps possible and might have a several maintenance advantages. However it is not clear if the current components for this are mature enough or have the necessary functionality. So a client-server approach seems very feasible where an ICDD container is uploaded to a server which performs the checks and reports back via an validation report. Proven standard libraries for checking the ZIP file and its structure seems very feasible for implementing the checks needed for the container structure. For RDF and Shacl based implementation an (in memory) triplestore could be very useful. 



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


Advanced features of Shacl are often not implemented. This means that rule execution should be implemented. 



