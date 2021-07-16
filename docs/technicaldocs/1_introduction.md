# Introduction 

The ISO 21597 series has been developed in response to a recognised need within the construction industry to be able to handle multiple documents as one information delivery. 

Information deliveries are often a combination of drawings, information models (representing built or natural assets in the physical world), text documents, spreadsheets, photos, videos, audio files, and so on. Increasingly, information deliveries may also include datasets based on ontologies. An ability to transfer the information within these deliveries in a coherent manner can contribute significantly to the value of an information delivery. The composition of such a package arises both from the requirements of the process (e.g., delivery of as-built information) and from the specific functional purpose (e.g., performing a quantity take-off or communicating about issues in 3D models). 

This part provides guidance on how to implement the generation and processing, also referred to as the export and import, of an ICDD container for the exchange of product data. ICDD stands for *Information Container for linked Document delivery*.

The ICDD method prescribes that an ICDD container is used to exchange information. Such a container contains text documents, drawings, ontologies, and links between them. In this guide, the basics of the ICDD container are discussed first. Afterwards, a use case is described which will illustrate the process of constructing the information container from within a software platform. 

Once the ICDD container is created on your software platform, this guide hands some quality checks to perform to ensure a valid and complete container. 

Besides generating a container, this guide describes some guidelines on what to look for when importing a container. Best practises and details on deep linking conclude this guide. The appendix shows an example ICDD container.