import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'

const uiComponent = () => (
  <UiEntity // This is the parent entity that fills the whole screen
    uiTransform={{
      width: '100%', // This should be set to the width of the screen
      height: '95%', // This should be set to the height of the screen
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}
  >
    <UiEntity // This is the child entity with your image
      uiTransform={{
        width: '45%', // Adjust these to the size of your image or the size you want
        height: '10%',
      }}
      uiBackground={{ 
        texture: { 
          src: 'images/vali/BlueActionbar.png',
        },
        textureMode: 'stretch'
      }}
    />
  </UiEntity>
)

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}