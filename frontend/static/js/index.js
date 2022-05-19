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

    // No matches (potential 404) - let's just go to dashboard
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    console.log(match.route.view())
}

document.addEventListener('DOMContentLoaded', () => {
    router()
})