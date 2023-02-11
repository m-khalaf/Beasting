import React from "react";
import bench from "../resources/bench.gif";
import clean from "../resources/clean.gif";
import press from "../resources/press.gif";

export default function Gifbar() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: '0', padding: '0' }}>
      <div style={{ width: '200px', height: '100px', overflow: 'hidden' }}>
          <img src={bench} alt="My GIF" style={{ width: '100%', height: '100%', transform: 'translateX(10%)' }} />
      </div>
      <div style={{ width: '200px', height: '100px', overflow: 'hidden' }}>
          <img src={clean} alt="My GIF" style={{ width: '100%', height: '100%', transform: 'translateX(10%)' }} />
        </div>
        <div style={{ width: '200px', height: '100px', overflow: 'hidden' }}>
          <img src={press} alt="My GIF" style={{ width: '100%', height: '100%', transform: 'translateX(10%)' }} />
        </div>
    </div>
  );
}