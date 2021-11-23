// MODULES
import React from 'react';

// UTILS
import ProgressiveBar from '../ProgressiveBar';

// STYLES
import styles from './index.module.scss';

function Content() {
  return (
    <div className={styles['content-area']}>
      <div className={styles['content-container']}>
        <h1>Self Learner Software Developers</h1>
        <p>
          The self learner developer means is just like the name is a
          person who is trying to learn software development on its
          own mostly on the internet. If a person is self learner
          developer he/she must not be going to a college department
          which is relevant to software engineering or anything close
          or he/she might not be going to a college or he/she might be
          graduated from.
        </p>
        <p>
          The self-taught programmers are in rise recent years due to
          technological advantages such as websites that teaches
          software development free or for little prices. There are
          even some controversy about self-taught programmers will
          replace those programmers who are still in software
          engneering departments in college. This taught are stated in
          some of the blogs such as{' '}
          <a
            target="_blank"
            without
            rel="noreferrer"
            href="https://eksisozluk.com/alayli-yazilimcilarin-sektoru-ele-gecirmesi--6881914"
          >
            {' '}
            eksisozluk{' '}
          </a>
          , why this argument might scare the software engineer who
          are still in college getting education? Because those who
          are learning on their own from the internet are not loosing
          any time by learning stuff that they dont need compared to
          college students and self-taugh programmers might have more
          potential learning mendatory things that software industry
          wants a lot. That does not mean the informations software
          engineering classes giving are useless, in college, a
          software engineering classes teaches students how
          engineering works behind the scenes which is an advantage
          against the self learners. That will be benefitial for them
          in future but a self-learner programmer can always learn the
          same stuff as the college student but most of the time
          finding the right information is so exhausting for the
          individual and stress is overwhelming. Unlike the college
          student, the self-learner has to search through the entire
          internet to find what he/she looking for that is where the
          advantage of learning from the college is comes. This is why
          it's important to have a good network. But sometimes the
          given tasks or subjects given in class are just a wasting of
          time for the student and this is where the self-learner has
          more advantage because he/she can learn the wanted skills by
          the industry quicker without wasting time on small
          algorithms teached on the college.
        </p>
        <p>
          One of the biggest self-taught programmer among the software
          world is{' '}
          <i>
            <b>Steve Wozniak</b>
          </i>
          . He was developing for the Apple corporation at that moment
          and he was the co-founder of the apple. He was interested in
          science and math from early ages and he has a famous quote.
          (The Medium, 2017);
        </p>
        <div
          style={{
            padding: '2rem',
            borderLeft: '3px solid black',
          }}
          className={styles['quote']}
        >
          “Our first computers were born not out of greed or ego, but
          in the revolutionary spirit of helping common people rise
          above the most powerful institutions.” (Steve Wozniak).
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div
            style={{
              margin: '6rem 0',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <h2 style={{ marginBottom: '1rem', marginTop: '1rem' }}>
              Advantages of Self-Learner Programmers:
            </h2>

            <ul style={{ textAlign: 'center' }}>
              <li>
                - Free time to learn whatever information you want.
              </li>
              <li>
                - No time wasting on details such as informations
                taught in class
              </li>
              <li>
                - More time to build portfolie projects for job
                applications
              </li>
            </ul>

            <h2 style={{ marginBottom: '1rem', marginTop: '1rem' }}>
              Advantages of being Software Engineer Student
            </h2>

            <ul style={{ textAlign: 'center' }}>
              <li>
                - Most of the companies looking for a software
                engineering degree on their job applications
              </li>
              <li>
                - Reaching usefull informatin withour distraction of
                useless tutorials on the internet
              </li>
              <li>
                - Finding your questions so easily with getting help
                of the Professors rather than wasting time on
                understanding documentations on the web.
              </li>
            </ul>
          </div>
        </div>

        <h2 style={{ margin: '2rem 0' }}>
          Aproximate Number of Self-Taught Developers
        </h2>

        <p>
          According to The Washington Post, 69 percent of the
          developers stated that they are almost self-taught, whereas
          13% claimed to be completely self-taught as the Stack
          Overflow website who has more than 4 million users who are
          mostly programmers and developers.
          <a
            href="https://insights.stackoverflow.com/survey/2016#developer-profile-education"
            target="_blank"
          >
            Stack Overflow Survey
          </a>
          .
        </p>

        <p>
          The number of people who say they are self-taught in
          computer science has increased about 69% this year. People
          are increasingly resorting to online courses, such as
          massive open online courses (MOOCs), (Washington Post,
          2018). People rather learning from online courses such as{' '}
          <a href="https://udemy.com">Udemy</a>,{' '}
          <a href="https://freecodecamp.org">Free Code Camp</a> than
          College classes.
        </p>

        <ProgressiveBar
          title="Elon Musk Says you don't need a college degree"
          soundFile="/sounds/elon.mp4"
        />

        <p>
          Big companies like Apple Inc., Microsoft changed their
          scholar policy from demanding Computer Engineering College
          degree, now they no longer want College Degre as most of the
          applicants are self-taught. (selftaught.blog).{' '}
          <a
            target="_blank"
            href="https://selftaught.blog/8-companies-that-hire-programmers-without-degrees/"
          >
            Companies
          </a>{' '}
          who doesn't make the college degree mandatory. The
          Washington Post stated that boot-camp graduates earn an
          average salary of $112,493, compared to $103,801 for those
          with a four-year college degree computer science. Boot camps
          are closer to urban centers, and self-trained workers earn
          more money. That shows us the importance of the bootcamps
          and self-trainings.
        </p>

        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '3rem 0' }}>
            Here is a self-learner software developer (Me) developing
            this very blog with the coding skills I learned from the
            internet.
          </h2>

          <iframe
            width="760"
            height="455"
            src="https://www.youtube.com/embed/yP1zRwxW5g8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div style={{ fontSize: '18px', margin: '2rem' }}>
            Link:{' '}
            <a
              href="https://www.youtube.com/watch?v=yP1zRwxW5g8&t=162s&ab_channel=RuzgarAtaOzkan"
              target="_blank"
              without
              rel="noreferrer"
            >
              New Media Blog Project with ReactJS
            </a>
          </div>
        </div>
        <ProgressiveBar
          title="Interview with a Self-Learner Developer"
          soundFile="/sounds/rock.mp3"
        />
        <div
          style={{
            marginTop: '12rem',
          }}
        >
          <h2>References:</h2>
          <p>
            <a href=" https://medium.com/the-self-taught-programmer/the-ten-greatest-self-taught-programmers-of-all-time-b59b1b3bb9e6">
              {' '}
              https://medium.com/the-self-taught-programmer/the-ten-greatest-self-taught-programmers-of-all-time-b59b1b3bb9e6
            </a>
          </p>

          <p>
            <a href="https://en.wikipedia.org/wiki/Software_development">
              https://en.wikipedia.org/wiki/Software_development
            </a>
          </p>
          <p>
            <a href="https://www.washingtonpost.com/news/the-switch/wp/2016/03/30/lots-of-coders-are-self-taught-according-to-developer-survey/">
              https://www.washingtonpost.com/news/the-switch/wp/2016/03/30/lots-of-coders-are-self-taught-according-to-developer-survey/
            </a>
          </p>

          <p>
            <a href="https://selftaught.blog/8-companies-that-hire-programmers-without-degrees/">
              https://selftaught.blog/8-companies-that-hire-programmers-without-degrees/
            </a>
          </p>

          <p>
            <a href="https://www.washingtonpost.com/news/the-switch/wp/2016/03/17/why-students-are-throwing-tons-of-money-at-a-program-that-wont-give-them-a-college-degree/">
              https://www.washingtonpost.com/news/the-switch/wp/2016/03/17/why-students-are-throwing-tons-of-money-at-a-program-that-wont-give-them-a-college-degree/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
