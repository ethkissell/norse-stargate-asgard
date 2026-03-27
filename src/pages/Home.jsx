import React from 'react'

import sgImage from '../images/sg1-logo.jpg';
import atlantisImage from '../images/atlantis-logo.jpg';
import openGateImage from '../images/sg-1-open-gate.jpg';

export default function Home() {
  return (
    <div>
      <h3 className="contentTitle">Stargate Background</h3>

      <div className="content-block">
        <div className="figure-grid">
          <figure className="figure-wrap">
          <div className="figure-frame">
            <img src={sgImage} alt="SG-1-Logo" />
          </div>
          <figcaption className="figure-caption">
          </figcaption>
          </figure>
          <figure className="figure-wrap">
          <div className="figure-frame">
            <img src={atlantisImage} alt="Atlantis-Logo" />
          </div>
          <figcaption className="figure-caption">
          </figcaption>
          </figure>
        </div>
      </div>

      <p>The <i>Stargate</i> franchise began with the 1994 film <i>Stargate</i>, directed by Roland Emmerich and written by Emmerich and Dean Devlin. The television expansion followed with <i>Stargate SG-1</i>, developed by Brad Wright and Jonathan Glassner, then <i>Stargate: Atlantis</i>, created by Brad Wright and Robert C. Cooper, and later <i>Stargate Universe</i>, created by Wright and Cooper. For a project focused on comparing Norse myth to the Asgard, <i>SG-1</i> and <i>Atlantis</i> are the most relevant series, since they contain the material most directly tied to the Asgard, while <i>Universe</i> remains part of the broader canon but shifts the story to the <i>Destiny</i> expedition and a more isolated setting.</p>
      
      <div className="content-block split-layout reverse">
        <figure className="figure-wrap">
          <div className="figure-frame">
          <img src={openGateImage} alt="Open-gate" />
          </div>
          <figcaption className="figure-caption">
            An open gate with SG-1 traversing.
          </figcaption>
        </figure>

        <div className="page-text">
          <p>
            At the center of the franchise is the Stargate itself, an Ancient device that opens stable wormholes between compatible gates. In Milky Way and Pegasus addresses, the first six symbols identify a destination in space, and the final symbol marks the point of origin; seven symbols are used for travel within a galaxy, while intergalactic travel requires an eighth chevron. <i>Stargate Universe</i> adds the later ninth-chevron mystery tied to <i>Destiny</i>. The gate network normally compensates for stellar drift through its dialing system and Dial Home Device, which is why Earth’s early use of the gate requires extra work. Humans from Earth are called the Tau’ri, and that term becomes important because much of the franchise follows Earth’s growing role in the wider galactic network.
          </p>
        </div>
      </div>

      <p>Much of <i>Stargate SG-1</i> takes place at Stargate Command, a top-secret United States Air Force organization based in the Cheyenne Mountain Complex in Colorado. The Tau’ri fight the Goa’uld, parasitic symbiotes that take over human hosts and rule by posing as gods, with the Jaffa serving as their warrior class and incubators. Later <i>SG-1</i> seasons shift toward the Ori, ascended beings who spread religion as a weapon. <i>Stargate: Atlantis</i> moves the action to the Pegasus Galaxy, where an international expedition protects the city of Atlantis while fighting the Wraith, a hive-based species that feed on human life-force and are ruled by queens. That series also introduces the Vanir, a renegade Asgard group, making the Asgard encountered in <i>SG-1</i> the Aesir.</p>
    </div>
  );
}