import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'

const SpellBook = () => {
    return (
        <UiEntity // This is the child entity with your image
            onMouseDown={() => {
                console.log('Clicked on the UI')
            }}
            uiTransform={
                {
                    width: '60%', // Adjust these to the size of your image or the size you want
                    height: '60%',
                }
            }
            uiBackground = {{
                texture: {
                    src: 'images/vali/SpellBook.png',
                },
                textureMode: 'stretch'
            }}
        />
    )
}

export default SpellBook;