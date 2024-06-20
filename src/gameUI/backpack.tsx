import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'

const BackPack = () => {
    return (
        <UiEntity // This is the child entity with your image
            onMouseDown={() => {
                console.log('Clicked on the UI')
            }}
            uiTransform={
                {
                    width: '30%', // Adjust these to the size of your image or the size you want
                    height: '50%',
                }
            }
            uiBackground = {{
                texture: {
                    src: 'images/vali/BlueBackpack.png',
                },
                textureMode: 'stretch'
            }}
        />
    )
}

export default BackPack;