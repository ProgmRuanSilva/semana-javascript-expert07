export default class HandGestureController {
    #view
    #sevice
    constructor ({ view, service }) {
        this.#view = view
        this.#sevice = service
    }

    

    async init() {

      }
    
      static async initialize(deps) {
        const controller = new HandsGestureController(deps)
        return controller.init()
      }

}