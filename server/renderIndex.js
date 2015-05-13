function renderIndex(reactContent) {
  return "\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <title>import.io - integrate</title>\n        <base href=\"/\" />\n        <link rel=\"stylesheet\" href=\"http://purple.herokuapp.com/dist/css/purple.css\" />\n      </head>\n      <body>\n        <section id=\"main\">" + reactContent + "</section>\n        <script src=\"/bundle.js\"></script>\n      </body>\n    </html>\n";
}

module.exports = renderIndex;