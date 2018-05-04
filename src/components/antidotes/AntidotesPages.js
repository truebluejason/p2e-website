import React from 'react';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';

export const AgitatedPage = () => {
    const h3Style = { color: 'teal', margin: '10 0 10 0' };
    const h5Style = { marginTop: 20 };
    const pStyle = { textAlign: 'left', textIndent: 12 };
    return (
        <ContainerDiv>
            <h1
                style={{
                    color: 'black',
                    margin: 0,
                    marginBottom: 20,
                    textAlign: 'center'
                }}
            >
                Agitation
            </h1>
            <h3 style={h3Style}>Issue</h3>
            <p style={pStyle}>
                Agitation leads to unenjoyable meditation experience, which
                leads to demotivation and unstable attention.
            </p>
            <h3 style={h3Style}>Resolution</h3>
            <p style={pStyle}>
                Agitation and joy are 'opposite' mental phenomena - one can't be
                present when the other is. The steps below uses this fact to
                remedy agitation. The result will not be immediate, but with
                repeated action it will inevitably come.
            </p>
            <br />
            <SimpleDiv>
                <h5 style={h5Style}>1. Relax before meditating</h5>
                <p style={pStyle}>
                    Make yourself at ease and happy before meditation by doing
                    an activity that makes you happy and relaxed.
                </p>
                <h5 style={h5Style}>
                    2. Remind self that only 'bad' meditation session is one not
                    done
                </h5>
                <p style={pStyle}>
                    Dispell the belief that you are meditating badly by
                    reminding yourself that regardless the quality, any period
                    of time spent on meditation is time well spent.
                </p>
                <h5 style={h5Style}>
                    3a. Temporarily focus on the sensation of joy
                </h5>
                <p style={pStyle}>
                    If frustration grows prominent, temporarily recalibrate your
                    intention to relax and look for a comfortable sensation in
                    your body. Once the sensation is found, ground your
                    attention there until agitation lessens.
                </p>
                <h5 style={h5Style}>
                    3b. Temporarily loosen the restriction on attention
                </h5>
                <p style={pStyle}>
                    If frustration grows prominent, temporarily refocus your
                    attention to all the sensation in your body instead of just
                    breath to still train attention but give it some room.
                    Continue until agitation lessens.
                </p>
                <h5 style={h5Style}>
                    4. Do your utmost to embrace and welcome agitation
                </h5>
                <p style={pStyle}>
                    Suffering can be put as a sum of painful sensation and the
                    mind's unwillingness to accept the current situation. Doing
                    your best to fully embrace agitation will help ameliorate
                    the hindrance.
                </p>
            </SimpleDiv>
        </ContainerDiv>
    );
};
export const DullPage = () => {
    const h3Style = { color: 'teal', margin: '10 0 10 0' };
    const h5Style = { marginTop: 20 };
    const pStyle = { textAlign: 'left', textIndent: 12 };
    return (
        <ContainerDiv>
            <h1
                style={{
                    color: 'black',
                    margin: 0,
                    marginBottom: 20,
                    textAlign: 'center'
                }}
            >
                Dullness
            </h1>
            <h3 style={h3Style}>Issue</h3>
            <p style={pStyle}>
                Dullness is the result of unperceiving moments of consciousness.
                You want to convert those unperceiving moments to perceiving
                moments of attention / awareness.
            </p>
            <h3 style={h3Style}>Resolution</h3>
            <p style={pStyle}>
                Dullness can be put in a spectrum from subtle to strong. Working
                with subtle dullness is very productive, but struggling against
                strong dullness yield little result. The steps below uses this
                fact to remedy dullness. The result will not be immediate, but
                with repeated action it will inevitably come.
            </p>
            <br />
            <SimpleDiv>
                <h5 style={h5Style}>
                    1. Get a good night's sleep and don't meditate too late
                </h5>
                <p style={pStyle}>
                    This gives your body and mind the baseline amount of sleep
                    and reduces natural sleepiness.
                </p>
                <h5 style={h5Style}>
                    2a. Tense and relax all your muscles multiple times
                </h5>
                <p style={pStyle}>
                    This is the weakest form of energizing the mind. If strong
                    dullness returns before long, try the next antidote.
                </p>
                <h5 style={h5Style}>2b. Do standing meditation</h5>
                <p style={pStyle}>
                    It's harder for human body to feel sleepy when standing up.
                    If strong dullness returns before long, try the next
                    antidote.
                </p>
                <h5 style={h5Style}>2c. Do walking meditation</h5>
                <p style={pStyle}>
                    It's harder for human body to feel sleepy when active. If
                    strong dullness returns before long, try the next antidote.
                </p>
                <h5 style={h5Style}>
                    2d. Splash some cold water on your face and meditate again
                </h5>
                <p style={pStyle}>
                    This is the last resort since it disturbs your meditation.
                </p>
            </SimpleDiv>
        </ContainerDiv>
    );
};
export const LazyPage = () => {
    const h3Style = { color: 'teal', margin: '10 0 10 0' };
    const h5Style = { marginTop: 20 };
    const pStyle = { textAlign: 'left', textIndent: 12 };
    return (
        <ContainerDiv>
            <h1
                style={{
                    color: 'black',
                    margin: 0,
                    marginBottom: 20,
                    textAlign: 'center'
                }}
            >
                Laziness
            </h1>
            <h3 style={h3Style}>Issue</h3>
            <p style={pStyle}>
                Laziness leads to demotivation and can result in the cessasion
                of the practice.
            </p>
            <h3 style={h3Style}>Resolution</h3>
            <p style={pStyle}>
                Laziness and motivation are 'opposite' mental phenomena - one
                can't be present when the other is. The steps below uses this
                fact to remedy laziness. The result will not be immediate, but
                with repeated action it will inevitably come.
            </p>
            <br />
            <SimpleDiv>
                <h5 style={h5Style}>1. Have faith in the method</h5>
                <p style={pStyle}>
                    Continuously remind self that with dedicated practice,
                    attention and awareness will inevitably improve. Even if you
                    seem very bad at meditation. By having faith even for a
                    second, you become one step closer to lasting equanimity.
                </p>
                <h5 style={h5Style}>
                    2. Mentally recite your motivations for meditating before
                    practice
                </h5>
                <p style={pStyle}>
                    This helps you start off meditation on a willing note.
                </p>
                <h5 style={h5Style}>
                    3. Mix in meditation sessions that focus on relaxing bodily
                    sensations
                </h5>
                <p style={pStyle}>
                    The mind is rarely lazy at the idea of doing a fulfilling
                    activity. Associating the idea of meditation with
                    contentment restores motivation and decreses laziness.
                </p>
                <h5 style={h5Style}>
                    4. Upon breaking the meditation habit, don't criticize and
                    begin again
                </h5>
                <p style={pStyle}>
                    Part of the journey is accepting every moment of your past
                    mistakes. Better to burn just the kitchen than the entire
                    house. Failure is the best opportunity to begin again.
                </p>
            </SimpleDiv>
        </ContainerDiv>
    );
};
export const TemptedPage = () => {
    const h3Style = { color: 'teal', margin: '10 0 10 0' };
    const h5Style = { marginTop: 20 };
    const pStyle = { textAlign: 'left', textIndent: 12 };
    return (
        <ContainerDiv>
            <h1
                style={{
                    color: 'black',
                    margin: 0,
                    marginBottom: 20,
                    textAlign: 'center'
                }}
            >
                Temptation
            </h1>
            <h3 style={h3Style}>Issue</h3>
            <p style={pStyle}>
                Ironically, our conditioned habit of clinging to the pleasant
                and avoiding the unpleasant is the root cause of suffering.
            </p>
            <h3 style={h3Style}>Resolution</h3>
            <p style={pStyle}>
                You should first know what your mind is tempted by. Then, you
                can dispassionately observe those ideas and thoughts, diffusing
                them in a wholesome manner rather than denying their existence.
            </p>
            <br />
            <SimpleDiv>
                <h5 style={h5Style}>
                    1a. Every time you feel tempted, note the ideas that seduce
                    your attention
                </h5>
                <p style={pStyle}>
                    This identifies the face of your attention's abductors.
                </p>
                <h5 style={h5Style}>
                    1b. Upon detecting that those ideas are present, observe
                    them as long as you can without being carried away
                </h5>
                <p style={pStyle}>
                    This makes it harder for tempting thoughts to carry your
                    attention away.
                </p>
                <h5 style={h5Style}>
                    1c. Repeat step 1a and 1b over and over again
                </h5>
                <p style={pStyle}>
                    With sustained action, result inevitably follow.
                </p>
                <h5 style={h5Style}>
                    2. Temporarily focus on the sensation of joy
                </h5>
                <p style={pStyle}>
                    A content and joyful mind has no reason to cling onto
                    desire. Temporarily recalibrate your intention to relax and
                    look for a comfortable sensation in your body. Once the
                    sensation is found, ground your attention there until
                    temptation lessens.
                </p>
            </SimpleDiv>
        </ContainerDiv>
    );
};
