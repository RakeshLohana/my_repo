import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 1rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Article = styled.article`
  background-color: white;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border: 1px solid black;
  margin-bottom: 3rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;
`;



function BlogPost1() {
  return (
    <Container>
    <Header>
      <Title>My Blog</Title>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </Header>
    <Content>
      <Article>
        <Image src="images/Sponsos/image_3.jpg" alt="Blog Post" />
        <h1>Web Development</h1>
        <h2>Essential Tips</h2>
        <ul>
          <li>Optimize your images and files to reduce page load time</li>
          <li>Use a content delivery network (CDN) to serve your website's assets.</li>
          <li>Implement caching techniques to improve website performance</li>
          <li>Minimize the use of plugins and third-party scripts</li>
          <li>Use a reliable hosting provider to ensure your website is always up and running</li>
        </ul>
        <div className='text-center'>
<a  className='main-btn text-decoration-none' href='https://en.wikipedia.org/wiki/Web_development'  target='_blank'> Read more </a>
</div>
      </Article>
      <Article>
      <Image src="images/Sponsos/image_4.jpg" alt="Blog Post" />
        <h1>App Developmet</h1>
        <h2>Essential Tips</h2>
        <ul>
          <li>Your app should be easy to navigate, visually appealing, and intuitive to use.</li>
          <li> A well-planned app archEventture can make your code more maintainable and scalable in the long run.</li>
          <li>Slow app performance can lead to user frustration and lower engagement. Optimize your code and assets to ensure your app runs smoothly.</li>
          <li>est your app across different devices, platforms, and scenarios to ensure it works as expected for all users.</li>
        </ul>
        <div className='text-center'>
<a  className='main-btn text-decoration-none' href='https://en.wikipedia.org/wiki/Mobile_app_development'  target='_blank'> Read more </a>
</div>
        
      </Article>
    </Content>
    <Content>
      <Article>
        <Image src="images/Sponsos/image_6.jpg" alt="Blog Post" />
        <h1>Speed Programming</h1>
        <h2>Essential Tips</h2>
        <ul>
          <li>Spend some time planning your approach and breaking down the problem into smaller tasks. </li>
          <li>Knowing keyboard shortcuts for your code editor or IDE can save you a lot of time and increase your productivity.</li>
          <li>Writing code that is easy to read and understand can help you avoid errors and make debugging easier</li>
          <li>Speed programming is a skill that requires practice. The more you do it, the more efficient you'll become.</li>
        </ul>
        <div className='text-center'>
<a  className='main-btn text-decoration-none' href='https://en.wikipedia.org/wiki/Competitive_programming'  target='_blank'> Read more </a>
</div>
      </Article>
      <Article>
      <Image src="images/Sponsos/image_5.jpg" alt="Blog Post" />
        <h1>Game Development</h1>
        <h2>Essential Tips</h2>
        <ul>
          <li>Begin with a small and manageable game project to gain experience and build your skills.</li>
          <li> Gameplay is the most important aspect of a game. Prioritize creating a fun and engaging gameplay experience for your players.</li>
          <li>Test your game regularly to identify and fix bugs.</li>
          <li> Once your game is functional, focus on adding polish and improving the overall player experience with better graphics, sound, and user interface.</li>
          <li> Listen to feedback from players and be willing to make changes to improve your game.</li>
        </ul>
        <div className='text-center'>
<a  className='main-btn text-decoration-none' href='https://en.wikipedia.org/wiki/Video_game_development'  target='_blank'> Read more </a>
</div>
        
      </Article>
    </Content>
   
  </Container>
  );
}

export default BlogPost1;
