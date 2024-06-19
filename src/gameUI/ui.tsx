import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import ActionBar from './actionbar'
import Khepra from './khepra'

const uiComponent = () => (
  <UiEntity // This is the parent entity that fills the whole screen
    uiTransform={{
      width: '100%', // This should be set to the width of the screen
      height: '95%', // This should be set to the height of the screen
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'baseline'
    }}
  >
    <ActionBar />
    <Khepra />
  </UiEntity>
)

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}