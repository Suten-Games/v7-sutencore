import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'

const CharacterScreen = () => {
    return (
        <UiEntity // This is the child entity with your image
            onMouseDown={() => {
                console.log('Clicked on the UI')
            }}
            uiTransform={
                {
                    width: '4%', // 40% Adjust these to the size of your image or the size you want
                    height: '6%', // 60%
                }
            }
            uiBackground = {{
                texture: {
                    src: 'images/vali/CharacterScreen.png',
                },
                textureMode: 'stretch'
            }}
        />
    )
}

export default CharacterScreen;