'use client';

import { EntityViewContainer } from "@scenemesh/entity-engine";

export default function IndexPage() {
  return (
    <>
      <div
        style={{
          margin: '25vh 0',
        }}
      >
        <h1 style={{textAlign: 'center', fontSize: 64, fontWeight: 'bold', color: 'blue'}}>
          🚀 PAGE.JSX 已加载！模型驱动开发框架
          <div
          style={{
            opacity: '60%',
            fontSize: 20,
            fontWeight: 'normal',
            marginTop: 16
          }}>
            npm i @scenemesh/entity-engine
        </div>
        </h1>
        <br />
        
        <div style={{width: '70%', margin: '0 auto'}}>
          {console.log('🚀 PAGE.JSX: Rendering EntityViewContainer with:', { modelName: 'product', viewName: 'productGridView' })}
          <div style={{border: '2px solid red', padding: '10px', margin: '10px'}}>
            <h3>EntityViewContainer Debug Area</h3>
            <p>ModelName: product</p>
            <p>ViewName: productGridView</p>
            <EntityViewContainer modelName="product" viewType="grid"/>
          </div>
        </div>
      </div>
      
    </>
  )
}
