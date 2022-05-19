# JavaScript Single Page Application

[Build a Single Page Application with JavaScript (No Frameworks)
](https://www.youtube.com/watch?v=6BozpmSjk-Y)

1. Create `project/`
2. Create `project/frontend/`
3. Create `project/frontend/index.html`
4. In the body, add:
    ```html
    <script type="module" src="/static/js/index.js"></script>
    ```
    `type="module"` because we are taking advantage of ES6 import/export syntax (our views are each going to have their own JS class)
5. Above the `<script>` tag, add:
    ```html
    <nav>
        <a href="/" class="nav__link" data-link>Dashboard</a>
        <a href="/posts" class="nav__link" data-link>Posts</a>
        <a href="/settings" class="nav__link" data-link>Settings</a>
    </nav>
    ```
    `data-link`, using the History API, avoids page refresh
6. In `root/`, run:
    ```sh
    $ npm init
    ```
7. Install Express:
    ```sh
    npm i express
    ```
8. Create `root/server.js`:
    ```js
    const express = require('express')
    const path = require('path')

    const app = express()

    // For any path, go to the root and send back index.html
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
    })

    listener = app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${listener.address().port}`))
    ```
9. Create `root/static/js/index.js`:
    ```js
    console.log('JS is loaded!')
    ```
10. Whenever the path has '/static' in it, we want to serve the static dir as usual. This will enable `index.js` which we just created. Add to `server.js`:
    ```js
    app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')))
    ```
    Now, if you go to `localhost:3000/` in the browser and check the console, you should see `JS is loaded!`
    ![ScreenShot1.png](misc/ScreenShot1.png)
11. In `server.js`, let's set up routing. Add the following:
    ```js
    const router = async () => {
        const routes = [
            { path: '/', view: () => console.log('Viewing Dashboard') },
            { path: '/posts', view: () => console.log('Viewing Posts') },
            { path: '/settings', view: () => console.log('Viewing Settings') },
        ]

        // Test each route for potential match
        const potentialMatches = routes.map(route => {
            return {
                route: route,
                isMatch: location.pathname === route.path
            }
        })

        let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

        // No matches, let's just go to dashboard
        if (!match) {
            match = {
                route: routes[0],
                isMatch: true
            }
        }

        // Check that we know what view we should see
        console.log(match.route.view())
    }

    document.addEventListener('DOMContentLoaded', () => {
        router()
    })
    ```
