import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'

const Khepra = () => {
    return (
        <UiEntity // This is the child entity with your image
            onMouseDown={() => {
                console.log('Clicked on the UI')
            }}
            uiTransform={
                {
                    width: '10%', // Adjust these to the size of your image or the size you want
                    height: '10%',
                    alignSelf: 'flex-end',
                    margin: {left: '100px'}
                }
            }
            uiBackground = {{
                texture: {
                    src: 'images/khepra.png',
                },
                textureMode: 'stretch'
            }}
        />
    )
}

export default Khepra;