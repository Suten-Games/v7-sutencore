import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import ActionBar from './actionbar'
import Khepra from './khepra'
import BackPack from './backpack'
import SpellBook from './spellbook'
import QuestLog from './questlog'
import QuestBook from './questbook'
import LootWindow from './lootwindow'
import CharacterScreen from './characterscreen'
import MerchantInterface from './merchantinterface'

const uiComponent = () => (
  <UiEntity // This is the parent entity that fills the whole screen
    uiTransform={{
      margin: { left: '200px', top: '50px'},
      width: '80%', // This should be set to the width of the screen
      height: '90%', // This should be set to the height of the screen
      flexDirection: 'row',
      // justifyContent: 'center',
      //alignItems: 'space-around',
      //alignItems: 'space-between',
      flexWrap: 'wrap'
    }}
  >
    {/* <MerchantInterface />
    <CharacterScreen /> 
    <LootWindow />
    <QuestBook />
    <QuestLog />
    <SpellBook />
    <BackPack /> */}
    <ActionBar />
    <Khepra />
  </UiEntity>
)

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}