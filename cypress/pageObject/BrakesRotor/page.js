import {RotorsPageActions} from "../BrakesRotor/actions"
import {RotorsPageTests} from "../BrakesRotor/tests"

export class RotorsPage{
    constructor()
    {
        this.actions = new RotorsPageActions()
        this.tests = new RotorsPageTests()
    }
}