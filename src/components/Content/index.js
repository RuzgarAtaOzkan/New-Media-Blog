// MODULES
import React from 'react';



// UTILS
import ProgressiveBar from '../ProgressiveBar';

// STYLES
import styles from './index.module.scss';

function Content() {
  return (
    <>
      <div className={styles['content-area']}>
        <div className={styles['content-container']}>
          <h1>Self Learner Software Developers</h1>

          <p>
            The self learner developer means is just like the name is a person
            who is trying to learn software development on its own mostly on the
            internet. If a person is self learner developer he/she must not be
            going to a college department which is relevant to software
            engineering or anything close or he/she might not be going to a
            college or he/she might be graduated from.
          </p>

          <p>
            The self-taught programmers are in rise recent years due to
            technological advantages such as websites that teaches software
            development free or for little prices. There are even some
            controversy about self-taught programmers will replace those
            programmers who are still in software engneering departments in
            college. This taught are stated in some of the blogs such as <a
              target="_blank"
              without rel="noreferrer"
              href="https://eksisozluk.com/alayli-yazilimcilarin-sektoru-ele-gecirmesi--6881914"
            > eksisozluk </a>, why this argument might scare the software engineer who are still
            in college getting education? Because those who are learning on
            their own from the internet are not loosing any time by learning
            stuff that they dont need compared to college students and
            self-taugh programmers might have more potential learning mendatory
            things that software industry wants a lot. That does not mean the
            informations software engineering classes giving are useless, in
            college, a software engineering classes teaches students how
            engineering works behind the scenes which is an advantage against
            the self learners. That will be benefitial for them in future but a
            self-learner programmer can always learn the same stuff as the
            college student but most of the time finding the right information
            is so exhausting for the individual and stress is overwhelming.
            Unlike the college student, the self-learner has to search through
            the entire internet to find what he/she looking for that is where
            the advantage of learning from the college is comes. This is why
            it's important to have a good network. But sometimes the given tasks
            or subjects given in class are just a wasting of time for the
            student and this is where the self-learner has more advantage
            because he/she can learn the wanted skills by the industry quicker
            without wasting time on small algorithms teached on the college.
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
          
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
              <h1 style={{ marginBottom: '1rem', marginTop: '1rem'}}>Advantages of Self-Learning Programming:</h1>

              <ul>
                <li>- Free time to learn whatever information you want.</li>
                <li>- No time wasting on details such as informations taught in class</li>
                <li>- More time to build portfolie projects for job applications</li>
              </ul>

              <h1 style={{ marginBottom: '1rem', marginTop: '1rem'}}>Advantages of being Software Engineer Student</h1>

              <ul>
                <li>- Most of the companies looking for a software engineering degree on their job applications</li>
                <li>- Reaching usefull informatin withour distraction of useless tutorials on the internet</li>
                <li>- </li>
              </ul>
            </div>

          </div>


          <div style={{ textAlign: 'center'}}>

            <h2 style={{ margin: '2rem'}}>Here is a self-learner software developer (Me) developing this very blog with the coding skills I learned from the internet.</h2>

            <iframe width="760" height="455" src="https://www.youtube.com/embed/yP1zRwxW5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div style={{ fontSize: '18px', margin: '2rem'}}>
              Link: <a href="https://www.youtube.com/watch?v=yP1zRwxW5g8&t=162s&ab_channel=RuzgarAtaOzkan" target="_blank"  without rel="noreferrer">New Media Blog Project with ReactJS</a>
            </div>
          </div>


          <ProgressiveBar title="Interview with a Self-Learner Developer" soundFile="/sounds/rock.mp3" />
        </div>
      </div>
    </>
  );
}

export default Content;
