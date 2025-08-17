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
        <h1 style={{textAlign: 'center', fontSize: 64, fontWeight: 'bold'}}>
          模型驱动开发框架
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
        
        <div style={{width: '70%', margin: '0 auto'}}><EntityViewContainer modelName="event" viewType="grid"/></div>
      </div>
      
    </>
  )
}
