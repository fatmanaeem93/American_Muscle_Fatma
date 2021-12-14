import {HomePageActions} from "../HomePage/actions"
import {HomePageTestss} from "../HomePage/tests"

export class HomePage{
    constructor()
    {
        this.actions = new HomePageActions()
        this.tests = new HomePageTestss()
    }
}