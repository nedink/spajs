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

    // for any path, go to the root and send back index.html
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('frontend', 'index.html'))
    })

    listener = app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${listener.address().port}`))
    ```
