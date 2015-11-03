# Simple TCP Server
**Matthew Ringel  
Code Fellows sea-d45-javascript  
November 3, 2015**

This is a simple tcp server that takes any REST request and saves
it to a unique file in the log directory with a filename based
on the system time when saved.

Mocha testing uses to chai-http to verify that the file saved has
the contents of the request.
