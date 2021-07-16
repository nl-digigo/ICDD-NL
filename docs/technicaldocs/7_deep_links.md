# When to use deep links 

Deep links are links from a link element to another element that resides within a file. This can only be done if the content of that file is predictable and the items within the file are uniquely identifiable. 

This is not the case for all files. For example, the result of queries or the content of rows in Excel can change over time, as there is no reliable way to consistently identify each element. This reduces the value of the link; once any of the related documents is altered, the correctness of the link needs to be verified again. Therefore, it is generally not recommended to use deep links when there are no stable and consistent identifiers on each end.  

Many applications (e.g., GIS and CAD tools) do have unique identifiers for the items they describe. Between such files deep links are possible. However, one could consider alternative ways to link the elements. When two tools (e.g., a Systems Engineering tool and a GIS/CAD tool) are used to describe different aspects of the same objects, one could consider adding the identifiers from one tool to the other. 