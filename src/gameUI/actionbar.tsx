import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'

const ActionBar = () => {
    return (
        <UiEntity // This is the child entity with your image
            uiTransform={
            {
                width: '45%', // Adjust these to the size of your image or the size you want
                height: '10%',
                alignSelf: 'flex-end'
            }
        }
        uiBackground = {{
            texture: {
                src: 'images/vali/BlueActionbar.png',
                },
            textureMode: 'stretch'
        }}
        />
    )
}

export default ActionBar;