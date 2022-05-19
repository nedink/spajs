import AbstractView from './AbstractView.js'

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Dashboard')
    }

    async getHtml() {
        return `
            <h1>Welcome Back, Dom</h1>
            <p>
            Donec rhoncus pulvinar neque non accumsan. Morbi eu turpis scelerisque velit rutrum placerat...
            </p>
            <p>
                <a href='/posts' data-link>View recent posts</a>.
            </p>
        `
    }
}
