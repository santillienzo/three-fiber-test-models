import { OrbitControls, Environment } from '@react-three/drei';
import { Canvas} from '@react-three/fiber'
import {IModel} from '../../utils/types'
import { Model } from './Model';

type Props = {
    models: IModel[]
}

export default function Experience({models}: Props){
    return  (
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.01,
                far: 2000,
                position: [ -1, 1, -0.5 ]
            } }
            >
            <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={1.0}enableZoom={false} autoRotate={true} />
            <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 10.2 } />
            <ambientLight intensity={ 2.2 } />
            <Environment preset={'sunset'} />
            {
                models.map((model, i)=> (
                    <Model model={model} key={i}/> 
                ))
            }
        </Canvas>
    )
}