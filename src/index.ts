import { BaseScene } from './baseScene'
import { loadSutenQuest } from './gameFunctions/loadSutenQuest'
import { setupUi } from './gameUI/ui'

export function main() {
    // SETUP UI
    setupUi()

    // SETUP STAGE
    if (typeof BaseScene == 'function') {
        BaseScene()
    }

    // START GAME
    loadSutenQuest()
}