import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'

const Khepra = () => {
    return (
        <UiEntity // This is the child entity with your image
            uiTransform={
            {
                width: '10%', // Adjust these to the size of your image or the size you want
                height: '10%',
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