export function getHTML(body: string, state: object) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Apollo ToDo List</title>
      </head>
      <body>
        <div id="app">
        ${body}
        </div>
        <script>
          window.__APOLLO_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')};
        </script>
        <script src="http://localhost:3000/static/client.js"></script>
        </body>
    </html>
  `;
}
