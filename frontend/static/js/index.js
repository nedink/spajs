import Dashboard from './views/Dashboard.js'
import Posts from './views/Posts.js'
import Settings from './views/Settings.js'

const router = async () => {
    const routes = [
        { path: '/', view: Dashboard },
        { path: '/posts', view: Posts },
        { path: '/settings', view: Settings },
    ]

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    // No matches (potential 404) - let's just go to dashboard
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view()

    document.querySelector('#app').innerHTML = await view.getHtml()
}

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault()
            navigateTo(e.target.href) // Use our custom navigation behavior taking advantage of the history API
        }
    })

    router()
})