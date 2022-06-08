Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Put it in a sample page, load it and check out the network tab in the Devtools.

Provide the test page and image that you used within the answer to this question.

Case 1:
    `<img src="dog.jpg1" style="visibility: hidden" alt="my dog">`

Case 2:
    `<img src="dog.jpg" style="display:none" alt="my dog">`

# Well, online resources say that both cases will trigger a GET request.
# Practically speaking though, when I load my local page in a browser,
# even making the image visible, no Get request is triggered.
# It seems like I would have to load up a local server to see this.

## Feedback
***
Partial .5/1

They do trigger a get request. I changed the name of the first image to dog1.  opening via live server in Vscode and going the the network tab. 
Cannot GET /dog1.jpg
Cannot GET /dog.jpg

    <img src="dog1.jpg" style="visibility: hidden" alt="my dog">
    <img src="dog.jpg" style="display:none" alt="my dog">