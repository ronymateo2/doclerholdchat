DEMO: [Demo](https://ronymateo2.github.io/doclerholdchat/).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test
Launches the test runner 

## Chat App
Requirements:  See [Demo](https://ronymateo2.github.io/doclerholdchat/).

- [x] Use React as your framework
- [x] Use CSS preprocessors (sass)
- [x] Writen in Typescript
- [x] Support responsible
- [x] Support Chrome, Firefox and Safari
- [x] Some test were written (Settings.test.tsx, chat-message.test.ts, message-service.test.ts, setting-service.test.ts)

### Decision

- Use react +  react-router + own system design
- Use React Context as Dependency Injection check service impl
- Mock data for rapid prototyping
- Responsive Design (it provides a decent responsive design)

### Architecture

- Page has interaction with context and any services
- services contain all interaction with storage api like session storage it returns promise so it's possible to change it with Rest API
- Components interact with Pages. Communication is just with props and events. They don't have any knowledge of any route or state. They just provide specific functionality.
- The model represents the entities in our application.
