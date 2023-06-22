import { engine, executeTask, Material, MeshRenderer, Transform } from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'

// import { createCube } from './factory'
// import { bounceScalingSystem, circularSystem, spawnerSystem } from './systems'

import { setupUi } from './gameUI/ui'

// Defining behavior. See `src/systems.ts` file.
//engine.addSystem(circularSystem)
// engine.addSystem(spawnerSystem)
// engine.addSystem(bounceScalingSystem)

export function main() {
    setupUi()

    const leftWall = engine.addEntity();
    Transform.create(leftWall, {
        position: Vector3.create(8, 10, 16), // Adjust position to match your needs
        scale: { x: 16, y: 20, z: 2 },
        //rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    });
    MeshRenderer.setPlane(leftWall);

    // // Right wall
    const rightWall = engine.addEntity();
    Transform.create(rightWall, {
        position: Vector3.create(8, 10, 0), // Adjust position to match your needs
        scale: { x: 16, y: 20, z: 2 },
        //rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    });
    MeshRenderer.setPlane(rightWall);

    // // Back wall
    const backWall = engine.addEntity();
    Transform.create(backWall, {
        position: Vector3.create(16, 10, 8), // Adjust position to match your needs
        scale: { x: 16, y: 20, z: 2 },
        rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    });
    MeshRenderer.setPlane(backWall);

    // // Front wall
    const frontWall = engine.addEntity();
    Transform.create(frontWall, {
        position: Vector3.create(0, 10, 8), // Adjust position to match your needs
        scale: { x: 16, y: 20, z: 2 },
        rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    });
    MeshRenderer.setPlane(frontWall)

    // Ceiling
    const ceiling = engine.addEntity();
    Transform.create(ceiling, {
        position: Vector3.create(8, 20, 8), // Adjust position to match your needs
        scale: { x: 16, y: 16, z: 16 },
        rotation: Quaternion.fromEulerDegrees(90, 0, 0) // Rotate 90 degrees around X axis
    });
    MeshRenderer.setPlane(ceiling);

    // Floor
    const floor = engine.addEntity();
    Transform.create(floor, {
        position: Vector3.create(8, 0, 8), // Adjust position to match your needs
        scale: { x: 16, y: 16, z: 16 },
        rotation: Quaternion.fromEulerDegrees(90, 0, 0) // Rotate 90 degrees around X axis
    });
    MeshRenderer.setPlane(floor);


    // Create my main cube and color it.
    Material.setPbrMaterial(rightWall, { albedoColor: Color4.create(1.0, 0.85, 0.42) })
    Material.setPbrMaterial(leftWall, { albedoColor: Color4.create(1.0, 0.85, 0.42) })
    Material.setPbrMaterial(floor, { albedoColor: Color4.create(1.0, 0.85, 0.42) })
}