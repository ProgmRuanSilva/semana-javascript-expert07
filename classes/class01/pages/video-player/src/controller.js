export default class Controller {
    constructor({ }) {

    }
    static async initialize(deps) {
        const controler = new Controller(deps)
        return controler.init()
    }

    async init() {
        console.log('init!')
    }
}