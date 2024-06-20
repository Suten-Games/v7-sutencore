import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'

const QuestLog = () => {
    return (
        <UiEntity // This is the child entity with your image
            onMouseDown={() => {
                console.log('Clicked on the UI')
            }}
            uiTransform={
                {
                    width: '20%', // Adjust these to the size of your image or the size you want
                    height: '20%',
                }
            }
            uiBackground = {{
                texture: {
                    src: 'images/vali/QuestLogScreen.png',
                },
                textureMode: 'stretch'
            }}
        />
    )
}

export default QuestLog;