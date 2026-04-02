import React from 'react';

import thorHammer from '../images/thor-hammer.webp';
import asgardRunes from '../images/asgard-runes.webp';
import norseRunes from '../images/norse-runes.webp';
import runestone from '../images/runestone.webp';
import proseEdda from '../images/prose-edda.webp';

export default function Society() {
    return (
        <div>
            <h3 className='contentTitle'>Changes to the Myth and Norse Culture</h3>
            <div className="content-block figure-centered">
                <figure className="figure-wrap">
                    <div className="figure-frame">
                    <img src={thorHammer} alt="test" />
                    </div>
                    <figcaption className="figure-caption">
                        Thor's hammer in Stargate.
                    </figcaption>
                </figure>
            </div>
            <p>
            One of the most significant ways <i>Stargate</i> alters Norse material is by turning myth into in-universe history. In real-world Norse culture, the gods, runes, and stories grew out of human religious tradition, oral storytelling, and the historical development of Germanic peoples in Scandinavia. In <i>Stargate</i>, however, those same elements are reframed as traces of Asgard influence. This creates a major shift in meaning: Norse mythology is no longer presented as something humans created to explain the world, but as something shaped by contact with an advanced alien civilization. The gods are therefore not divine beings remembered through myth, but real beings whose actions inspired the myths in the first place.
            </p>

            <div className="content-block">
                <div className="figure-grid">
                    <figure className="figure-wrap">
                    <div className="figure-frame">
                        <img src={norseRunes} alt="test one" />
                    </div>
                    <figcaption className="figure-caption">
                        Norse runes on a runestone.
                    </figcaption>
                    </figure>

                    <figure className="figure-wrap">
                    <div className="figure-frame">
                        <img src={asgardRunes} alt="test two" />
                    </div>
                    <figcaption className="figure-caption">
                        Asgard runes projected from a database in the show.
                    </figcaption>
                    </figure>
                </div>
            </div>
            <p>
            This change is especially clear in the treatment of runes. In historical Norse culture, runes were an actual alphabet used by Germanic peoples, though later tradition often surrounded them with mystery and magical associations. Mythologically, runes are also tied to divine knowledge, especially through Odin’s sacrifice in pursuit of wisdom. <i>Stargate</i> keeps the visual and symbolic sense of ancient knowledge, but changes its origin. Rather than developing from human linguistic and cultural tradition, the rune-like symbols in the franchise are connected to the Asgard themselves. What appears to be a Norse writing tradition is therefore better understood in the series as an alien communication system that humans later inherited or interpreted as part of their own culture.
            </p>

            <div className="content-block split-layout reverse">
                <figure className="figure-wrap">
                    <div className="figure-frame">
                    <img src={runestone} alt="test" />
                    </div>
                    <figcaption className="figure-caption">
                        A runestone in Drävle, Uppland, Sweden.
                    </figcaption>
                </figure>

                <div className="page-text">
                    <p>
                    The same transformation applies to the larger Norse religious framework. In the real world, Norse mythology was part of a living culture with regional variation, ritual practice, and historical development. In <i>Stargate</i>, that culture is rewritten as a product of Asgard intervention. The series does not simply borrow Norse imagery for decoration; it suggests that the Asgard were an active force behind the myths and symbols associated with Germanic peoples. The result is not a faithful adaptation of Norse religion, but a fictional explanation for why Norse religion might exist at all inside the story world.
                    </p>
                </div>
            </div>

            <p>
            This also changes the role of the Asgard themselves. They are not only characters with Norse names, but a hidden source of cultural influence on Earth. Their decision to present themselves as gods gives early humans a framework they can understand while also allowing the Asgard to act as protective gods. The reason for this act, as explained in the show, is that the Asgard were freeing worlds from the Goa'uld and they deemed that the humans were not ready to see the truth of their false Gods, so they posed as a different set of more benevolent deities. That makes the Norse framework in <i>Stargate</i> a deliberate cultural mask: a set of names, symbols, and stories chosen to make alien contact legible. The show is not really presenting “Norse culture” in a broad historical sense. It is presenting a version of Germanic cultural memory filtered through the Asgard intervention.
            </p>

            <div className="content-block split-layout">
                <figure className="figure-wrap">
                    <div className="figure-frame">
                    <img src={proseEdda} alt="test" />
                    </div>
                    <figcaption className="figure-caption">
                        An early manuscript cover for the Prose Edda.
                    </figcaption>
                </figure>

                <div className="page-text">
                    <p>
                    That structure also resembles euhemerism, especially Snorri Sturluson’s approach in the <i>Prose Edda</i>. Snorri does not treat the gods as purely supernatural beings in his framing material; instead, he recasts them as extraordinary figures from Troy or Asia whose deeds were preserved, enlarged, and eventually understood as divine. <i>Stargate</i> uses the same basic logic, but replaces Snorri’s humanized gods with extraterrestrial ones. The Asgard are not worshipped humans who became gods through legend. They are real alien beings whose actions on Earth became the basis for Norse myth. In that sense, <i>Stargate</i> works as a kind of science-fiction euhemerism. It keeps the idea that myth can grow out of misunderstood reality, but changes the source of that reality from ancient human history to alien contact.
                    </p>
                </div>
            </div>

            <p>
            Taken together, this makes the culture section an important bridge between myth and adaptation. It shows how <i>Stargate</i> turns the Norse world into something both recognizable and fundamentally altered. The runes, the gods, and the larger cultural associations still look familiar, but their meaning has changed. Rather than arising from human religious life and historical development, they are recast as the traces of an advanced alien civilization that shaped Earth from the shadows.
            </p>

        </div>
    );
}