# ICDD basics 

## Minimum requirements 

For a valid ICDD container, a few basic requirements need to be met. The container itself should be a ZIP64 file (see ISO/IEC 21320-1) with the extension “.icdd”. 

There must be an index file in the root with the file name ‘Index’i conform any RDF serialization, as well as three folders: “Ontology resources”, “Payload documents” and “Payload triples”. The Index file should provide a list of all relevant documents (both those stored within the container and external documents that are referenced). The requesting party can also include references to documents that they would like to receive.  

## ICDD container structure 

An ICDD container should contain the following files/folders: 

An RDF file with the name ‘Index’ 

- Ontology resources folder 
    - Optionally containing the standard ‘Container.rdf’ and ‘Linkset.rdf’ ontologies. The exact content of these two files is part of the ICDD standard and cannot be changed. Users can either store these files online (and refer to them from the container) or include a copy of the files in the container. 
- Payload documents folder 
    - Just like the ontology resources, the content can be exchanged in two ways: included in the container or by storing them online. In both cases they should be referenced from the Index file. Files that are included in the container should always be placed in this folder. This includes ontologies (other than the Container or Linkset ontology), Linked Data files or any other content. It is allowed to add sub-folders to the Payload documents folder. 
- Payload triples folder 
    - To interrelate (the content of) files, ICDD uses so-called link sets. If such link sets are used, they should be placed in this folder. The use of link sets is not mandatory. It is allowed to add sub-folders in the Payload triples folder. Note that this folder should never contain anything other than link sets, even if it happens to be data structured in triples (RDF). This information should always be placed in the Payload documents folder instead. 

## The way in which links work 

Links are an optional part of ICDD and are used to interrelate documents (or parts thereof). In the simplest case, two full documents are related to each other. However, more complex links can be made. On each end of a link, there can be: 

- A document 
- An element within a document (e.g., a specific item in a geometric file, a row in an Excel spreadsheet) 
- A set of related elements (e.g., a group of similar objects in a geometric file) 

Links are stored in link sets, which can be found in the ‘Payload triples’ folder. As the name of the folder suggests, these link sets are expressed as Linked Data. Two things are of importance for a link: the link type and the subjects which are linked together. The link type can be used to indicate the direction of the link (from element x to element y), or to restrict the number of elements on each side of the link (1-on-1 or 1-to-N). The subjects that are linked together can be identified by an ID, a query or a string of characters.